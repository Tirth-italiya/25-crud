const { software_Services } = require("../service");

const software_controller_post = async(req,res) => {
    try {

        const new_software = await software_Services.create_software(req.body)

            if (!new_software) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_software
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const software_controller_get = async(req,res) => {
    try {

        const list = await software_Services.list_software()

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

const software_controller_delete = async(req,res) => {
    try {

        const id = req.params.softwareid
        const result = await software_Services.delete_software(id)

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


const software_controller_update = async(req,res) => {
    try {
        const id = req.params.software_id
        const data = req.body

        const result = await software_Services.update_software(id,data)

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
    software_controller_post,
    software_controller_get,
    software_controller_delete,
    software_controller_update
}