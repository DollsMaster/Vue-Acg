<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-13 17:29:41
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-28 17:57:57
 * @FilePath: \fkoad:\Web\vue-acg\src\views\home\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="home-container">
        <main-vue></main-vue>
    </div>
</template>

<script>
import headerVue from './header.vue';
import mainVue from './main.vue';
export default {
    name: 'home',
    components: {
        headerVue,
        mainVue,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>