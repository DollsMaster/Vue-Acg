<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-13 17:53:20
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-23 19:14:32
 * @FilePath: \fkoad:\Web\vue-acg\src\views\fontEnd\fontend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="fontend wp100 hp100">
        <headerVue></headerVue>
        <router-view />
    </div>
</template>

<script>
import headerVue from './home/header';
export default {
    name: "fontend",
    components: {
        headerVue
    }
}
</script>

<style>

</style>