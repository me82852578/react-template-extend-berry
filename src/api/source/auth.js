const source = 'auth'

export const loginApiConf = {
  method: 'post', url: `/${source}/token`, data: { account: '', password: '' },
}

export const verifyTokenApiConf = {
  method: 'post', url: `/${source}/verify`, data: { token: '' },
}
