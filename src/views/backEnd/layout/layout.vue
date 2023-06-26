<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-14 17:34:28
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-19 16:54:04
 * @FilePath: \fkoad:\Web\vue-acg\src\views\backEnd\layout\layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="layout hp100">
        <header-vue />
        <div class="main">
            <nav-bar-vue />
            <view-vue />
        </div>
    </div>
</template>

<script>
import viewVue from './view.vue';
import headerVue from './header.vue';
import navBarVue from './navBar.vue';
export default {
    name: 'layout',
    components: {
        headerVue,
        navBarVue,
        viewVue
    },
}
</script>
<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
}
.main {
    display: flex;
    flex-direction: row;
    height: calc(100% - 70px);
}
</style>