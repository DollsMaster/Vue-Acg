<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-21 16:54:55
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-21 17:20:38
 * @FilePath: \fkoad:\Web\vue-acg\src\views\backEnd\websiteConfig\UserConfig.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="menuConfig-container container">
        <ul class="table-filter-container">
            <li>
                <span>昵称</span>
                <el-input v-model="filter.name" placeholder="请输入内容" :size="`small`" clearable></el-input>
            </li>
            <li>
                <el-button type="primary" icon="el-icon-search" :size="`small`" @click="initTable">搜索</el-button>
                <!-- <el-button type="success" icon="el-icon-edit" :size="`small`" @click="dialogVisible = true; formModelType = null;dialogClear();">新增</el-button> -->
            </li>
        </ul>

        <el-table
        class="table-main-wrap"
        :data="tableData"
        height="500"
        style="width: 100%">
            <el-table-column type="index" width="80"></el-table-column>
            <el-table-column prop="name" label="昵称" min-width="180"></el-table-column>
            <el-table-column prop="email" label="邮箱" min-width="180"></el-table-column>
            <el-table-column prop="cover" label="头像" min-width="180"></el-table-column>
            <el-table-column prop="status" label="状态" min-width="80">
                <template slot-scope="scope">
                    {{scope.row.status === 0?'正常':'禁用'}}
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="180"></el-table-column>
            <el-table-column label="操作" min-width="200" >
                <template slot-scope="scope" style="min-width: 150px">
                    <el-button type="primary" :size="`mini`" icon="el-icon-edit" @click="editEv(scope.row)">编辑</el-button>
                    <el-button type="danger" :size="`mini`" icon="el-icon-delete" @click="deleteEv(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        
        <div class="PageBreakContair">
            <el-pagination background :current-page="pageBreak.Index + 1" @size-change="sizeChange"
                @current-change="handleCurrentChange" :page-size="pageBreak.Size" :page-sizes="[15, 30, 50, 100]"
                :pager-count="pageBreak.Count" layout="prev, pager, next, total, sizes, jumper"
                :total="pageBreak.Total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { getUserList } from "@/api/user";
export default {
    data() {
        return {
            filter: {
                name: null
            },
            tableData: [],
            pageBreak: {
                Index: 0,
                Size: 30,
                Total: 0,
                Count: 5
            },
        }
    },
    beforeMount () {
        this.initController();
    },
    methods: {
        initController() {
            this.initTable();
        },
        initTable() {
            const p = {
                pageNo: this.pageBreak.Index,
                pageSize: this.pageBreak.Size
            }
            getUserList(p).then(res => {
                const {result: {data, total}} = res;
                    this.tableData = data;
                    this.pageBreak.Total = total;
            });
        },
        sizeChange() {

        },
        handleCurrentChange() {

        }
    },
}
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}
</style>