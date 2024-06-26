const express = require('express')
const { bottel_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-bottel',
    bottel_Controller.bottel_controller_post
)

router.get('/list-bottel',
    bottel_Controller.bottel_controller_get
)

router.delete('/delete-bottel/:bottelid',
    bottel_Controller.bottel_controller_delete
)

router.put('/update-bottel/:bottel_id',
    bottel_Controller.bottel_controller_update
)

module.exports = router