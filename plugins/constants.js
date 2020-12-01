const k = {
  folders: {
    assetsFolder: 'public',
    cssFolder: 'public/css',
    jsFolder: 'public/js',
    templatesFolder: 'views'
  },
  options: {
    fastify: { logger: true },
    helmet: { contentSecurityPolicy: false }
  },
  templateEngine: 'ejs'
}

module.exports = k
