/*
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-22 16:59:12
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-26 15:28:11
 * @FilePath: \fkoad:\CPerson\ACG\vue-acg\src\utils\auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Cookies from 'js-cookie'

const TokenKey = 'satoken'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
