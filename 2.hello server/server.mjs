import express from 'express'
const app = express()
const port = 3000

app.get('/student', (req, res) => {
  res.send('I am a student!')
})
app.get('/teacher', (req, res) => {
    res.send('I am a teacher!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})