const { createProxyMiddleware } = require("http-proxy-middleware");
const apiHost = process.env.API_HOST || 'localhost';
const restream = function(proxyReq, req, res, options) {
  if (req.body) {
      let bodyData = JSON.stringify(req.body);
      // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
      proxyReq.setHeader('Content-Type','application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      // stream the content
      proxyReq.write(bodyData);
  }
}
const apiPaths = {
  '/api': {
      target: `http://${apiHost}`, 
      pathRewrite: {
        '^/api': '/'
      },
      changeOrigin: true,
      onProxyReq: restream
  }
}

const proxy = createProxyMiddleware(apiPaths['/api']);

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        console.log(result);
        return reject(result)
      }

      console.log(result);
      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, proxy);

  // Rest of the API logic
  //res.json({ message: 'Hello Everyone!' })
}

export default handler