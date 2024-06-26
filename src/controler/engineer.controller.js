const { engineer_Services } = require("../service");

const engineer_controller_post = async(req,res) => {
    try {

        const new_engineer = await engineer_Services.create_engineer(req.body)

            if (!new_engineer) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_engineer
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const engineer_controller_get = async(req,res) => {
    try {

        const list = await engineer_Services.list_engineer()

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

const engineer_controller_delete = async(req,res) => {
    try {

        const id = req.params.engineerid
        const result = await engineer_Services.delete_engineer(id)

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


const engineer_controller_update = async(req,res) => {
    try {
        const id = req.params.engineer_id
        const data = req.body

        const result = await engineer_Services.update_engineer(id,data)

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
    engineer_controller_post,
    engineer_controller_get,
    engineer_controller_delete,
    engineer_controller_update
}