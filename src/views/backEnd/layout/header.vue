<template>
    <div class="backend-header-container">
        <div class="header-info wp100">
            BackEnd-Acg
        </div>

        <div class="header-person">
    
            <el-dropdown trigger="click" @command="command">
                <el-avatar :size="40" src="https://empty">
                    <img src="C:\Users\DELL\Desktop\file"/>
                </el-avatar>    
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        command(val) {
            console.log('---command');
            console.log(val);
        }
    },
}
</script>
<style lang="scss" scoped>
$header-hegiht: 70px;
$navbar-background-color: #304156;
.backend-header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: $header-hegiht;
    box-shadow: 0px 2px 5px #d1d1d1;
    background-color: $navbar-background-color;
    
}
.backend-header-container .header-info {
    padding: 0 0 0 1rem;
    font-size: 1.5rem;
    color: white;
}
.backend-header-container .header-person {
    padding: 0 20px 0 0;
}
</style>