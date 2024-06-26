const express = require('express')
const { food_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-food',
    food_Controller.food_controller_post
)

router.get('/list-food',
    food_Controller.food_controller_get
)

router.delete('/delete-food/:foodid',
    food_Controller.food_controller_delete
)

router.put('/update-food/:food_id',
    food_Controller.food_controller_update
)

module.exports = router