/* eslint-disable import/no-extraneous-dependencies */
import { setupWorker } from 'msw'
import { authHandlers, keywordHandlers } from './handlers'

const worker = setupWorker(...[...authHandlers, ...keywordHandlers])

export default worker
