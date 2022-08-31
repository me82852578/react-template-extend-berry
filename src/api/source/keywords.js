const source = 'keywords'

export const getAllKeywordsApiConf = {
  method: 'get', url: `/${source}`,
}

export const getSingleKeywordApiConf = {
  method: 'get', url: `/${source}/1`,
}

export const postKeywordApiConf = {
  method: 'post', url: `/${source}`, data: { },
}
