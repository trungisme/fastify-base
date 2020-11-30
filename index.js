const path = require('path')
const k = require('./plugins/constants')

const fastify = require('fastify') (k.options.fastify)
fastify.register(require('fastify-helmet'), k.options.helmet)
fastify.register(require('./plugins/utils'))
fastify.register(require('./plugins/routes'))

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, k.folders.assetsFolder),
    prefix: '/' + k.folders.assetsFolder + '/'
})

fastify.register(require('point-of-view'), {
    engine: {
        ejs: require(k.templateEngine)
    },
    includeViewExtension: true,
    templates: k.folders.templatesFolder,
    options: {
        filename: path.resolve(k.folders.templatesFolder),
        views: [__dirname, '../' + k.folders.assetsFolder]
    }
})

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()