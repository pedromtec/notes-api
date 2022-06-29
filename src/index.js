const http = require('http')
const notes = require('./data/notes')

// The code uses the createServer method of the http module to 
// create a new web server. An event handler is registered to the 
// server that is called every time an HTTP request is made to the 
// server's address http://localhost:3001.
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })

  if (request.url === '/notes') {
    return response.end(JSON.stringify(notes))
  }
  response.end(JSON.stringify({ home: 'Notes app home' }))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)