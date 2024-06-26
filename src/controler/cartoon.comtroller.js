const { cartoon_Services } = require("../service");

const cartoon_controller_post = async(req,res) => {
    try {

        const new_cartoon = await cartoon_Services.create_cartoon(req.body)

            if (!new_cartoon) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_cartoon
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const cartoon_controller_get = async(req,res) => {
    try {

        const list = await cartoon_Services.list_cartoon()

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

const cartoon_controller_delete = async(req,res) => {
    try {

        const id = req.params.cartoonid
        const result = await cartoon_Services.delete_cartoon(id)

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


const cartoon_controller_update = async(req,res) => {
    try {
        const id = req.params.cartoon_id
        const data = req.body

        const result = await cartoon_Services.update_cartoon(id,data)

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
    cartoon_controller_post,
    cartoon_controller_get,
    cartoon_controller_delete,
    cartoon_controller_update
}