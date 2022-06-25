const Router = require('express')
const router = new Router()
const staffController =  require('../controller/staff.controller')

router.get('/staff', staffController.getStaff)
router.get('/staff/:id', staffController.getOneStaff)


module.exports = router