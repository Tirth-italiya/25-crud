const { color_Services } = require("../service");

const color_controller_post = async(req,res) => {
    try {

        const new_color = await color_Services.create_color(req.body)

            if (!new_color) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_color
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const color_controller_get = async(req,res) => {
    try {

        const list = await color_Services.list_color()

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

const color_controller_delete = async(req,res) => {
    try {

        const id = req.params.colorid
        const result = await color_Services.delete_color(id)

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


const color_controller_update = async(req,res) => {
    try {
        const id = req.params.color_id
        const data = req.body

        const result = await color_Services.update_color(id,data)

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
    color_controller_post,
    color_controller_get,
    color_controller_delete,
    color_controller_update
}