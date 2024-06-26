const express = require('express')
const { color_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-color',
    color_Controller.color_controller_post
)

router.get('/list-color',
    color_Controller.color_controller_get
)

router.delete('/delete-color/:colorid',
    color_Controller.color_controller_delete
)

router.put('/update-color/:color_id',
    color_Controller.color_controller_update
)

module.exports = router