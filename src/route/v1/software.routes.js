const express = require('express')
const { software_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-software',
    software_Controller.software_controller_post
)

router.get('/list-software',
    software_Controller.software_controller_get
)

router.delete('/delete-software/:softwareid',
    software_Controller.software_controller_delete
)

router.put('/update-software/:software_id',
    software_Controller.software_controller_update
)

module.exports = router