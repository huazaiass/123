import request from '@/utils/request'

export function login(username, password) {
  // 登录方法
  return request({
    url: '/admin/sysuser/login', // http://127.0.0.1:8120/admin/sysuser/login
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  // 查看信息
  return request({
    url: '/admin/sysuser/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  // 退出
  return request({
    url: '/admin/sysuser/logout',
    method: 'post'
  })
}
