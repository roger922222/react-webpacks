const glob = require('glob')
const fs = require('fs')

const files = glob.sync('mock/**/*.json')

module.exports = function (app) {

  files.forEach(file => {
    let data = fs.readFileSync('./' + file, 'utf8')
    app.all(file.slice(4, -5), (req, res) => {
        console.log('req', req.originalUrl)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'DELETE,GET,HEAD,POST,PUT,OPTIONS,TRACE')
        res.setHeader("Access-Control-Allow-Headers", "X-Custom-Header,accept, Content-Type")
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.setHeader('Content-Type', 'application/json;charset=UTF-8')
        res.status(200).send(data)
    })
  })

}
