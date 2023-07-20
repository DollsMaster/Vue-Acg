<template>
    <div class="container">
        <el-table
        class="el-table-wrap"
        :data="tableData"
        style="width: 100%">
            <el-table-column label="封面" >
                <template slot-scope="scope">
                    <div class="wrap">
                        <el-image
                        style="width: 30px; height: 30px"
                        :src="scope.row.cover"
                        :fit="`contain`"></el-image> 
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="标题" width="150px">
                <template slot-scope="scope">
                    <div class="wrap">
                        {{scope.row.name}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="操作" ></el-table-column>
            <el-table-column prop="date" label="状态" ></el-table-column>
            <el-table-column prop="date" label="类型" ></el-table-column>
            <el-table-column prop="date" label="日期" >
                <template slot-scope="scope">
                    <div class="wrap">
                        {{transformTimer(scope.row.createTime)}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="评论" ></el-table-column>
            <el-table-column prop="date" label="下载" ></el-table-column>
            <el-table-column prop="date" label="查看数" ></el-table-column>
            <el-table-column prop="date" label="文章点赞" ></el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { transformTimer } from "@/utils/public";
import { getArticleListByUserId } from "@/api/article";
export default {
    data() {
        return {
            tableData: []
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.user.userInfo
        }),
        
    },
    mounted () {
        this.init();
    },
    methods: {
        init() {
            this.initInterface();
        },
        initInterface() {
            console.log('-this.userInfo');
            console.log(this.userInfo);
            getArticleListByUserId({userId: this.userInfo.id}).then(res => {
                console.log('---res');
                console.log(res);
                this.tableData = res.result;
            });
        },
        transformTimer(time) {
            return transformTimer(time)
        }
    },

}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.container {
    padding: 10px;
    width: 100%;
    height: 100%;
    @include box-shadow;
}
.wrap {
    font-size: 12px;
}
</style>
<style>
.el-table-wrap {
    border-left: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5
}
.el-table-wrap thead th {
    background-color: #d5dad6;
    color: #666;
}
</style>