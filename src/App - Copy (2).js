const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/webservice',
    createProxyMiddleware({
      target: 'https://moto1nz.myshopify.com',
      changeOrigin: true,
    })
  );
};