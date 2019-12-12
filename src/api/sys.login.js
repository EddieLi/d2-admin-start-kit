import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/auth/jwt/create/',
    method: 'post',
    data
  })
}

export function RefreshJWT (data) {
  return request({
    url: '/auth/jwt/refresh/',
    method: 'post',
    data
  })
}

export function GetMe (token) {
  return request({
    url: '/auth/users/me/',
    method: 'get'
  })
}
