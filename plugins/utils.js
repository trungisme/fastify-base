const fastifyPlugin = require('fastify-plugin')
const k = require('./constants')

function utils(fastify, options, next) {
    next()
}

module.exports = fastifyPlugin(utils)
