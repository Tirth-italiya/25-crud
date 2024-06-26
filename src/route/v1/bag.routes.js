const express = require('express')
const { bag_Controller } = require('../../controler')

const router = express.Router()

router.post('/create-bag',
    bag_Controller.bag_controller_post
)

router.get('/list-bag',
    bag_Controller.bag_controller_get
)

router.delete('/delete-bag/:bagid',
    bag_Controller.bag_controller_delete
)

router.put('/update-bag/:bag_id',
    bag_Controller.bag_controller_update
)

module.exports = router