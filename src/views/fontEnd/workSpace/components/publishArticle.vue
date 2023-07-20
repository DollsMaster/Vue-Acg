<template>
    <div class="article" v-if="reload">
        <div class="publishArticle-required mb10">
            <span>投稿须知（必看）</span>
            <ul>
                <li>
                    发帖前请站内搜索，确保无重复资源，发现撞车会按时间顺序直接删除（原贴链接失效或版本不同不视为撞车）。
                </li>
                <li>
                    发资源请选优质题材（剧情有深度、大资金大阵容制作、崇尚人性真善美等取向），<p class="underline">滥发低质量资源帖子不仅无法通过审核，并且被删帖后要扣除100积分。</p>
                </li>
                <li>
                    分区目录选取请仔细看清楚一级目录和二级目录再选取。
                </li>
                <li>
                    如果用网盘作为主链接，有条件的人建议增加一条磁力链链接作为备份的永久链接，以防日后网盘链接失效。
                </li>
                <li>
                    资源必须要有图片预览和文字介绍，可以百度百科复制粘贴，也可以自己编写。
                </li>
                <li>
                    文章标题必须添加前缀【xxxx】，前缀例如【汉化GAL】、【一月新番】、【萌图壁纸】等等。
                </li>
                <li>
                    帖子正文和压缩包内禁止任何【资源网站、QQ群、收费入群、收费卖资源、网站地址、加微信、加QQ好友】等广告宣传信息，屡次发现视为故意发广告封号处理。
                </li>
                <li>
                    本站禁止发3次元真人资源。
                </li>
                <li>
                    音乐：目前音乐投稿仅支持网易云音乐（分享->复制链接或播放页面地址）和 音频文件链接。如果是网易云音乐，可以是自己的歌单哦！
                </li>
            </ul>
        </div>
        <ul>
            <li>
                <el-tag class="el-tag" effect="dark" :color="`#2086bf`">文章标题</el-tag>
                <el-input class="el-input mt10" v-model="page.name" :size="`small`" placeholder="请输入内容" clearable></el-input>
            </li>
            <li>
                <el-tag class="el-tag mb10" effect="dark">文章内容</el-tag>

                <div style="border: 1px solid #ccc;">
                    <Toolbar
                        style="border-bottom: 1px solid #ccc"
                        :editor="editor"
                        :defaultConfig="toolbarConfig"
                        :mode="mode"
                    />
                    <Editor
                        style="height: 500px; overflow-y: hidden;"
                        v-model="page.content"
                        :defaultConfig="editorConfig"
                        :mode="mode"
                        @onCreated="onCreated"
                    />
                </div>
            </li>
            <li>
                <el-tag class="el-tag" effect="dark">文章封面</el-tag>
                <Upload></Upload>
                
                <!-- <el-upload
                    class="upload-demo mt10"
                    :name="`file`"
                    :action="getActionUrl()"
                    :file-list="fileList"
                    :with-credentials="true"
                    list-type="picture"
                    :http-request="httpRequest">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload> -->
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
                
                :prefix-icon="`el-icon-menu`"
                clearable></el-cascader>
            </li>
            <li style="article-tag">
                <el-tag class="el-tag" effect="dark">文章标签</el-tag>
                <div class="article-tag-wrap mt10">
                    <div v-for="(item, index) in page.tags" :key="index">
                        <el-input 
                        
                        v-model="page.tags[index]"
                        :key="index"
                        class="el-input mr10"  
                        :size="`mini`" 
                        placeholder="请输入内容"></el-input>
                        <i 
                        class="article-tag-delete el-icon-delete" 
                        :class="{disabled: page.tags.length <= 1}" 
                        @click="page.tags.length > 1?page.tags.splice(index, 1):null"></i>
                    </div>
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
                        <el-button class="ml10" type="primary" size="mini" style="height: 1.8rem" 
                        @click="page.downloads.push({
                            name: null,
                            url: null,
                            extractPassword: null,
                            compressPassword: null
                        })">添加</el-button>
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
import { mapState } from 'vuex';
import { getMenuList } from '@/api/menu';
import { addArticle } from "@/api/article";
import Axios from "axios";
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import Upload from '@/components/upload';
const download = {
    "name": null,
    "url": null,
    "extractPassword": null,
    "compressPassword": null
}
export default {
    name: "publishArticle",
    components: { Editor, Toolbar, Upload },
    data() {
        return {
            reload: true,
            editor: null,
            html: '<p>hello</p>',
            toolbarConfig: { },
            editorConfig: { MENU_CONF: {}, placeholder: '请输入内容...' },
            mode: 'default', // or 'simple'


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
        this.initEditor();
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.userInfo
        })
    },
    methods: {
        init() {
            getMenuList().then(res => {
                this.options = res.result;
                console.log(res);
            });
            
        },
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
        initEditor() {
            const _this = this;
            this.editorConfig.MENU_CONF["uploadImage"] = {
                async customUpload(file, insertFn) {
                    const formData = new FormData();
                        formData.append("files", file);
                        Axios({
                            baseURL: process.env.VUE_APP_BASE_API,
                            url: `/file/upload`,
                            method: `post`,
                            data: formData,
                            withCredentials: true
                        }).then(res => {
                            const {id, fileName, format, fileFullName} = res.data.result;
                            const src = `${process.env.VUE_APP_BASE_API}/file/${fileName}${format}`;
                            const alt = `${fileFullName}`;
                            const list = _this.editor.getElemsByType('image');
                            _this.fileList.push(res.data.result);
                            insertFn(src, id, src);
                        }).catch(err => {
                            console.dir('------------error----------');
                            console.log(err);
                        })
                },
                customInsert(res, insertFn) {
                    console.log(res);
                }
            }
        },
        submit() {
            const userId = this.userInfo.id;
            const imageList = this.editor.getElemsByType("image")
            const page = JSON.parse(JSON.stringify(this.page));
            const d = {
                userId: userId,
                name: page.name,
                cover: imageList.length > 0?imageList[0].src:null,
                content: page.content,
                tags: page.tags.join(','),
                menus: page.menus && page.menus.length > 0?page.menus[page.menus.length -1]:null,
                downloads: page.downloads.length <= 1 && !page.downloads[0].url ? null : JSON.stringify(page.downloads)
            }
            console.log('---------------submit-------------');
            console.log(d);
            const status = this.verify(d);
                if (!status) return;
                addArticle(d).then(res => {
                    this.$message.success(res.msg);
                });
        },
        verify(data) {
            if (!data.name || data.name.length <= 0) {
                this.$message.error(`请添加文章标题!`);
                return false;
            }
            if (!data.content || data.content <= 0) {
                this.$message.error(`请填写文章内容!`);
                return false;
            }
            if (!data.menus || data.menus.length <= 0) {
                this.$message.error(`请选择文章分区!`);
                return false;
            }
            /* if (data.downloads.length <= 1 && !data.downloads[0].url) {
                this.$message.error(`请输入资源下载地址!`);
                return false;
            } */
            return true;
        }
    },
}
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.article {
    .publishArticle-required {
        padding: 2rem;
        @include box-shadow;
        span {
            display: block;
            margin: 0 0 1rem 0;
            font-weight: 600;
            color: #333;
        }
        ul {
            list-style: auto;
            padding-left: 1.5rem;
        }
        li,.underline {
            font-size: 0.7rem;
            line-height: 1.5rem;
        }
        .underline {
            color: red;
            display: inline;
        }
    }
    
    >ul {
        >li {
            margin: 0 0 10px 0;
            padding: 1rem;
            @include box-shadow;
            display: flex;
            flex-direction: column;
        }
    }
}
.article-tag-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    >div {
        display: flex;
        flex-direction: row;
    }
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
    width: auto;
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
    padding-left: 1rem;
    padding-right: 1rem;
    width:fit-content;
    border-radius: 20px;
    font-size: 12px;
    float: left;
    background-color: #2086bf;
}
.article-tag-delete {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #fff;
    background-color: #f56c6c;
    cursor: pointer;
    &:active {
        background-color: #f78989;
    }
    
}
.disabled {
    background-color: #f78989;
    cursor: no-drop;
}

</style>
<style>
.article .el-input__inner {
    border-radius: 25px;
}
</style>