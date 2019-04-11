function setItem (key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 这里默认从json转换了
function getItem (key) {
  var item = window.localStorage.getItem(key)
  if (_isJSON(item)) {
    item = JSON.parse(item)
  }
  return item
}

function removeItem (key) {
  var item = window.localStorage.getItem(key)
  if (item) {
    window.localStorage.removeItem(key)
    return true
  } else {
    return false
  }
}

function clear () {
  return window.localStorage.clear()
}

function getLength () {
  return window.localStorage.length
}

// 判断是否是JSON，大概判断而已
function _isJSON (item) {
  return /(\[|\{).*(\]|\})/.test(item)
}

export default {
  setItem,
  getItem,
  removeItem,
  clear,
  getLength
}
