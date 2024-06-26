const { social_Services } = require("../service");

const social_controller_post = async(req,res) => {
    try {

        const new_social = await social_Services.create_social(req.body)

            if (!new_social) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_social
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const social_controller_get = async(req,res) => {
    try {

        const list = await social_Services.list_social()

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

const social_controller_delete = async(req,res) => {
    try {

        const id = req.params.socialid
        const result = await social_Services.delete_social(id)

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


const social_controller_update = async(req,res) => {
    try {
        const id = req.params.social_id
        const data = req.body

        const result = await social_Services.update_social(id,data)

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
    social_controller_post,
    social_controller_get,
    social_controller_delete,
    social_controller_update
}