import { Notification } from "element-ui";
import axios from "axios";
import store from "@/store";

const baseURL = "http://116.63.172.108/api";
// const baseURL = "http://127.0.0.1:8000/api";

const service = axios.create({
  baseURL,
  timeout: 26000
});

function retry(config) {
  if (config.headers.noRetry) {
    return false;
  }
  if (config.headers.retryCount <= 3) {
    return service(config);
  } else {
    return false;
  }
}

function errorHandler(count, msg) {
  if (count > 3) {
    Notification.error({
      title: "请求错误",
      message: msg
    });
  }
}

service.interceptors.request.use(
  config => {
    // 挂载关闭请求
    config.cancelToken = new axios.CancelToken(cancel => {
      window._axiosPromiseArr = window._axiosPromiseArr || [];
      window._axiosPromiseArr.push(cancel);
    });
    config.headers.Authorization = "cuit " + store.getters.token;
    // 重试
    if (typeof config.headers.retryCount === "number") {
      config.headers.retryCount++;
    } else {
      config.headers.retryCount = 0;
    }
    return config;
  },
  error => {
    errorHandler(error.config.headers.retryCount, error.message);
    return retry(error.config);
  }
);

service.interceptors.response.use(
  response => {
    const { data, config } = response;
    const { status, msg } = data;
    if (status === 0) {
      return data;
    } else if (status === 100) {
      store.dispatch("user/resetStatus").then(() => {
        if (!config.headers.getUserinfo) {
          location.reload();
        }
      });
      return false;
    }
    Notification.error({
      title: "提示",
      message: msg
    });
    return false;
  },
  error => {
    const { response } = error;
    if (response) {
      const { status, msg } = response.data;
      if (response.status === 400) {
        if (status === 100) {
          store.dispatch("user/resetStatus").then(() => {
            if (!config.headers.getUserinfo) {
              location.reload();
            }
          });
          return false;
        }
        Notification.error({
          title: "提示",
          message: msg
        });
        return false;
      }
    }
    if (axios.isCancel(error)) {
      return false;
    }
    if (error.message.includes("timeout")) {
      error.message = "请求超时";
    }

    errorHandler(error.config.headers.retryCount, error.message);
    return retry(error.config);
  }
);

export default service;
