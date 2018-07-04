const express = require('express')
const server = express()
const path = require('path')
const renderVueApp = require('./render-vue-app')

server.use('/abc', express.static(path.join(__dirname, '/static')));
server.get('/', renderVueApp)

server.listen(3000)
console.log('Server listening on http://localhost:3000')