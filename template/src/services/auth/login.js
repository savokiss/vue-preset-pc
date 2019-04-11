import api from '../api'

/**
 * 登录
 * @param {Object} params
 */
function login (params) {
  return api.get('/login', params)
}

export default {
  login
}
