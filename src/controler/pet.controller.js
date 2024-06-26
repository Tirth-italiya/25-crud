const { pet_Services } = require("../service");

const pet_controller_post = async(req,res) => {
    try {

        const new_pet = await pet_Services.create_pet(req.body)

            if (!new_pet) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_pet
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const pet_controller_get = async(req,res) => {
    try {

        const list = await pet_Services.list_pet()

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

const pet_controller_delete = async(req,res) => {
    try {

        const id = req.params.petid
        const result = await pet_Services.delete_pet(id)

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


const pet_controller_update = async(req,res) => {
    try {
        const id = req.params.pet_id
        const data = req.body

        const result = await pet_Services.update_pet(id,data)

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
    pet_controller_post,
    pet_controller_get,
    pet_controller_delete,
    pet_controller_update
}