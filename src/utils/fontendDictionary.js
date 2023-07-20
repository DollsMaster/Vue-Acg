/*
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-22 16:59:12
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-07-17 17:20:17
 * @FilePath: \fkoad:\CPerson\ACG\vue-acg\src\utils\fontendDictionary.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const dictionary = {
    personNavbar: [
        {
            value: ``,
            label: `总览`,
            icon: `el-icon-s-operation`
        },{
            value: ``,
            label: `文章`,
            icon: `el-icon-edit`
        },{
            value: ``,
            label: `关注`,
            icon: `el-icon-user`
        },{
            value: ``,
            label: `粉丝`,
            icon: `el-icon-s-custom`
        },{
            value: ``,
            label: `收藏夹`,
            icon: `el-icon-star-off`
        },{
            value: ``,
            label: `评论`,
            icon: `el-icon-chat-dot-square`
        }
    ],
    overview: [
        {
            key: null,
            value: null,
            label: `昵称`,
            icon: null
        },{
            key: null,
            value: null,
            label: `UID`,
            icon: null
        },{
            key: null,
            value: null,
            label: `描述`,
            icon: null
        },{
            key: null,
            value: null,
            label: `积分统计`,
            icon: null
        },{
            key: null,
            value: null,
            label: `文章统计`,
            icon: null
        },{
            key: null,
            value: null,
            label: `评论统计`,
            icon: null
        },{
            key: null,
            value: null,
            label: `关注统计`,
            icon: null
        },{
            key: null,
            value: null,
            label: `粉丝统计`,
            icon: null
        }
    ],
    userNavbar: [
        {
            name: '个人设置',
            icon: 'el-icon-message-solid',
            children: [
                {
                    icon: 'el-icon-message-solid',
                    name: '我的概述',
                    value: null
                },{
                    icon: 'el-icon-message-solid',
                    name: '我的设置'
                },{
                    icon: 'el-icon-message-solid',
                    value: `loginOut`,
                    name: '登出'
                }
            ]
        },{
            name: '游戏中心',
            icon: 'el-icon-message-solid',
            children: [
                {
                    name: '勋章',
                    icon: 'el-icon-message-solid',
                }, {
                    name: `抽奖`,
                    icon: 'el-icon-message-solid',
                }
            ]
        },{
            name: '圈子',
            icon: 'el-icon-message-solid',
            children: [
                {
                    name: `我的首页`,
                    icon: 'el-icon-message-solid',
                }, {
                    name: `我关注的人`,
                    icon: 'el-icon-message-solid',
                }, {
                    name: `我的粉丝`,
                    icon: 'el-icon-message-solid',
                }
            ]
        },{
            name: '消息管理',
            icon: 'el-icon-message-solid',
            children: [
                {
                    name: `积分历史`,
                    icon: 'el-icon-message-solid',
                }, {
                    name: `我的提醒`,
                    icon: 'el-icon-message-solid',
                }, {
                    name: `站内私信`,
                    icon: 'el-icon-message-solid',
                }
            ]
        },{
            name: '文章管理',
            icon: 'el-icon-message-solid',
            children: [
                {
                    name: `发布文章`,
                    url: `/fontend/workSpace`,
                    value: `publishArticle`,
                    icon: 'el-icon-s-open',
                }, {
                    name: `我的作品`,
                    icon: 'el-icon-message-solid',
                    value: `production`,
                    url: `/fontend/production`
                }, {
                    name: `收藏夹`,
                    icon: 'el-icon-star-on',
                }, {
                    name: `我的评论`,
                    icon: 'el-icon-s-comment',
                }
            ]
        }
    ]
}
export default {
    dictionary
}