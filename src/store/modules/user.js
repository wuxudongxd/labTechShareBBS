import {removeToken, setToken, getToken} from "@/utils/auth";
import {reqLogin, reqGetUserinfo, reqUpdateUserinfo, reqGetHealthClock} from "@/api/user";

const token = getToken();
const state = {
  token: token || "",
  userinfo: null
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USERINFO(state, userinfo) {
    state.userinfo = userinfo;
  }
};

const actions = {
  async login({commit}, {user, password}) {
    const res = await reqLogin({user, password});
    if (res) {
      setToken(res.token);
      commit("SET_TOKEN", res.token);
      return Promise.resolve(res.token);
    } else {
      return Promise.resolve(false);
    }
  },
  async getUserinfo({commit}) {
    const res = await reqGetUserinfo();
    if (res) {
      commit("SET_USERINFO", res.results);
      return Promise.resolve(res.results);
    } else {
      return Promise.resolve(false);
    }
  },
  async updateUserinfo({commit}, data) {
    const res = await reqUpdateUserinfo(data);
    if (res) {
      commit("SET_TOKEN", res.token);
      setToken(res.token);
      commit("SET_USERINFO", res.results);
      return Promise.resolve(res.results);
    }
    return Promise.resolve(false);
  },
  resetStatus({commit}) {
    commit("SET_TOKEN", "");
    commit("SET_USERINFO", null);
    removeToken();
    return Promise.resolve();
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
