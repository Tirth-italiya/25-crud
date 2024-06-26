const { emp_Services } = require("../service");

const emp_controller_post = async(req,res) => {
    try {

        const new_emp = await emp_Services.create_emp(req.body)

            if (!new_emp) {
                throw new Error('Something Went Wrong....!')
            }

        res.status(200).json({
            success: true,
            data: new_emp
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const emp_controller_get = async(req,res) => {
    try {

        const list = await emp_Services.list_emp()

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

const emp_controller_delete = async(req,res) => {
    try {

        const id = req.params.empid
        const result = await emp_Services.delete_emp(id)

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


const emp_controller_update = async(req,res) => {
    try {
        const id = req.params.emp_id
        const data = req.body

        const result = await emp_Services.update_emp(id,data)

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
    emp_controller_post,
    emp_controller_get,
    emp_controller_delete,
    emp_controller_update
}