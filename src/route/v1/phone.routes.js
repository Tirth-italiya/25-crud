const express = require('express')
const { phone_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-phone',
    phone_Controller.phone_controller_post
)

router.get('/list-phone',
    phone_Controller.phone_controller_get
)

router.delete('/delete-phone/:phoneid',
    phone_Controller.phone_controller_delete
)

router.put('/update-phone/:phone_id',
    phone_Controller.phone_controller_update
)

module.exports = router