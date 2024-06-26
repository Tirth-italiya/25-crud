const express = require('express')
const { emp_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-emp',
    emp_Controller.emp_controller_post
)

router.get('/list-emp',
    emp_Controller.emp_controller_get
)

router.delete('/delete-emp/:empid',
    emp_Controller.emp_controller_delete
)

router.put('/update-emp/:emp_id',
    emp_Controller.emp_controller_update
)

module.exports = router