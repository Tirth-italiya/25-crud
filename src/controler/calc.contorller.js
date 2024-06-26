const { calc_Services } = require("../service");

const calc_controller_post = async(req,res) => {
    try {

        const new_calc = await calc_Services.create_calc(req.body)

            if (!new_calc) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_calc
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const calc_controller_get = async(req,res) => {
    try {

        const list = await calc_Services.list_calc()

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

const calc_controller_delete = async(req,res) => {
    try {

        const id = req.params.calcid
        const result = await calc_Services.delete_calc(id)

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


const calc_controller_update = async(req,res) => {
    try {
        const id = req.params.calc_id
        const data = req.body

        const result = await calc_Services.update_calc(id,data)

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
    calc_controller_post,
    calc_controller_get,
    calc_controller_delete,
    calc_controller_update
}