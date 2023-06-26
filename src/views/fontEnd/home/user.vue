<template>
    <div class="user-container">
        <div class="user-cover" slot="reference" v-if="islogin">
            <img  :src="url" alt="" srcset="" @click="userInfoVisable = !userInfoVisable">
        </div>
        <div class="user-login-btn">
            <span @click="registerData = Math.random()">登陆</span>
        </div>
        <div class="user-info" :class="{'user-info-show': userInfoVisable}">
            <h1>积分: 1000</h1>
            <ul>
                <li v-for="(item, index) in config" :key="index">
                    <h1>{{item.name}}</h1>
                    <div v-for="(itema, indexa) in item.children" :key="indexa">
                        <span></span>
                        <p>{{itema.name}}</p>
                    </div>
                </li>
            </ul>
        </div>

        <register-vue :data="registerData"></register-vue>
    </div>
</template>

<script>
import registerVue from './register.vue'
const config = [
    {
        name: '个人设置',
        icon: '',
        children: [
            {
                name: '我的概述'
            },{
                name: '我的设置'
            }
        ]
    },{
        name: '游戏中心',
        children: [
            {
                name: '勋章'
            }
        ]
    },{
        name: '圈子'
    },{
        name: '消息管理'
    },{
        name: '文章管理'
    }
]
export default {
    name: "user",
    components: {
        registerVue,
    },
    data() {
        return {
            url: "https://dthezntil550i.cloudfront.net/w8/latest/w81706122001576120000407005/1280_960/ae7216d6-bafb-4d35-9288-5a562578f5a4.png",
            islogin: false,
            userStatus: true,
            userInfoVisable: false,
            config: config,
            registerData: null
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
    max-width: 500px;
    max-height: 500px;
}
.user-info {
    z-index: -1;
    visibility: hidden;
    transition: all 0.5s;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
    height: auto;
    max-width: 0;
    max-height: 0;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 0 1px hsla(240,0%,100%,.3) inset,
            0 .5em 1em rgba(0, 0, 0, 0.6);
    overflow: hidden;
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
            padding: 0 1rem;
            * {
                white-space: nowrap;
            }
            >div {
                padding: 1rem 0 0 0;
            }
        }
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