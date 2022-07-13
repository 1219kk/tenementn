import request from '@/utils/request'

// 根据条件查询房屋
export const getHouse = (params) => {
  return request({
    url: '/houses',
    params
  })
}
// houses/condition/houses/condition
export const getCondition = (params) => {
  return request({
    // url: '/houses/condition',
    url: 'houses/condition?id=' + params
    // params
  })
}

export const getHouseById = (id) => {
  return request({
    url: `/houses/${id}`
  })
}

// /houses/params发布房屋所需的条件
export const getHouseCondition = (params) => {
  return request({
    url: '/houses/params',
    params
  })
}
