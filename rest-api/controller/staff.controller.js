const db =  require('../database')

class StaffController {
    async getStaff(req, res) {
        const staff = await db.query('SELECT * FROM staff')
        res.json(staff.rows)
    }

    async getOneStaff(req, res) {
        const id = req.params.id;
        const staff = await db.query('SELECT * FROM staff WHERE staff_id = $1', [id])
        res.json(staff.rows)
    }
}

module.exports = new StaffController()