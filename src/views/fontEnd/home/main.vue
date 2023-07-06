<template>
    <div class="main-container">
        <div class="banner-wrap">
            <el-carousel class="el-carousel-banner" trigger="click" style="width: 100%;height: 19rem">
                <el-carousel-item v-for="(item, index) in bannerList" :key="index">
                    <img class="wp100 hp100" style="border-radius: 5px" :src="item.url" alt="">
                    <span>{{item.label}}</span>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="hot-wrap">
            <div class="sys-col-lg-4 sys-col-md-6" v-for="(item, index) in list" :key="index">
                <bannerPreview-vue 
                :data="item" 
                
                :key="index"
                ></bannerPreview-vue>
            </div>
            
        </div>
        <div class="content-wrap"></div>
        <div class="advertising-wrap"></div>
    </div>
</template>

<script>
import previewVue from "@/components/preview";
import bannerPreviewVue from "@/components/bannerPreview";
import { getArticleList } from "@/api/article";
export default {
    components: {
        previewVue,
        bannerPreviewVue,
    },
    data() {
        return {
            list: [],
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
    },
    methods: {
        init() {
            let list = [];
            let l = 6;
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
        }
    },
}
</script>
<style lang="scss" scoped>
.main-container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "banner-wrap banner-wrap banner-wrap hot-wrap hot-wrap hot-wrap hot-wrap"
    "banner-wrap banner-wrap banner-wrap hot-wrap hot-wrap hot-wrap hot-wrap"
    "banner-wrap banner-wrap banner-wrap hot-wrap hot-wrap hot-wrap hot-wrap"
    "content-wrap content-wrap content-wrap content-wrap content-wrap advertising-wrap advertising-wrap"
    "content-wrap content-wrap content-wrap content-wrap content-wrap advertising-wrap advertising-wrap"
    "content-wrap content-wrap content-wrap content-wrap content-wrap advertising-wrap advertising-wrap"
    "content-wrap content-wrap content-wrap content-wrap content-wrap advertising-wrap advertising-wrap"
    "content-wrap content-wrap content-wrap content-wrap content-wrap advertising-wrap advertising-wrap"
    "content-wrap content-wrap content-wrap content-wrap content-wrap advertising-wrap advertising-wrap";
}

.banner-wrap { grid-area: banner-wrap; background-color: gray; }

.hot-wrap { 
    
    grid-area: hot-wrap; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    div {
        padding: 5px;
        
    }   
    /* display: grid;
    padding: 10px;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(auto-fill, calc(33.33% - 8px));
    grid-template-rows: repeat(2, calc(50% - 5px));
 */
    background-color: red; 
    
}

.content-wrap { grid-area: content-wrap; background-color: green;}

.advertising-wrap { grid-area: advertising-wrap; background-color: rgb(150, 53, 53);}

</style>