<template>
    <div class="bannerPreview">
        <div class="bannerPreview-container">
            <img :src="page.url" :alt="page.title">
            <div class="bannerPreview-name">
                {{page.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "bannerPreview",
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            page: {
                title: null,
                name: null,
                url: null,//``,
                avator: null, //""
            }
        }
    },
    watch: {
        data(newValue, oldValue) {
            console.log('aaaaaaaaa');
            this.init()
        }
    },
    beforeMount () {
        this.init();
    },
    methods: {
        init() {
            const data = this.data;
                console.log(data);
                for (let key in this.page) {
                    this.page[key] = data[key];
                }
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
$border-radius: 10px;
.bannerPreview {
    position: relative;
    height: 8rem;
    @include box-shadow;
    border-radius: $border-radius;
}
.bannerPreview-container {
    width: 100%;
    height: 100%;
    @include preview-default;
    border-radius: inherit;
    border-radius: $border-radius;
    &:hover {
        @include preview-hover;
    }
    img {
        width: inherit;
        height: inherit;
        border-radius: inherit;    
    }
    .bannerPreview-name {
        @include box-shadow;
        font-size: 0.5rem;
        padding: 0.5rem 0;
        position: absolute;
        bottom: 0px;    
        width: 100%;
        color: #fff;
        background-color: rgba(68, 68, 68, 0.2);
        backdrop-filter: blur(5px);
        @include text-overflow;
        border-radius: $border-radius;
        
    }
}

</style>