<template>
    <div class="article">
        <ul>
            <li>
                <el-tag class="el-tag" effect="dark">文章标题</el-tag>
                <el-input class="el-input mt10" v-model="page.name" :size="`small`" placeholder="请输入内容"></el-input>
            </li>
            <li>
                <el-tag class="el-tag" effect="dark">文章内容</el-tag>
                <el-input
                class="mt10"
                type="textarea"
                placeholder="请输入内容"
                v-model="page.content"
                show-word-limit>
                </el-input>
            </li>
            <li>
                <el-tag class="el-tag" effect="dark">文章封面</el-tag>
                <el-upload
                    class="upload-demo mt10"
                    :name="`file`"
                    :action="getActionUrl()"
                    :file-list="fileList"
                    :with-credentials="true"
                    list-type="picture"
                    :on-change="onChange"
                    :http-request="httpRequest"
                    :on-success="onSuccess">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </li>
            <li>
                <el-tag class="el-tag" effect="dark">选择目录</el-tag>
                <el-cascader
                class="mt10"
                :size="`small`"
                v-model="page.menus"
                :show-all-levels="false"
                :options="options"
                :props="{ checkStrictly: true, label: 'name', value: 'id' }"
                clearable></el-cascader>
            </li>
            <li style="article-tag">
                <el-tag class="el-tag" effect="dark">文章标签</el-tag>
                <div class="article-tag-wrap mt10">
                    <el-input 
                    v-for="(item, index) in page.tags" 
                    v-model="page.tags[index]"
                    :key="index"
                    class="el-input mr10"  
                    :size="`mini`" 
                    placeholder="请输入内容"></el-input>
                    <el-button class="ml10" type="primary" size="mini" @click="page.tags.push(null)">添加</el-button>
                </div>
            </li>
            <li>
                <el-tag class="el-tag" effect="dark">下载</el-tag>
                <ul class="article-download mt10">
                    <li v-for="(item, index) in page.downloads" :key="index">
                        <el-input class="el-input-name" v-model="item.name" :size="`mini`" placeholder="下载名称"></el-input>
                        <el-input class="el-input-url ml10" v-model="item.url" :size="`mini`" placeholder="下载url"></el-input>
                        <el-input class="el-input-url ml10" v-model="item.extractPassword" :size="`mini`" placeholder="提取密码"></el-input>
                        <el-input class="el-input-url ml10" v-model="item.compressPassword" :size="`mini`" placeholder="解压密码"></el-input>
                        <el-button class="ml10" type="primary" size="mini" style="height: 1.8rem">添加</el-button>
                        <el-button class="ml10" type="danger" size="mini" style="height: 1.8rem">删除</el-button>
                    </li>
                </ul>
            </li>
            <li>
                <el-button type="success" :size="`small`" round @click="submit">提交</el-button>
            </li>

        </ul>
    </div>
</template>

<script>
import { getMenuList } from '@/api/menu';
import { addArticle } from "@/api/article";
import Axios from 'axios';
const download = {
    "name": null,
    "url": null,
    "extractPassword": null,
    "compressPassword": null
}
export default {
    name: "publishArticle",
    data() {
        return {
            page: {
                name: null,
                content: null,
                menus: null,
                tags: [null],
                file: [],
                downloads: [download],
            },
            menuModel: null,
            options: [],
            fileList: []
        }
    },
    beforeMount () {
        this.init();
    },
    methods: {
        init() {
            getMenuList().then(res => {
                this.options = res.result;
                console.log(res);
            });
        },
        getActionUrl() {
            return `${process.env.VUE_APP_BASE_API}/file/upload`;
        },
        onChange(data) {
            console.log('-ffffffffff');
            console.log(data);
        },
        onSuccess(data) {
            
            console.log(data);
        },
        httpRequest(data) {
            const formData = new FormData();
            formData.append("files", data.file);
            Axios({
                baseURL: process.env.VUE_APP_BASE_API,
                url: `/file/upload`,
                method: `post`,
                data: formData,
                withCredentials: true
            }).then(res => {
                this.$message.success(`上传成功！`);
                this.page.file.push(res.data.result);
                console.log('---shangchuan');
                console.log(res);
                console.log(this.page);
            }).catch(err => {
                this.$message.error(err.msg);
            })
        },
        submit() {
            console.log(this.page);
            const page = JSON.parse(JSON.stringify(this.page));
                page.menus = page.menus[page.menus.length -1];
                page.tags = page.tags.join(',');
                page.downloads = JSON.stringify(page.downloads);
                if (page.file.length > 0) {
                    page.file = JSON.stringify(page.file[0])
                }

                console.log(page);
            const status = this.verify(page);
                if (!status) return;
                addArticle(page).then(res => {
                    this.$message.success(res.msg);
                });
        },
        verify(data) {
            return true;
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.article {
    padding: 2rem;
    @include box-shadow;
    >ul {
        >li {
            padding: 0.5rem 0;
            display: flex;
            flex-direction: column;
        }
    }
}
.article-tag-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    .el-input {
        width: auto !important;
    }
    .el-button {
        display: inline-block;
        height: 1.8rem;
    }
}
.article-download {
    display: flex;
    flex-direction: column;
    >li {
        
        display: flex;
        flex-direction: row;
        
        .el-input {
            margin-bottom: 0.5rem;
        }
        .el-input-name {
            min-width: 5rem;
        }
    }
}
.el-tag {
    width: 5rem;
    border-radius: 20px;
    font-size: 12px;
}


</style>
<style>
.article .el-input__inner {
    border-radius: 25px;
}
</style>