// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'
import { baseUrl } from 'api'
import { fakeKeywords } from 'utils/genFakeData'

// eslint-disable-next-line import/prefer-default-export
const keywordHandlers = [
  rest.get(`${baseUrl}/keywords`, async (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      status: 'ok',
      response: fakeKeywords
      ,
    }),
  )),
  rest.post(`${baseUrl}/keywords`, async (req, res, ctx) => {
  //   "theme": "信義房屋",
  //   "keywords": "信義&房屋&房仲",
  //   "owner": 0,
  //   "created_by": 0,
  //   "group_id": 1,
  //   "is_shared": true,
  //   "is_combination": false,
  //   "combination_logic": ""
  // }

    //   {
    //   "theme": "string",
    //   "keywords": "string",
    //   "owner": 0,
    //   "created_by": 0,
    //   "group_id": 1
    // }
    const data = await req.json()
    console.info(data)
    // const { theme } = data

    return res(
      ctx.status(200),
      ctx.json({}),
    )
  }),
]

export default keywordHandlers
