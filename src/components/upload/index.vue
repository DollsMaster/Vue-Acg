<template>
    <div>
        <div class="add" @click="uploadEv">
            <i class="el-icon-picture"></i>
            <span>添加图片</span>
            <input type="file" name="" id="upload" ref="upload" style="position: absolute;left: -9999px;" @change="httpRequest">
        </div>

        <ul class="file-list-wrap">
            <li v-for="(item, index) in list" :key="index">
                <img :src="getActionUrl(item)" alt="">
                <div>
                    <span class="mb5" style="margin-bottom: 5px">{{item.fileFullName}}</span>
                    <div>
                        <el-button-group style="margin-right: 10px">
                            <el-button type="success" size="mini" icon="el-icon-edit">插入到文章</el-button>
                            <el-button :type="cover === index?'success':''" size="mini" icon="el-icon-share" @click="cover = index">作为封面</el-button>
                        </el-button-group>
                        <el-button type="danger" icon="el-icon-delete" size="mini" @click="list.splice(index, 1)"></el-button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    props: {
        data: {
            type: Array,
            default: null
        },
    },
    data() {
        return {
            cover: 0,
            list: []
        }
    },
    watch: {
        data(newValue, oldValue) {
            this.init();
        }
    },
    methods: {
        init() {
            
        },
        uploadEv() {
            this.$refs.upload.click();  
        },
        getActionUrl(item) {
            return `${process.env.VUE_APP_BASE_API}/file/${item.fileName}${item.format}`;
        },
        httpRequest(ev) {
            const {target: {files}} = ev;
            const formData = new FormData();
            formData.append("files", files[0]);
            Axios({
                baseURL: process.env.VUE_APP_BASE_API,
                url: `/file/upload`,
                method: `post`,
                data: formData,
                withCredentials: true
            }).then(res => {
                this.$message.success(`上传成功！`);
                this.list.push(res.data.result);
            }).catch(err => {
                this.$message.error(err.msg);
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.add {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    padding: 0.5rem 0;
    width: 100%;
    border-radius: 1rem;
    border: 3px dashed rgba(0,0,0,.1);;
    background-color: rgba(0,0,0,.03);
    cursor: pointer;
    &:hover {
        border: 3px dashed rgba(0,0,0,.5);;
    }
}
.file-list-wrap {
    display: flex;
    flex-direction: column;
    >li {
        padding: 0 1rem;
        display: flex;
        flex-direction: row;
        
        border-radius: 1rem;
        padding: 1rem 1rem;
        
        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        img {
            margin: 0 1rem 0 0;
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
        }
        >div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            
        }
    }
}
</style>