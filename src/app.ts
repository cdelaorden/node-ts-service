import express from 'express'

export function buildApp(port: number){
  const app = express()
  app.get('/healthz', (_req, res) => {
    res.status(200).send('all good!')
  })
  app.listen(port, () => {
    console.log('Started app at port', port)
  })  
}