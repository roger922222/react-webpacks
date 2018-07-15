const fs = require('fs')
const express = require('express')
const webpack = require('webpack')
const child_process = require('child_process')
const webpackDevMiddleware = require('webpack-dev-middleware')
const morgan = require('morgan')
const proxyMiddleware = require('http-proxy-middleware')


const app = express()
const config = require('./webpack.config.dev.js')

app.use(morgan())

require('./date.js')(app)

const compiler = webpack(config)


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  stats: {
    colors: true
  }
}))

app.use(require('webpack-hot-middleware')(compiler))

// app.middleware = [
//   proxyMiddleware(['/app1'], {target: 'https://app1:40510', changeOrigin: true}),
//   proxyMiddleware(['/app2'], {target: 'https://app2:40056', changeOrigin: true}),
//   proxyMiddleware(['/app3'], {target: 'https://app3', changeOrigin: true}),
//   proxyMiddleware(['/app4'], {target: 'https://app4:43443', changeOrigin: true})
// ]

// app.use(app.middleware)

app.listen(8000, () => {
  child_process.exec(`open http://localhost:8000/#/test/test-detailt`)
})