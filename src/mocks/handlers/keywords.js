// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'
import { baseUrl } from 'api'

// eslint-disable-next-line import/prefer-default-export
const keywordHandlers = [
  rest.get(`${baseUrl}/auth/keywords`, async (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      status: 'ok',
      response: [
        {
          id: 1,
          theme: 'A',
          keywords: 'testttt123',
          owner: 1,
          group_id: 1,
          created_by: 1,
          update_at: '2022-08-16T04:14:35.943280',
          created_at: '2022-08-16T02:57:23.930851',
          is_shared: false,
          is_combination: false,
          combination_logic: '',
        },
        {
          id: 2,
          theme: 'A',
          keywords: '(A&B)|C',
          owner: 1,
          group_id: 1,
          created_by: 1,
          update_at: '2022-08-16T02:57:24.580134',
          created_at: '2022-08-16T02:57:24.580121',
          is_shared: false,
          is_combination: false,
          combination_logic: '',
        },
        {
          id: 3,
          theme: 'A',
          keywords: '(A&B)|C',
          owner: 1,
          group_id: 1,
          created_by: 1,
          update_at: '2022-08-16T02:57:25.099074',
          created_at: '2022-08-16T02:57:25.099062',
          is_shared: false,
          is_combination: false,
          combination_logic: '',
        },
        {
          id: 4,
          theme: 'A',
          keywords: '(A&B)|C',
          owner: 1,
          group_id: 1,
          created_by: 1,
          update_at: '2022-08-16T04:09:57.956455',
          created_at: '2022-08-16T04:09:57.956442',
          is_shared: false,
          is_combination: false,
          combination_logic: '',
        },
        {
          id: 5,
          theme: 'A',
          keywords: '(A&B)|C',
          owner: 1,
          group_id: 1,
          created_by: 1,
          update_at: '2022-08-16T04:09:58.143991',
          created_at: '2022-08-16T04:09:58.143980',
          is_shared: false,
          is_combination: false,
          combination_logic: '',
        },
        {
          id: 6,
          theme: 'A',
          keywords: '(A&B)|C',
          owner: 1,
          group_id: 1,
          created_by: 1,
          update_at: '2022-08-16T04:09:58.382818',
          created_at: '2022-08-16T04:09:58.382807',
          is_shared: false,
          is_combination: false,
          combination_logic: '',
        },
        {
          id: 7,
          theme: 'A',
          keywords: '(A&B)|C',
          owner: 1,
          group_id: 1,
          created_by: 1,
          update_at: '2022-08-16T04:09:58.697725',
          created_at: '2022-08-16T04:09:58.697714',
          is_shared: false,
          is_combination: false,
          combination_logic: '',
        },
        {
          id: 8,
          theme: 'A',
          keywords: '(A&B)|C',
          owner: 1,
          group_id: 1,
          created_by: 1,
          update_at: '2022-08-16T04:09:58.914767',
          created_at: '2022-08-16T04:09:58.914755',
          is_shared: false,
          is_combination: false,
          combination_logic: '',
        },
      ],
    }),
  )),
  rest.post(`${baseUrl}/auth/keywords`, async (req, res, ctx) => {
  //   "theme": "信義房屋",
  //   "keywords": "信義&房屋&房仲",
  //   "owner": 0,
  //   "created_by": 0,
  //   "group_id": 1,
  //   "is_shared": true,
  //   "is_combination": false,
  //   "combination_logic": ""
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
