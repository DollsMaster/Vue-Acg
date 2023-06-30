<template>
    <div class="user-container" @mouseover="userInfoVisable = islogin?true:false" @mouseout="userInfoVisable = false">
        <div class="user-cover" slot="reference" v-if="islogin">
            <img  :src="url" alt="" srcset="" >
        </div>
        <div class="user-login-btn" v-else>
            <span @click="registerData = Math.random()">登陆</span>
        </div>
        <div class="user-info" :class="{'user-info-show': userInfoVisable}">
            <h1>积分: 1000</h1>
            <ul>
                <li v-for="(item, index) in config" :key="index">
                    <div class="user-nav-title">
                        <i :class=[item.icon]></i>
                        <h1>{{item.name}}</h1>
                    </div>
                    <div v-for="(itema, indexa) in item.children" :key="indexa" class="user-nav-children" @click="navbarClick(itema)">
                        <i :class=[itema.icon]></i>
                        <p>{{itema.name}}</p>
                    </div>
                </li>
            </ul>
        </div>

        <register-vue :data="registerData"></register-vue>
    </div>
</template>

<script>
import registerVue from '@/components/register/register.vue'
import fontendDictionary from '@/utils/fontendDictionary';
import { mapState } from 'vuex';
import { loginOut } from '@/api/user';
const userNavbar = fontendDictionary.dictionary.userNavbar;
export default {
    name: "user",
    components: {
        registerVue,
    },
    data() {
        return {
            url: "https://dthezntil550i.cloudfront.net/w8/latest/w81706122001576120000407005/1280_960/ae7216d6-bafb-4d35-9288-5a562578f5a4.png",
            islogin: null,
            userStatus: true,
            userInfoVisable: false,
            config: userNavbar,
            registerData: null
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.userInfo
        }),
    },
    watch: {
        userInfo(newValue, oldValue) {
            
            this.islogin = this.userInfo;
        }
    },
    beforeMount () {
        this.initController();
    },
    methods: {
        initController() {
            this.islogin = this.userInfo;
        },
        navbarClick(item) {
            this.userInfoVisable = false;
            if (item.url) {
                this.$router.push({'path': item.url});
            }
            if (item.value === `loginOut`) {
                console.log(this.userInfo);
                loginOut({id: this.userInfo.id}).then(res => {
                    location.reload();
                });
            }
            console.log(item);
        }
    },
}
</script>
<style lang="scss" scoped>
.user-container {
    position: relative;
}
.user-login-btn {
    span {
        &:active {
            background-color: var(--sys--preset--background--color--black-low);
        }
        padding: 1.5rem 1.3rem;
        color: #fff;
        white-space: nowrap;
        border-radius: 20px;
        background-color: var(--sys--preset--background--color--black-middle);
        cursor: pointer;
    }

}
.user-cover {
    width: 45px;
    height: 45px;
    position: relative;
    z-index: 2;
    img {
        border: solid 2px gray;
        width: inherit;
        height: inherit;
        border-radius: 100%;
        object-fit: cover;
        cursor: pointer;
    }
}
.user-container  .user-info-show {
    z-index: 1;
    visibility: visible;
    transform: scale(1, 1);
    transform-origin: 90% 10px;
    /* max-width: 500px;
    max-height: 500px; */
}
.user-info {
    &:hover {
        
    }
}
.user-info {
    z-index: -1;
    visibility: hidden;
    transition: all 0.3s;
    position: absolute;
    transform: scale(0, 0);
    transform-origin: 90% 10px;
    right: 0;
    top: 0;
    width: auto;
    height: auto;
    max-width: 500;
    max-height: 500;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 0 1px hsla(240,0%,100%,.3) inset,
            0 .5em 1em rgba(0, 0, 0, 0.6);
    overflow: hidden;
    backdrop-filter: blur(8px);
    >h1 {
        padding: 1rem 0;
        border-radius: 5px 5px 0 0;
        width: inherit;
        text-align: center;
        color: #fff;
        background-color: #656464;
    }
    >ul {
        padding: 1rem;
        display: flex;
        flex-direction: row;
        
        li {
            cursor: default;
            border-left: solid 1px var(--sys--preset--color--grey-low);
            :first-child {
                border-left: 0;
            }
            * {
                white-space: nowrap;
            }
        }
    }
}
.user-nav-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    i {
        padding: 0.5rem;
        font-size: 1rem;
        color: #fff;
        background-color: var(--sys--preset--background--color--black-middle);
        border-radius: 100%;
    }
    h1 {
        padding: 0.8rem 0;
        color: gray;
    }
}
.user-nav-children {
    
    min-width: 6rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    &:hover {
        transition: all 0.2s;
        background-color: var(--sys--preset--background--color--black-middle);
        p, i {
            color: #fff;
        }
    }
    i {
        padding: 0 5px 0 0;
    }
    p {
        font-size: 12px;
    }
}
</style>
<style lang="scss">
.el-popover-user {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 0 1px hsla(240,0%,100%,.3) inset,
            0 .5em 1em rgba(0, 0, 0, 0.6);
}
</style>