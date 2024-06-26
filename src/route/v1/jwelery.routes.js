const express = require('express')
const { jwelery_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-jwelery',
    jwelery_Controller.jwelery_controller_post
)

router.get('/list-jwelery',
    jwelery_Controller.jwelery_controller_get
)

router.delete('/delete-jwelery/:jweleryid',
    jwelery_Controller.jwelery_controller_delete
)

router.put('/update-jwelery/:jwelery_id',
    jwelery_Controller.jwelery_controller_update
)

module.exports = router