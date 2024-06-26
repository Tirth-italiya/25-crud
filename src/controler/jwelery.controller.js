const { jwelery_Services } = require("../service");

const jwelery_controller_post = async(req,res) => {
    try {

        const new_jwelery = await jwelery_Services.create_jwelery(req.body)

            if (!new_jwelery) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_jwelery
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const jwelery_controller_get = async(req,res) => {
    try {

        const list = await jwelery_Services.list_jwelery()

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

const jwelery_controller_delete = async(req,res) => {
    try {

        const id = req.params.jweleryid
        const result = await jwelery_Services.delete_jwelery(id)

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


const jwelery_controller_update = async(req,res) => {
    try {
        const id = req.params.jwelery_id
        const data = req.body

        const result = await jwelery_Services.update_jwelery(id,data)

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
    jwelery_controller_post,
    jwelery_controller_get,
    jwelery_controller_delete,
    jwelery_controller_update
}