<template>
    <div class="banner-container">
        <img class="wp100 hp100" :src="bannerUrl" alt="">
    </div>
</template>

<script>
export default {
    name: "banner",
    watch: {
        data(newValue, oldValue) {
            this.init();
        }
    },
    data() {
        return {
            bannerUrl: "https://img.zcool.cn/community/0136765a55f7a4a8012113c7687e00.jpg@2o.jpg",
        }
    },
    beforeMount () {
        this.init();
    },
    methods: {
        init() {
            if (!this.data) return;
            this.bannerUrl = this.data.url;
        }
    },
}
</script>
<style lang="scss" scoped>
.banner-container {
    margin: 2rem 0 0 0;
    width: inherit;
    height: 200px;
    border-radius: 5px;
    img {
        border-radius: 10px;
    }
}
</style>