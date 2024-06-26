const express = require('express')
const { pet_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-pet',
    pet_Controller.pet_controller_post
)

router.get('/list-pet',
    pet_Controller.pet_controller_get
)

router.delete('/delete-pet/:petid',
    pet_Controller.pet_controller_delete
)

router.put('/update-pet/:pet_id',
    pet_Controller.pet_controller_update
)

module.exports = router