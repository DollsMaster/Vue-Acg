import request from '@/utils/request'

export function addArticle(data) {
  return request({
    url: '/article/addArticle',
    method: 'post',
    data: data
  })
}

export function getArticleList(params) {
  return request({
    url: `/article/getArticleList`,
    method: `get`,
    params: params
  })
}