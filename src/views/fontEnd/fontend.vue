<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-13 17:53:20
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-07-11 16:42:33
 * @FilePath: \fkoad:\Web\vue-acg\src\views\fontEnd\fontend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="fontend wp100 hp100">
        <headerVue></headerVue>
        <div class="container">
            <router-view class="router-view-wrap" ></router-view>
        </div>
    </div>
</template>

<script>
import headerVue from './home/header';
export default {
    name: "fontend",
    components: {
        headerVue
    },
    methods: {
        getKey() {
            return Math.random()
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/system';

.container {
    display: flex;
    justify-content: center;
    background-color: #eee;
}
.container .router-view-wrap {
    width: var(--system-width);
}
</style>