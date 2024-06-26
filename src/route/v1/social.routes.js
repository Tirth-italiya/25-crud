const express = require('express')
const { social_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-social',
    social_Controller.social_controller_post
)

router.get('/list-social',
    social_Controller.social_controller_get
)

router.delete('/delete-social/:socialid',
    social_Controller.social_controller_delete
)

router.put('/update-social/:social_id',
    social_Controller.social_controller_update
)

module.exports = router