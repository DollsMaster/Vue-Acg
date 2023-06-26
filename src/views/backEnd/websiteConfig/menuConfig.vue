<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-16 16:30:51
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-22 17:39:50
 * @FilePath: \fkoad:\Web\vue-acg\src\views\backEnd\websiteConfig\menuConfig.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="menuConfig-container">
        <ul class="table-filter-container">
            <li>
                <span>名称</span>
                <el-input v-model="filter.name" placeholder="请输入内容" :size="`small`" clearable></el-input>
            </li>
            <li>
                <el-button type="primary" icon="el-icon-search" :size="`small`" @click="initTable">搜索</el-button>
                <el-button type="success" icon="el-icon-edit" :size="`small`" @click="dialogVisible = true; formModelType = null;dialogClear();">新增</el-button>
            </li>
        </ul>

        <el-table
        row-key="id"
        class="table-main-wrap"
        :data="tableData"
        height="500"
        style="width: 100%"
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column type="index" width="80"></el-table-column>
            <el-table-column prop="name" label="菜单名称" min-width="180"></el-table-column>
            <el-table-column prop="parentName" label="上级菜单" min-width="180"></el-table-column>
            <el-table-column prop="sort" label="排序" min-width="180"></el-table-column>
            <el-table-column prop="timestamp" label="创建时间" min-width="180"></el-table-column>
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

        <el-dialog
        title="提示"
        custom-class="dialog-container"
        :visible.sync="dialogVisible"
        width="40%"
        :min-height="`200px`">
            <div class="dialog-container" style="min-height: 200px">
                <el-form ref="formTable" :model="formModel" :rules="rules" label-width="80px" size="small">
                    <el-form-item label="菜单层级">
                        <el-radio-group v-model="menuTier">
                            <el-radio-button :label="1" :value="1">一级菜单</el-radio-button>
                            <el-radio-button :label="2" :value="2">二级菜单</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="父级菜单" v-if="menuTier === 2" prop="parentId">
                        <el-select v-model="formModel.parentId" placeholder="请选择">
                            <el-option  
                            v-for="item in formOptions.firstMenuOptions"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="菜单名称" prop="name">
                        <el-input v-model="formModel.name" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单排序" prop="sort">
                        <el-input v-model="formModel.sort" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="dialogConfirm()" size="small">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getMenuList, addMenu, updateMenu, deleteMenuById } from "@/api/menu";
export default {
    name: "menuConfig",
    data() {
        return {
            ss: null,
            input: null,
            menuTier: 1,
            tableData: [],
            filter: {
                name: null
            },
            rules: {
                name: [{required: true, message: "请输入菜单名称!", trigger: 'change'}],
                parentId: []
            },
            dialogVisible: false,
            formModelType: null,
            formModel: {
                name: null,
                parentName: null,
                parentId: null,
                sort: null
            },
            pageBreak: {
                Index: 0,
                Size: 30,
                Total: 0,
                Count: 5
            },
            formOptions: {
                firstMenuOptions: []
            }
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
            if (this.filter.name) {
                p['name'] = `%${this.filter.name}%`;
            }   
            getMenuList(p).then(res => {
                const {result} = res;

                    this.tableData = result;
                    initFirstMenuOptions(result, this);
            });
            function initFirstMenuOptions(list, that) {
                that.formOptions.firstMenuOptions = list;
            }
        },
        async editEv(row) {
                this.dialogVisible = true;
                await this.dialogClear();
            const {parentId} = row;
                this.menuTier = parentId?2:1;
                for (let key in this.formModel) {
                    if (key in row) {
                        this.formModel[key] = row[key]
                    }
                }
                this.formModelType = row.id;
        },
        async dialogConfirm() {
            this.$refs['formTable'].validate((valid) => {
                if (valid) {
                    this.dialogSubmit();
                }
            });  
        },
        dialogSubmit() {
            const formModel = JSON.parse(JSON.stringify(this.formModel));
                if (formModel.parentId) {
                    formModel.parentName = parentName(this);
                }
                formModel['timestamp'] = new Date().getTime();
                if (this.formModelType) {
                    formModel['id'] = this.formModelType;
                    updateMenu(formModel).then(res => {
                        this.dialogVisible = false;
                        this.initTable();
                        this.$message.success(`修改成功!`);
                    });
                } else {
                    addMenu(formModel).then(res => {
                        this.dialogVisible = false;
                        this.initTable();
                        this.$message.success(`保存成功!`);
                    });
                }
                function parentName(that) {
                    let parentName = null;
                    that.formOptions.firstMenuOptions.forEach(n => {
                        if (n.id === formModel.parentId) parentName = n.name;
                    })
                    return parentName;
                }
        },
        deleteEv(row) {
            deleteMenuById(row.id).then(res => {
                this.initTable();
                this.$message.success(`删除成功!`);
            });
        },
        dialogClear() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.$refs['formTable'].resetFields();
                    resolve();
                }, 100);
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
.menuConfig-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}
</style>