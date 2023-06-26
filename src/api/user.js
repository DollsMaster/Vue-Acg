import request from '@/utils/request'


export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function register(data) {
  return request({
    url: `/user/register`,
    method: `post`,
    data: data
  })
}

export function getUserList(params) {
  return request({
    url: `/user/getUserList`,
    method: `get`,
    params
  })
}

export function login(data) {
  return request({
    url: `/user/login`,
    method: `post`,
    data
  })
}

export function getUserByToken(token) {
  return request({
    url: `/getUserByToken/${token}`,
    method: `get`,
  })
}