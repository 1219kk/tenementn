import request from '@/utils/request'
export const getMyCity = (params) => {
  return request({
    url: '/area/city',
    params
  })
}
export const getHotCity = () => {
  return request({
    url: '/area/hot'
  })
}
