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
    methods: {
        clickEv(data) {
            this.$emit('change', data);
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.menu {
    width: 20%;
    @include box-shadow;
    ul {
        display: flex;
        flex-direction: column;
        li {
            .menu-title, .menu-children {
                i {
                    padding: 0 0.5rem 0 0;
                }
            }
            .menu-title {
                padding: 0.8rem 1rem;
            }
            .menu-children {
                padding: 0.8rem 1rem;
                font-size: 12px;
                color: var(--sys--preset--background--word--color--grey-low);
            }
        }
    }
}
</style>