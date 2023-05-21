// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import env from './lib/env'
import { buildApp } from './app'

buildApp(env.int('PORT', 3000))

