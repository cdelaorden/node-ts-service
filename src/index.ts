// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import { buildApp } from './app'
import env from './lib/env'

buildApp(env.int('PORT', 3000))

