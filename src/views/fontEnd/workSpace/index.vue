<template>
    <div class="workSpace">
        <bannerVue></bannerVue>
        <div class="main">
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
            getComponentName: null
        }
    },
    methods: {
        menuChange(data) {
            console.log('---');
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
    padding: 1.5rem;
    width: 100%;
}
</style>