const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/api/hello', (req, res) => {
//   res.send("proxy 확인중")
// })

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})