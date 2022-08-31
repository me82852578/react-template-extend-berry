const source = 'visitors'

export const getAllVisitorsApiConf = {
  method: 'get', url: `/${source}`, params: { page: 1, perPage: 20 },
}

export const getSingleVisitorApiConf = {
  method: 'get', url: `/${source}/1`,
}

export const postVisitorApiConf = {
  method: 'post', url: `/${source}`, data: { },
}
