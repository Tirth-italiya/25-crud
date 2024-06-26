const express = require('express')
const { cartoon_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-cartoon',
    cartoon_Controller.cartoon_controller_post
)

router.get('/list-cartoon',
    cartoon_Controller.cartoon_controller_get
)

router.delete('/delete-cartoon/:cartoonid',
    cartoon_Controller.cartoon_controller_delete
)

router.put('/update-cartoon/:cartoon_id',
    cartoon_Controller.cartoon_controller_update
)

module.exports = router