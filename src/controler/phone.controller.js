const { phone_Services } = require("../service");

const phone_controller_post = async(req,res) => {
    try {

        const new_phone = await phone_Services.create_phone(req.body)

            if (!new_phone) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_phone
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const phone_controller_get = async(req,res) => {
    try {

        const list = await phone_Services.list_phone()

            if (!list) {
                throw new Error('Not Found...!')
            }

        res.status(200).json({
            success: true,
            data: list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const phone_controller_delete = async(req,res) => {
    try {

        const id = req.params.phoneid
        const result = await phone_Services.delete_phone(id)

        res.status(200).json({
            id: id,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


const phone_controller_update = async(req,res) => {
    try {
        const id = req.params.phone_id
        const data = req.body

        const result = await phone_Services.update_phone(id,data)

        if(!result){
            throw new Error("Not updated")
        }

        res.status(200).json({
            success: true,
            message: "Updated",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    phone_controller_post,
    phone_controller_get,
    phone_controller_delete,
    phone_controller_update
}