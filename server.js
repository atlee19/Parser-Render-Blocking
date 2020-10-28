const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/block/script', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/script-blocking.html'))
})

app.get('/block/async', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/async-blocking.html'))
})

app.get('/block/defer', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/defer.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})