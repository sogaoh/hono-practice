import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

app.use('/static/*', serveStatic({ root: './' }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))

app.get('/', (c) => c.text('You can access: /static/hello.txt'))
app.get('*', serveStatic({ path: './static/fallback.txt' }))

app.get(
  '/static/*',
  serveStatic({
    onNotFound: (path, c) => {
      console.log(`${path} is not found, you access ${c.req.path}`)
    },
  })
)

//export default app
export default { 
  port: 3030, 
  fetch: app.fetch, 
}

//ちょっとこれイマイチまだわかんない
// app.get(
//   '/static/*',
//   serveStatic({
//     root: './',
//     rewriteRequestPath: (path) => path.replace(/^\/static/, '/statics'),
//   })
// )
