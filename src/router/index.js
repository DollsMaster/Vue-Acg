/*
 * @Author: zhanghan 1599252137@qq.com
 * @Date: 2023-06-13 17:04:33
 * @LastEditors: zhanghan 1599252137@qq.com
 * @LastEditTime: 2023-07-11 15:40:34
 * @FilePath: \fkoad:\Web\vue-acg\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  /* {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  }, */
  {
    path: '/',
    redirect: '/fontend',
    component: () => import(`@/views/fontEnd/fontend`),
    hidden: true
  },
  {
    path: `/fontend`,
    name: `fontend`,
    component: () => import(`@/views/fontEnd/fontend`),
    //redirect: `/fontend/home`,
    children: [
      {
        path: `/fontend/home`,
        name: `Home`,
        component: () => import(`@/views/fontEnd/home/home`)
      },
      {
        path: `/fontend/person`,
        name: `person`,
        component: () => import(`@/views/fontEnd/person`)
      },
      {
        path: `/fontend/workSpace`,
        name: `workSpace`,
        component: () => import(`@/views/fontEnd/workSpace`)
      }
    ]
  },
  {
    path: '/backend',
    component: () => import(`@/views/backEnd/backend`),
    redirect: '/backend/layout',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(`@/views/backEnd/login/login`)
      },
      {
        path: 'layout',
        name: 'layout',
        component: () => import(`@/views/backEnd/layout/layout`)
      },
      {
        path: 'websiteConfig',
        name: 'websiteConfig',
        title: `网站设置`,
        component: () => import(`@/views/backEnd/layout/layout`),
        children: [
        {
          path: 'menuConfig',
          name: 'menuConfig',
          title: '菜单管理',
          component: () => import(`@/views/backEnd/websiteConfig/menuConfig`)
        },{
          path: `userConfig`,
          name: `userConfig`,
          title: `用户管理`,
          component: () => import(`@/views/backEnd/websiteConfig/userConfig`)
        }]
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/refresh',
    name: 'refresh',
    component: () => import('@/views/errorPage/refresh/refresh')
  }
  // 404 page must be placed at the end !!!
  /* { path: '*', redirect: '/404', hidden: true } */
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
