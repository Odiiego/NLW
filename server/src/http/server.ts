import fastify from 'fastify'

const app = fastify()

app.listen({ port: 3333 }).then(() => {
  console.clear()
  console.log('HTTP server running!')
})
