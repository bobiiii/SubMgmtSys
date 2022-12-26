import studentSchema from "../models/student"

function controller (){
    const getALlData = async (req,res)=> {
        try {
        const result = await studentSchema.find()
        res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
} 

export default controller;