const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Staff {
        staff_id: ID
        name: String
        surname: String
        gender: String
        bio: String
        contacts: String
        company: String
    }
    type Query {
        getStaff: [Staff]
        getOneStaff(id: ID): Staff
    }
`)

module.exports = schema