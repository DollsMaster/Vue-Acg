<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-07-21 22:39:14
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-07-24 00:11:53
 * @FilePath: \fkoad:\Github\vue-acg\src\views\fontEnd\workSpace\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="workSpace" >
        <bannerVue></bannerVue>
        <div class="main" v-if="loadding">
            <menuVue @change="menuChange"></menuVue>
            <component class="component-wrap" :is="getComponentName" @successEv="successEv" />
        </div>
    </div>
</template>

<script>
import bannerVue from '@/components/banner';
import menuVue from './menu.vue';
const obj = {};
    obj["bannerVue"] = bannerVue;
    obj["menuVue"] = menuVue;
const requireComponent = require.context('../workSpace/components', false, /\w+\.vue$/);
    requireComponent.keys().forEach(fileName => {
        let names = fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");
        const componentConfig = requireComponent(fileName);
        // 若该组件是通过"export default"导出的，优先使用".default"，否则退回到使用模块的根
        obj[names] = componentConfig.default || componentConfig;
    });
export default {
    components: obj,
    data() {
        return {
            loadding: false,
            getComponentName: null
        }
    },
    watch: {
        $route(newValue, oldValue) {
            this.init();
        }
    },
    created () {
        this.init();
    },
    methods: {
        init() {
            this.loadding = false;
            setTimeout(() => {
                this.loadding = true;
            }, 200);;
        },
        menuChange(data) {
            console.log('--menuChange-');
            console.log(data);
            this.getComponentName = data.value;
        },
        successEv(data) {
            console.log('-------------------emit', data);
            if (data && data.router_to) {
                this.getComponentName = data.router_to;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.workSpace {
    display: flex;
    flex-direction: column;
    width: inherit;
}
.main {
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
}
.component-wrap {
    margin: 0 0 0 1rem;
    width: 100%;
}
</style>