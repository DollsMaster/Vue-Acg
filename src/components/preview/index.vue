<template>
    <div class="preview">
        <div class="preview-container">
            <img :src="page.url" :alt="page.title">
            <div>
                <div class="name">
                    {{page.title}}
                </div>
                <div class="info">
                    <img :src="page.avator" :alt="page.name">
                    <span class="wp100 ml10">{{page.name}}</span>
                    <span>时间</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "preview",
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
            this.init()
        }
    },
    beforeMount () {
        this.init();
    },
    methods: {
        init() {
            const data = this.data;
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
.preview {
    width: 10rem;
    height: 11rem;
}
.preview-container {
    width: 100%;
    height: 100%;
    @include box-shadow;
    @include preview-default;
    $border-radius: 10px;
    &:hover {
        @include preview-hover;
    }
    img {
        width: inherit;
        height: 6rem;
        border-radius: inherit;    
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        
    }
    >div {
        padding: 0.8rem;
    }

    .name {
        font-size: 0.5rem;
        color: #1c1c1c;
    }
    .info {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        img {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 100%;
        }
        span {
            font-size: 0.5rem;
            color: gray;
            white-space: nowrap;
        }
    }
}

</style>