# Node Typescript project
A basic, pre-configured Node.js app to be used as starting template using for example [`degit`](https://github.com/Rich-Harris/degit). Includes the following pre-configured:

- Typescript
- Eslint configured for Typescript
- Prettier
- Jest
- Dockerfile with multi-step build

Node version 16, all dependencies latests versions as of March 15th 2022.
# Usage
## Development

- `npm run dev`
Starts dev environment locally with `ts-node-dev` and hot reload.

- `npm test`
Single run of all tests with Jest

- `npm run tdd`
Runs test with Jest in watch mode

- `npm run lint`
Runs Eslint

- `npm run coverage`
Runs Jest and outputs coverage info

## Production

- `npm run build`
Compiles TS to `build` output (which is .gitignored)

- `npm run start`
For production running, executes JS-compiled app in `build/index.js` (needs previous `build` step)

