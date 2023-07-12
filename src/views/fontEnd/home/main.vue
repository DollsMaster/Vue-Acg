<template>
    <div class="main-container">
        <div class="banner-wrap">
            <el-carousel class="el-carousel-banner" trigger="click" style="width: 100%;height: 19rem;">
                <el-carousel-item v-for="(item, index) in bannerList" :key="index">
                    <img class="wp100 hp100" style="border-radius: 5px" :src="item.url" alt="">
                    <span>{{item.label}}</span>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="hot-wrap">
                <bannerPreview-vue 
                :data="item" 
                v-for="(item, index) in list" 
                :key="index"
                ></bannerPreview-vue>
        </div>

        <!-- 最近更新区 -->
        <div class="content-wrap recently-wrap">
            <div class="content-title">最近更新</div>
            <div class="content-list">
                <preview-vue :data="item" v-for="(item, index) in page.recently" :key="index"></preview-vue>
            </div>
            <div class="content-more">更多最近更新</div>

            <div class="content-pic">
                <img src="https://img1.baidu.com/it/u=1791085528,3521651125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281" >
            </div>
            
        </div>

        <!-- 游戏区 -->
        <div class="content-wrap game-wrap">
            <div class="content-title">游戏</div>
            <div class="content-list">
                <preview-vue :data="item" v-for="(item, index) in page.game" :key="index"></preview-vue>
            </div>
            <div class="content-more">更多游戏</div>

            <div class="content-pic">
                <img src="https://img2.baidu.com/it/u=1619614161,5452367&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" >
            </div>
        </div>
        <!-- 漫画区 -->
        <div class="content-wrap cartoon-wrap">
            <div class="content-title">番剧漫画</div>
            <div class="content-list">
                <preview-vue :data="item" v-for="(item, index) in page.anime" :key="index"></preview-vue>
            </div>
            <div class="content-more">更多番剧</div>
        </div>


        <!-- 广告区 最新评论区 -->
        <div class="advertising-wrap">
            <div class="notice-wrap mb10">
                <ul class="">
                    <li v-for="(item, index) in page.advertisingList" :key="index">
                        <strong>{{item.label}}</strong>
                    </li>
                </ul>
            </div>


            <div class="advertising-img mb10">
                <img style="width: 100%;" src="https://img1.baidu.com/it/u=3317604066,917919429&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" alt="">
            </div>

            <div class="advertising-img mb10">
                <img style="width: 100%;" src="https://img2.baidu.com/it/u=205512099,1880680022&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">
            </div>

            <div>
                <span>最新评论</span>
                <ul>
                    <li>sdfsdfsdfs</li>
                    <li>sdfsdfsdfs</li>
                    <li>sdfsdfsdfs</li>
                    <li>sdfsdfsdfs</li>
                    <li>sdfsdfsdfs</li>
                    <li>sdfsdfsdfs</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import config from "./config";
import previewVue from "@/components/preview";
import bannerPreviewVue from "@/components/bannerPreview";
import { getArticleList, getArticleListByIsBanner } from "@/api/article";
export default {
    components: {
        previewVue,
        bannerPreviewVue,
    },
    data() {
        return {
            list: [],
            page: {
                recentle: [],
                game: [],
                anime: [],
                advertisingList: []
            },
            bannerList: [
                {
                    url: `https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                    label: `文字文字文字文字文字文字`
                },{
                    url: `https://images.pexels.com/photos/2378278/pexels-photo-2378278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                    label: `测试测试测试测试测试测试测试测试`
                },{
                    url: `https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                    label: `是大是大非是大是大非是大是大非是大是大非是大是大非`
                }
            ]
        }
    },
    created () {
        this.init();
        this.initAdvertising();
    },
    methods: {
        init() {
            let list = [];
            let l = 8;
            let tem = {
                title: "【PRG/关中】思考思考思考帆帆帆帆",
                url: `https://shots.codepen.io/username/pen/poZVKVb-1280.jpg?version=1674738111`,
                avator: `https://dthezntil550i.cloudfront.net/w8/latest/w81706122001576120000407005/1280_960/ae7216d6-bafb-4d35-9288-5a562578f5a4.png`,
                name: "软软小年糕"
            }
            for (let index = 0; index < l; index++) {
                list.push(tem);
            }
            this.list = list;
            this.initBanner();
            this.initRecently();
            this.initAnime();
            this.initGame();
        },
        initBanner() {
            
            getArticleListByIsBanner({isBanner: 1}).then(res => {
                if (res.code !== 0) {
                    return;
                }
                let bannerList = [];
                res.result.forEach(n => {
                    const {file} = n;
                    const fileParse = JSON.parse(file);
                        bannerList.push({
                            id: n.id,
                            label: n.name,
                            url: `${process.env.VUE_APP_BASE_API}/file/${fileParse.fileName}${fileParse.format}`,
                            property: n
                        });
                });
                this.bannerList = bannerList;
                console.log(res);
            });
        },
        initRecently() {
            getArticleList({pageNo: 0, pageSize: 2, order: "create_time", sort: "desc"}).then(res => {
                this.page.recently = res.result.data;
            });
        },
        initGame() {
            const ids = ["4", "16", "17", "18", "19", "20"]
            getArticleList({ids: ids.join(",")}).then(res => {
                this.page.game = res.result.data;
            });
        },
        initAnime() {
            const ids = [2, 7, 10, 11, 12, 13];
            getArticleList({ids: ids.join(",")}).then(res => {
                this.page.anime = res.result.data;
            });
        },
        initAdvertising() {
            const advertisingDictionary =  config.advertisingDictionary;
                this.page.advertisingList = advertisingDictionary;
                
        }
    },
}
</script>
<style lang="scss" scoped>
@import url("./mediaScreen.scss");
@import '@/styles/mixin.scss';

.main-container {
    padding: 20px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}


.hot-wrap { 
    display: grid;
    grid-gap: 10px;
}
.content-wrap {
    display: grid;
    
}
.content-list {
    display: grid;
    grid-gap: 10px;
}

.advertising-wrap {
    display: flex;
    flex-direction: column;
    >div {
        display: flex;
        @include box-shadow;
    }
}
.content-title {
    padding: 1rem 0;
    width: 100%
}
.content-more {
    margin: 1rem 0;
    width: 100%;
    padding: 0.5rem 0;
    text-align: center;
    font-size: 12px;
    @include box-shadow;
    @include preview-default;
    border-radius: 30px;
    &:hover {
        @include preview-hover;
    }
}
.content-pic {
    width: 100%;
    border-radius: 1rem;
    height: 10rem;
    @include box-shadow;
    border-radius: 1rem;
    img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
}

.advertising-img {
    img {
        border-radius: 1rem;
    }
}
.notice-wrap {
    padding: 2rem;
    height: auto;
    display: inline;
    ul {
        list-style-type: disc;
        li {
            margin: 10px 0 0 0;
            font-size: 0.5rem;
            line-height: 1.1rem;
            font-weight: 500;
            &:first-child {
                color: red;
            }
        }
    }
}
</style>