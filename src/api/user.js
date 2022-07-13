import request from '@/utils/request'
export const MyLogin = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}
export const getUserInfo = () => {
  return request({
    url: 'user'
  })
}
