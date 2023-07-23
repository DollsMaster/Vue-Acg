<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-07-21 22:39:14
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-07-23 23:45:49
 * @FilePath: \fkoad:\Github\vue-acg\src\views\fontEnd\workSpace\menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="menu">
        <ul>
            <li v-for="(item, index) in menu" :key="index">
                <div class="menu-title">
                    <i :class=[item.icon]></i>
                    <span>{{item.name}}</span>
                </div>
                <div v-for="(itema, indexa) in item.children" :key="indexa" class="menu-children" @click="clickEv(itema)">
                    <i :class=[itema.icon]></i>
                    <span>{{itema.name}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import fontendDictionary from '@/utils/fontendDictionary';
export default {
    data() {
        return {
            menu: fontendDictionary.dictionary.userNavbar
        }
    },
    mounted () {
        this.init();;
    },
    methods: {
        init() {
            const params = this.$route.query;
                if (params.hasOwnProperty("params")) {
                    console.log('aaaa');
                    console.log(params.params);
                    console.log(this.menu);
                    this.$emit('change', JSON.parse(params.params));
                } else {

                    console.log('zzzzzzz');
                    console.log(this.menu[0].children[0]);
                    this.$emit('change', this.menu[0].children[0]);
                }
        },
        clickEv(data) {
            console.log('==data');
            console.log(data);
            this.$emit('change', data);
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.menu {
    width: 20%;
    ul {
        padding: 1rem 0;
        
        @include box-shadow;
        display: flex;
        flex-direction: column;
        li {
            .menu-title, .menu-children {
                padding: .5rem 1rem;
                i {
                    padding: 0 0.5rem 0 0;
                }
                &:hover {
                    cursor: pointer;
                    color: #353535;
                    background-color: #f6f6f6;
                }
            }
            .menu-children {
                
                
                font-size: 12px;
                color: var(--sys--preset--background--word--color--grey-low);
            }
            
        }
    }
}
</style>