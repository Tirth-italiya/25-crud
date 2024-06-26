const { food_Services } = require("../service");

const food_controller_post = async(req,res) => {
    try {

        const new_food = await food_Services.create_food(req.body)

            if (!new_food) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_food
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const food_controller_get = async(req,res) => {
    try {

        const list = await food_Services.list_food()

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

const food_controller_delete = async(req,res) => {
    try {

        const id = req.params.foodid
        const result = await food_Services.delete_food(id)

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


const food_controller_update = async(req,res) => {
    try {
        const id = req.params.food_id
        const data = req.body

        const result = await food_Services.update_food(id,data)

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
    food_controller_post,
    food_controller_get,
    food_controller_delete,
    food_controller_update
}