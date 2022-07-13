import request from '@/utils/request'
export const getMyswiper = () => {
  return request({
    url: '/home/swiper'
  })
}

export const getGroups = (area) => {
  return request({
    url: '/home/groups',
    params: {
      area
    }
  })
}
