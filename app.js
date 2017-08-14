const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()

// compress responses
app.use(compression())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`))
})

const port = process.env.PORT || 3001

// eslint-disable-next-line
console.log('Web server available : http://localhost:3001')
app.listen(port)
