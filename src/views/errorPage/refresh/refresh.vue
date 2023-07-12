<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-07-11 15:33:07
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-07-11 15:47:57
 * @FilePath: \ebike-webd:\GithubProject\vue-acg\src\views\errorPage\refresh\refresh.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  
</template>

<script>
export default {
    name: `refresh`,
    beforeRouteEnter(to, from, next) {
        next(vm => { 
            vm.$router.replace({path: from.path, params: vm.$route.params})
        // 跳到该路由页面后，再替换为from.path来源路径
        })
    }
}
</script>

<style>

</style>