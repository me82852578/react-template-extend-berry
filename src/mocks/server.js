// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node'
import { authHandlers, keywordHandlers } from './handlers'

const server = setupServer(...[...authHandlers, ...keywordHandlers])

export default server
