const { bottel_Services } = require("../service");

const bottel_controller_post = async(req,res) => {
    try {

        const new_bottel = await bottel_Services.create_bottel(req.body)

            if (!new_bottel) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_bottel
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const bottel_controller_get = async(req,res) => {
    try {

        const list = await bottel_Services.list_bottel()

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

const bottel_controller_delete = async(req,res) => {
    try {

        const id = req.params.bottelid
        const result = await bottel_Services.delete_bottel(id)

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


const bottel_controller_update = async(req,res) => {
    try {
        const id = req.params.bottel_id
        const data = req.body

        const result = await bottel_Services.update_bottel(id,data)

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
    bottel_controller_post,
    bottel_controller_get,
    bottel_controller_delete,
    bottel_controller_update
}