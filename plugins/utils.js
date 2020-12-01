const fastifyPlugin = require('fastify-plugin')

function utils (fastify, options, next) {
  fastify.decorate('addNum', addNumDecorator)
  next()
}

function addNumDecorator (a, b) {
  return a + b
}

module.exports = fastifyPlugin(utils)
