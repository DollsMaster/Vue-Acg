<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-14 18:15:48
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-19 16:53:25
 * @FilePath: \fkoad:\Web\vue-acg\src\views\backEnd\layout\navbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="navbar-container">
        <el-menu
        default-active="2"
        class="el-menu"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="selectEv">
            <el-submenu :index="item.path" v-for="(item, index) in menuOptions" :key="index">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="item.path +'/' + itema.path" v-for="(itema, indexa) in item.children" :key="indexa">{{itema.title}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "navBar",
    data() {
        return {
            menuOptions: []
        }
    },
    beforeMount () {
        this.initController();
    },
    methods: {
        initController() {
            const router = this.$router.options.routes.filter(n => {
                return n.path === `/backend`?true:false;
            });
            const exclude = ['login', 'layout'];
            const backendRouter = router[0].children.filter(n => {
                return exclude.indexOf(n.name) > -1?false:true;
            });
            this.menuOptions = backendRouter;
        },
        selectEv(path) {
            this.$router.push({'path': '/backend/' + path});
        }
    }
}
</script>
<style lang="scss" scoped>
$hp100: 100%;
$header-height: 70px;
$navbar-width: 200px;
$navbar-background-color: #304156;
.navbar-container {
    padding-right: 2px;
    width: $navbar-width;
    min-width: $navbar-width;
    background-color: $navbar-background-color;
}
.navbar-container .el-menu {
    border-right: none;
}
</style>