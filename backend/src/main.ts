import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

const PORT = 5050

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
