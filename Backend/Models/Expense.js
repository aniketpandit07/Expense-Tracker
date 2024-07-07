const mongoose = require("mongoose")
const ExpenseeSchema = mongoose.Schema({
    label:{
        type:String,
        require:true
    },
    value:{
        type:Number,
        require: true
    },
    date:{
        type:String,
        require:true
    }

})

module.exports = mongoose.model("Expense", ExpenseeSchema)