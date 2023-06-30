/*
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-27 09:21:17
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-30 15:23:48
 * @FilePath: \ebike-webd:\GithubProject\vue-acg\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    url: `/user/getUserByToken/${token}`,
    method: `get`,
  })
}
export function loginOut(data) {
  return request({
    url: `/user/loginOut`,
    method: `post`,
    data
  })
}