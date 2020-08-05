import request from "@/utils/request";
export function reqLogin(data) {
  return request({
    method: "post",
    url: "/login/",
    data
  });
}

export function reqGetUserinfo() {
  return request({
    url: "/users/detail",
    headers: {
      getUserinfo: true
    }
  });
}

export function reqUpdateUserinfo(data) {
  return request({
    method: "put",
    url: "/users/detail/",
    data
  });
}
