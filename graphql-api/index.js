const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const db =  require('./database')

const app = express()
app.use(cors())

const root = {
    getStaff: async () => {
        const staff = await db.query('SELECT * FROM staff')
        return staff.rows
    },
    getOneStaff: async ({ id }) => {
        const staff = await db.query(`SELECT * FROM staff WHERE staff_id=${id}`)
        return staff.rows
    },
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('server started on port 5000'))