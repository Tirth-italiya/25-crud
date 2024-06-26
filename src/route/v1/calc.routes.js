const express = require('express')
const { calc_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-calc',
    calc_Controller.calc_controller_post
)

router.get('/list-calc',
    calc_Controller.calc_controller_get
)

router.delete('/delete-calc/:calcid',
    calc_Controller.calc_controller_delete
)

router.put('/update-calc/:calc_id',
    calc_Controller.calc_controller_update
)

module.exports = router