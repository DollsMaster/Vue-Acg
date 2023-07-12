<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-15 17:40:46
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-07-11 14:46:28
 * @FilePath: \fkoad:\Web\vue-acg\src\views\fontEnd\home\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="header-container wp100">
        <div class="header-navbar">
            <div class="header-navbar-background"></div>
            <div class="header-navbar-wrap">
                <ul class="">
                    <li 
                    v-for="(item, index) in navbarOptions" 
                    :key="index" 
                    @mouseover="secondMenuChecked = index" 
                    @mouseout="secondMenuChecked = null">
                        <div v-if="item.label === '首页'" >
                            <i class="el-icon-s-home"></i>
                            <span class="header-navbar-text" @click="clickEv(item)">{{item.name}}</span>
                        </div>
                        <div v-else>
                            <span class="header-navbar-text" @click="clickEv(item)">{{item.name}}</span>
                            <ul class="second-menu-list" v-show="item.children.length > 0 && secondMenuChecked === index">
                                <li v-for="(itema, indexb) in item.children" :key="indexb" @click="clickEv(itema)">{{itema.name}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <work-control-vue></work-control-vue>
            </div>
        </div>
    </div>
</template>

<script>
import { getMenuList } from '@/api/menu'
import workControlVue from '@/components/workControl/workControl.vue'
export default {
    components: {
        workControlVue,
    },
    data() {
        return {
            navbarOptions: [],
            secondMenuChecked: null
        }
    },
    beforeMount () {
        this.initController();
    },
    methods: {
        initController() {
            getMenuList().then(res => {
                const {result} = res;
                    this.navbarOptions = result;
            });
            
        },
        clickEv(data) {
            this.$router.push({path: data.url, params: data});
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.header-container {
    z-index: 10;
    //position: relative;
    //z-index: 10;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 14rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-image: url("https://www.hmoeh.com/wp-content/uploads/2023/05/80e19b6816f6836185938e0f27984bee.png"); */
}
.header-navbar {
    z-index: 10;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 3rem;
}
.header-navbar .header-navbar-background {
    position: absolute;
    z-index: 0;
    width: inherit;
    height: inherit;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: 0 0 0 1px hsla(240,0%,100%,.3) inset,
            0 .5em 1em rgba(0, 0, 0, 0.6);
}
.header-navbar-wrap {
    position: relative;
    width: var(--system-width);
    display: flex;
    flex-direction: row;
    align-items: center;
    >ul, li, div, span {
        display: flex;
        align-items: center;
        height: inherit;
        cursor: pointer;
    }
    >ul {
        width: 100%;
        height: 100%;
        cursor: default;
    }
    li {
        >div {
            >span {
                &:hover {
                    transition: all 0.2s;
                    background: hsla(0, 0%, 100%, 0.3);
                }
            }
           
        }
        
    }
    .header-navbar-text {
        padding: 0 1rem;
        font-size: 0.5rem;
    }
    .second-menu-list {
        padding: 0.5rem 0;
        position: absolute;
        z-index: 2;
        top: 48px;
        display: flex;
        flex-direction: column;
        min-width: 10rem;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 2px 4px 6px var(--sys--preset--background--color--grey-low);
        border-radius: 5px;
        >li {
            width: inherit;
            padding: 0.7rem 0.5rem;
            font-size: 0.5rem;
            &:hover {
                color: #fff;
                background-color: var(--sys--preset--color--grey--deep);
            }
        }
    }
}
</style>
<style scoped>
.header-navbar >>> .header-navbar-text {
    color: #333;
    font-size: 14px;
    text-shadow: 0 1px 1px hsla(0, 0%, 49%, 0.5);
}
</style>