require('dotenv').config()

const http = require('http')
const port = 5000

const requestHandler = require('./api/contact.js')

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})