<template>
    <div class="container hp100">
        <headerVue></headerVue>
        <div class="main">
            <div class="shade"></div>
            <img :src="url">
            <div class="main-wrap">
                <div class="main-banner">
                    <img class="wp100 hp100" :src="bannerUrl" alt="">
                </div>
                <div class="person-info">
                    <div>
                        <img :src="url">
                        <span>DollsMaster</span>
                    </div>

                    <div class="person-control">
                        <span>
                            <i></i>
                            <p>关注</p>
                        </span>
                        <span>
                            <i></i>
                            <p>站内信</p>
                        </span>
                    </div>
                </div>
                <ul class="navbar-list">
                    <li v-for="(item, index) in navbar" 
                    :key="index"
                    :class="{checked: navbarChecked === index}" 
                    @click="navbarChecked = index">
                        <i :class=[item.icon]></i>
                        <p>{{item.label}}</p>
                        <span></span>
                    </li>
                </ul>

                
            </div>
        </div>
    </div>
</template>

<script>
import headerVue from '@/views/fontEnd/home/header.vue';
import fontendDictionary from "@/utils/fontendDictionary";
export default {
    components: {
        headerVue,
    },
    data() {
        return {
            navbarChecked: 0,
            bannerUrl: "https://img.zcool.cn/community/0136765a55f7a4a8012113c7687e00.jpg@2o.jpg",
            url: "https://dthezntil550i.cloudfront.net/w8/latest/w81706122001576120000407005/1280_960/ae7216d6-bafb-4d35-9288-5a562578f5a4.png",
            navbar: []
        }
    },
    beforeMount () {
        this.initController();
    },
    methods: {
        initController() {
            this.initNavbar();
        },
        initNavbar() {
            console.log('-fontendConfig');
            console.log(fontendDictionary);
            this.navbar = fontendDictionary.dictionary.personNavbar;
            //this.navbar = fontendConfig.personNavbar;
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';

$navBarListTextDefaultColor: var(--sys--preset--color--grey-middle);
$navBarListTextCheckedColor: var(--sys--preset--color--grey-high);
.container {
    display: flex;
    flex-direction: column;
}
.main {
    position: relative;
    padding: 0 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    >img {
        position: absolute;
        z-index: -2;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    .shade {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #ffffff, $alpha: 0.5);
        backdrop-filter: blur(15px);	
    }
    //
}
.main-wrap {
    padding: 1rem 0;
    @include publicMainWidth;
    display: flex;
    flex-direction: column;
}
.main-banner {
    width: inherit;
    height: 200px;
    border-radius: 5px;
    img {
        border-radius: 10px;
    }
}
.person-info {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .person-control {
        span {
            :first-child {
                border-radius: 30px 0 0 30px;
                //background-color: ;
            }
        }
    }
    >div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    img {
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
    }
}
.navbar-list {
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    border-radius: 10px;
    .checked {
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background-color: var(--sys--preset--background--color--black-low);

        }
        p, i {
            color: $navBarListTextCheckedColor;
        }
    }
    >li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        margin-left: -1px;
        padding: 1rem 0;
        width: 100%;
        text-align: center;
        cursor: pointer;
        &:hover {
            background-color: var(--sys--preset--background--color--grey-low);
            p {
                color: $navBarListTextCheckedColor;
            }
        }

        i, p {
            color: $navBarListTextDefaultColor;
        }
        
    }
}

//
</style>