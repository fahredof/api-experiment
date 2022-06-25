const express = require('express')
const staffRouter = require('./routes/staff.route')
const app = express()

app.use(express.json())
app.use('/api', staffRouter)

app.listen(8080, () => console.log('server started on port 5000'))