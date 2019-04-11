import * as types from '../mutation-types'

const template = {
  loggedUser: {}
}

const state = {
  ...template
}

const getters = {
  loggedUser: state => state.loggedUser
}

const actions = {
  userLogin ({ commit }, user) {
    commit(types.USER_LOGIN, user)
  },
  userLogout ({ commit }) {
    commit(types.USER_LOGOUT)
  }
}

const mutations = {
  [types.USER_LOGIN] (state, user) {
    state.loggeedUser = Object.assign({}, user)
  },
  [types.USER_LOGOUT] (state) {
    state.loggedUser = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
