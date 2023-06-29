import request from '@/utils/request'

export function addArticle(data) {
  return request({
    url: '/article/addArticle',
    method: 'post',
    data: data
  })
}