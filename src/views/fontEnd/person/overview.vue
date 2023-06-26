<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-22 19:08:00
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-22 19:53:55
 * @FilePath: \fkoad:\CPerson\ACG\vue-acg\src\views\fontEnd\person\overview.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="container">

    </div>
</template>

<script>
import fontendDictionary from "@/utils/fontendDictionary";
export default {
    data() {
        return {
            key: "value",
            list: [],
        }
    },
    beforeMount () {
        this.initContoller();
    },
    methods: {
        initContoller() {
            let list = JSON.parse(JSON.stringify(fontendDictionary.overview));
                
        }
    },
}
</script>
<style lang="scss" scoped>
.container {
    background-color: #fff;
    box-shadow: 0 2px 2px grey;
}
</style>