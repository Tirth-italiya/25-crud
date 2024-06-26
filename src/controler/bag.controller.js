const { bag_Services } = require("../service");

const bag_controller_post = async(req,res) => {
    try {

        const new_bag = await bag_Services.create_bag(req.body)

            if (!new_bag) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_bag
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const bag_controller_get = async(req,res) => {
    try {

        const list = await bag_Services.list_bag()

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

const bag_controller_delete = async(req,res) => {
    try {

        const id = req.params.bagid
        const result = await bag_Services.delete_bag(id)

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


const bag_controller_update = async(req,res) => {
    try {
        const id = req.params.bag_id
        const data = req.body

        const result = await bag_Services.update_bag(id,data)

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
    bag_controller_post,
    bag_controller_get,
    bag_controller_delete,
    bag_controller_update
}