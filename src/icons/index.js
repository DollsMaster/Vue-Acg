/*
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-13 17:04:33
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-13 17:28:48
 * @FilePath: \fkoad:\Web\vue-acg\src\icons\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
