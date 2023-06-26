<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-14 18:21:51
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-19 16:52:35
 * @FilePath: \fkoad:\Web\vue-acg\src\views\backEnd\layout\view.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <transition name="fade-transform" mode="out-in">
        <router-view class="router-view wp100" :key="getPath()"/>
    </transition>
</template>

<script>
export default {
    name: "view",
    data() {
        return {
            
        }
    },
    methods: {
        getPath() {
            const path = this.$route.path;
            return path;
        }
    }
}
</script>
<style lang="scss" scoped>
.router-view {
}
</style>