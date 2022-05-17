const express = require('express')
const {db} = require('./dbConnection')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/category', (req, res) => {
  const sql = "select * from Category"

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
        "message":"success",
        "data":rows
    })
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})