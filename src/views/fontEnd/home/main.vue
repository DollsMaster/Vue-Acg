<template>
    <div class="main">
        <div class="banner">
            <el-carousel class="el-carousel-banner" trigger="click" style="width: 100%;height: 19rem">
                <el-carousel-item v-for="(item, index) in bannerList" :key="index">
                    <img class="wp100 hp100" style="border-radius: 5px" :src="item.url" alt="">
                    <span>{{item.label}}</span>
                </el-carousel-item>
            </el-carousel>
            <div class="recently-wrap">
                <bannerPreview-vue :data="item" v-for="(item, index) in list" :key="index"></bannerPreview-vue>
            </div>
        </div>
        <div class="content-wrap">
            <div class="content-title">最近更新</div>
            <div class="content-list">
                <preview-vue :data="item" v-for="(item, index) in list" :key="index"></preview-vue>
            </div>
            <div class="content-more">更多最近更新</div>
        </div>
        <div class="content-wrap">
            <div class="content-title">游戏</div>
            <div class="content-list">
                <preview-vue :data="item" v-for="(item, index) in list" :key="index"></preview-vue>
            </div>
            <div class="content-more">更多游戏</div>
        </div>
        <div class="content-wrap">
            <div class="content-title">漫画</div>
            <div class="content-list">
                <preview-vue :data="item" v-for="(item, index) in list" :key="index"></preview-vue>
            </div>
            <div class="content-more">更多漫画</div>
        </div>
        <!--  -->
    </div>
</template>

<script>
import previewVue from "@/components/preview";
import bannerPreviewVue from "@/components/bannerPreview";
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
    beforeMount () {
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
            console.log(this.list);
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.main {
    padding: 1rem 0;
}
.banner {
    display: flex;
    flex-direction: row;
}
.recently-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    >div {
        margin: 0 0 10px 10px;
        width: calc((100% / 3) - (10px * 1));
        height: calc(50% - 5px);
    }
}
.content-wrap {
    .content-title {
        padding: 1rem 0;
        width: 100%
    }
    .content-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        >div {
            margin: 0 0 10px 0;
            width: calc(20% - 10px);
        }
    }
    .content-more {
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        @include box-shadow;
        @include preview-default;
        border-radius: 30px;
        &:hover {
            @include preview-hover;
        }
    }
}
.el-carousel {
    z-index: 0;
    @include box-shadow;
    border-radius: 5px;
    min-width: 30rem;
}
</style>
<style>
.el-carousel-banner .el-carousel__container {
    height: 100%;
}
</style>