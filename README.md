# Node Typescript project
A basic, pre-configured Node.js app to be used as starting template using for example [`degit`](https://github.com/Rich-Harris/degit). Includes the following pre-configured:

- Node 18
- Typescript 5 with path mapping from `@/*` to `src`. So `@/modules/foo` maps to `./src/modules/foo`. The path mapping is fixed automatically when building, so the resulting Node.js JS project can resolve files.
- Eslint configured for Typescript
- Prettier
- Jest testing using TS, via `ts-jest`.
- Uses `esbuild` instead of `ts-node` for developing. Blazing fast you know.
- Dockerfile with multi-step build based on `slim` image (only 185Mb base image size after compilation). 
- Basic Github pipeline (`ci.yml`) that caches `node_modules`, and then runs lint, test and compile TS on `push` and `pull_request` to `main` branch only.

A note on `slim` base image: see here [Image Variants](https://hub.docker.com/_/node) regarding this. In case something wrong happens during the build, switch to `node-18` image for safety, specially if using dependencies with native binaries (like `sharp` for image manipulation and so on).

Node version 16, all dependencies latests versions as of March 15th 2022.
# Usage
Create a new Node service based on this repo with
```
npx degit cdelaorden/node-ts
```
This is fast and doesn't include git info. Is just a fresh copy of the latest version.

## What next?
1. Modify the README and `package.json` details, so they don't point to this repository anymore (`url`, `author`, `name`, `bugs`, `homepage` and so on). 
2. Add your preferred stack! Choose a DB, add a `docker-compose.yaml` for local development, add dependencies and code your app. This simply is the starting point, with some commands and configurations ready.
## Development

- `npm run dev`
Starts dev environment locally with superfast `esbuild` transpilation + `nodemon`for hot reload.

- `npm test`
Single run of all tests with Jest

- `npm run tdd`
Runs test with Jest in watch mode

- `npm run ts-compile`
Compiles TS with `tsc` (slower, but real type checking)

- `npm run lint`
Runs Eslint

- `npm run coverage`
Runs Jest and outputs coverage info

## Production

- `npm run build`
Compiles TS to `build` output (which is .gitignored)

- `npm run start`
For production running, executes JS-compiled app in `build/index.js` (needs previous `build` step)

- `docker build .`
Builds the Docker image. Remember to tweak the `Dockerfile` if custom dependencies are needed inside the container for your app.

