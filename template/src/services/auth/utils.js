import Cookies from 'js-cookie'
import config from '@/config'

// 认证信息包括 token && 需要在发请求时带在 header 上
const TOKEN_KEY = config.TOKEN_KEY
// 登录后的用户信息
const USER_KEY = config.USER_KEY

const EXPIRES = config.TOKEN_EXPIRES

export function getToken () {
  return Cookies.get(TOKEN_KEY)
}

export function setToken (value) {
  return Cookies.set(TOKEN_KEY, value, { expires: EXPIRES })
}

export function removeToken () {
  return Cookies.remove(TOKEN_KEY)
}

export function setUser (value) {
  return Cookies.set(USER_KEY, value, { expires: EXPIRES })
}

export function getUser () {
  return JSON.parse(Cookies.get(USER_KEY))
}

export function removeUser () {
  return Cookies.remove(USER_KEY)
}

export function loggedIn () {
  return !!Cookies.get(TOKEN_KEY)
}

export default {
  getToken,
  setToken,
  setUser,
  getUser,
  removeToken,
  removeUser,
  loggedIn
}
