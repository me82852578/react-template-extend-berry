const source = 'tags'

export const getAllTagsApiConf = {
  method: 'get', url: `/${source}`,
}

export const getSingleTagApiConf = {
  method: 'get', url: `/${source}/1`,
}

export const postSingleTagApiConf = {
  method: 'post', url: `/${source}`, data: { },
}

export const putSingleTagApiConf = {
  method: 'put', url: `/${source}`, data: { },
}

export const deleteSingleTagApiConf = {
  method: 'delete', url: `/${source}`, data: { },
}
