import request from '@/utils/request'

export function addMenu(data) {
  return request({
    url: '/menu/addMenu',
    method: 'post',
    data: data
  })
}
export function getMenuList(params) {
    return request({
        url: '/menu/getMenuList',
        method: 'get',
        params: params
    })
}

export function updateMenu(data) {
    return request({
        url: '/menu/updateMenu',
        method: 'patch',
        data: data
    })
}

export function deleteMenuById(id) {
    return request({
        url: `/menu/deleteMenuById/${id}`,
        method: 'delete',
    })
}
