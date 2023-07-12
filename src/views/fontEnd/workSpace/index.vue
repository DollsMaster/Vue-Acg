<template>
    <div class="workSpace" >
        <bannerVue></bannerVue>
        <div class="main" v-if="loadding">
            <menuVue @change="menuChange"></menuVue>
            <component class="component-wrap" :is="getComponentName"  />
        </div>
    </div>
</template>

<script>
import bannerVue from '@/components/banner';
import menuVue from './menu.vue';
const obj = {};
obj["bannerVue"] = bannerVue;
obj["menuVue"] = menuVue;
const requireComponent = require.context('../workSpace/children', false, /\w+\.vue$/);
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