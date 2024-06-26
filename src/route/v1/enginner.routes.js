const express = require('express')
const { engineer_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-engineer',
    engineer_Controller.engineer_controller_post
)

router.get('/list-engineer',
    engineer_Controller.engineer_controller_get
)

router.delete('/delete-engineer/:engineerid',
    engineer_Controller.engineer_controller_delete
)

router.put('/update-engineer/:engineer_id',
    engineer_Controller.engineer_controller_update
)

module.exports = router