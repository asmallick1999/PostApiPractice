const detailsData = require('../Model/detailsData')

exports.getDetailsData = (req,res)=>{
    detailsData.find()
    .then(
        result =>
            res.status(200).json({
                message:"Show all details data",
                data:result
            })
    )
    .catch(
        error=>
            res.status(500).json({
                message:"error to show data",
                data:error
            })
    )
}

exports.postDetailsData = (req, res) =>{
    const detailsDataInput = {
        "name": req.body.name,
        "email": req.body.email,
        "mobile": req.body.mobile 
    }
    detailsData.insertMany(detailsDataInput)
    .then(
        result =>
            res.status(200).json({
                message:"Successfully inserted details data",
                data:result
            })
    )
    .catch(
        error =>
        res.status(500).json({
            message:"error occure",
            data:error
        })
    )
}