import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

export default app

// import { Hono } from 'hono'
//
// const app = new Hono()
//
// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })
//
// export default app
