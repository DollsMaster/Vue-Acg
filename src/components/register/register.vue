<!--
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-20 16:08:51
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-06-28 17:25:39
 * @FilePath: \fkoad:\Web\vue-acg\src\views\fontEnd\home\register.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="register-container" class="register-container" v-if="registerVisable">
        
        <div class="register-main">
            <div class="register-control">
                <span 
                v-for="(item, index) in ['登录', '注册', '丢失密码']" 
                :key="index" 
                :class="{'checked': navbarChecked === item}"
                @click="navbarChecked = item"
                >{{item}}</span>

                <div class="wp100"></div>
                <div class="register-close" @click="registerVisable = false">
                    <i class="el-icon-close"></i>
                </div>
            </div>

            <div class="register-input">

                <el-form :model="page" ref="dynamicValidateForm" class="register-dynamic">
                    <el-form-item>
                        <span>欢迎登陆ACG网站</span>
                    </el-form-item>

                    <el-form-item
                        v-if="navbarChecked === `注册`"
                        prop="email"
                        :rules="[
                        { required: true, message: '请输入昵称', trigger: 'change' },
                        ]"
                    >
                        <el-input placeholder="请输入昵称" v-model="page.name" size="small">
                            <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            <template slot="prepend">昵称</template>
                        </el-input>
                    </el-form-item>

                    <el-form-item
                        prop="email"
                        :rules="[
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        ]"
                    >
                        <el-input placeholder="请输入邮箱" v-model="page.email" size="small">
                            <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            <template slot="prepend">邮箱</template>
                        </el-input>
                    </el-form-item>

                    <el-form-item
                        prop="email"
                        :rules="[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        ]"
                    >
                        <el-input placeholder="请输入内容" v-model="page.password" size="small" show-password>
                            <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            <template slot="prepend">密码</template>
                        </el-input>
                    </el-form-item>
                </el-form>
                <!-- <ul>
                    <li>欢迎登陆ACG网站</li>
                    <li v-if="navbarChecked === `注册`">
                        <el-input placeholder="请输入昵称" v-model="page.name" size="small">
                            <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            <template slot="prepend">昵称</template>
                        </el-input>
                    </li>
                    <li>
                        <el-input placeholder="请输入邮箱" v-model="page.email" size="small">
                            <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            <template slot="prepend">邮箱</template>
                        </el-input>
                    </li>
                    <li>
                         <el-input placeholder="请输入内容" v-model="page.password" size="small" show-password>
                            <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            <template slot="prepend">密码</template>
                        </el-input>
                    </li>
                </ul> -->
            </div>

            <div class="register-submit" @click="submit()">
                <span v-if="navbarChecked === `登录`">登录</span>
                <span v-if="navbarChecked === `注册`">注册</span>
                <span v-if="navbarChecked === `丢失密码`">找回密码</span>
            </div>
        </div>
    </div>
</template>

<script>
import { register, login } from "@/api/user";
import { getToken } from '@/utils/auth';
export default {
    props: {
        data: {
            type: Number,
            default: null
        },
    },
    data() {
        return {
            registerVisable: false,
            page: {
                email: null,
                password: null,
                name: null
            },
            key: "value",
            input1: null,
            navbarChecked: '登录'
        }
    },
    watch: {
        data(newValue, oldValue) {
            this.initController();
        },
        navbarChecked() {
            for (let key in this.page) {
                this.page[key] = null;
            }
        }
    },
    methods: {
        initController() {
            this.registerVisable = true;
        },
        submit() {
            this.$refs[`dynamicValidateForm`].validate((valid) => {
                if (valid) {
                    if (this.navbarChecked === `登录`) {
                        this.login();
                    } else if (this.navbarChecked === `注册`) {
                        this.register();
                    }

                    
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        login() {
            login(this.page).then(async (res) => {
                this.registerVisable = false;
                this.$message.success(`登录成功!`);
                const token = getToken();
                    try {
                        await this.$store.dispatch('user/getUserInfo', token);
                    } catch (error) {
                        this.$message.error(res.msg);
                    }
            });
        },
        register() {
            register(this.page).then(res => {
                this.registerVisable = false;
                this.$message.success(`注册成功!`);
            })
        },
        
    },
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
$hover: #cccccc;

.register-container {
    position: fixed;
    overflow: auto;
    z-index: 11;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background: hsla(0, 0%, 37%, 0.45);
    backdrop-filter: blur(3px);	
}
.register-main {
    
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 25%;
    min-width: 30rem;
    height: auto;
    border-radius: 10px;
    @include public-background-grey;
}
.register-control {
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: row;
    height: auto;
    >span {
        @include public-slow-grey;
        padding: 0.8rem 1rem;
        white-space: nowrap;
        cursor: pointer;
        &:hover {
            transition: all 0.5s;
            background-color: $hover;
        }
        &:first-child {
            border-radius: 0 0 0 10px;
        }
        &:last-child {
            border-radius: 10px;
        }
    }
}
.register-input {
    padding: 1rem 1rem 0 1rem;
    ul {
        >li {
            &:first-child {
                padding: 20px 0;
            }
            padding: 0 0 0.8rem 0;
        }
    }
}
.register-submit {
    padding: 0.8rem 0;
    width: 100%;
    @include public-green;
    color: #fff;
    text-align: center;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    &:active {
        @include public-green-active;
    }
}
.register-close {
    position: relative;
    right: -16px;
    @include public-slow-grey;
    padding: 0.8rem 1rem;
    border-radius: 0 10px 0 10px;
    cursor: pointer;
    &:hover {
        background-color: $hover;
    }
    i {
        font-size: 1rem;
    }
}
.shade {
    position: fixed;
    top: 0;
    left: 0;
    
}

#register-container .checked {
    color: #fff;
    @include public-grey;
}

</style>
<style lang="scss">
#register-container .register-dynamic .el-form-item__content {
    //margin-left: 0 !important;
}
#register-container .register-dynamic .el-form-item {
    margin-bottom: 10px;    
}
#register-container .register-dynamic .el-form-item__error {
    line-height: 0;
    padding-top: 2px;
}
</style>