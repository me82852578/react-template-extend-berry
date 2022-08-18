// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw'
import { baseUrl } from 'api'

// eslint-disable-next-line import/prefer-default-export

const fakeToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwOTU5OTg4LCJpYXQiOjE2NjA3NDM5ODgsImp0aSI6Ijc3NTlkOTJiMDc0MzRlMjFiODhhYzI3YTAwOTg0ZWQ0IiwidXNlcl9pZCI6MX0.q2nVjIPbYNLLCA8Zcg0lIeFUyB_RAjTDSJAdbwbumTQ'

const authHandlers = [
  rest.post(`${baseUrl}/auth/token`, async (req, res, ctx) => {
    const data = await req.json()
    const { username, password } = data
    if (username === 'admin' && password === '1234') {
      return res(
        ctx.status(200),
        ctx.json({
          refresh_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2MDgzMDM4OCwiaWF0IjoxNjYwNzQzOTg4LCJqdGkiOiIwMjg5ZmQwZWM3Yjk0MjAyYjgzZTNmZGZkYWFhMjU5MSIsInVzZXJfaWQiOjF9.FT2gD2uyHBdRIO0qVnyrCXMRX1f9Q57X0DaWeDJnvIU',
          access_token: fakeToken,
          username: 'admin',
          groups: [
            'default',
          ],
        }),
      )
    }
    return res(
      ctx.status(401),
      ctx.json({
        detail: 'No active account found with the given credentials',
      }),
    )
  }),

  rest.post(`${baseUrl}/auth/verify`, async (req, res, ctx) => {
    const data = await req.json()
    const { token } = data
    if (token === fakeToken) {
      return res(
        ctx.status(200),
        ctx.json({}),
      )
    }
    return res(
      ctx.status(401),
      ctx.json({
        detail: 'Token is invalid or expired',
        code: 'token_not_valid',
      }),
    )
  }),
]

export default authHandlers
