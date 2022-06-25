const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'art1',
    host: 'localhost',
    port: 5432,
    database: 'hack_dpcp',
})

module.exports = pool