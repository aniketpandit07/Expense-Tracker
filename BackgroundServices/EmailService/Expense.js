const dotenv = require('dotenv')
const sendMail = require("../Helpers/SendMail")
const Expense = require("../Models/Expense")
dotenv.config();

const expenseEmail = async()=>{
    const expenses = await Expense.find()
    const totalExpense = expenses.reduce(
        (acc, expense) =>acc + expense.value, 0
    )

    if (totalExpense> 10000){
        let messageOption= {
            from:process.env.EMAIL,
            to:process.env.ADMIN_EMAIL,
            subject:"Warning",
            text:`Your total expenses is ${totalExpense}. Please review your expenses`
        }
        await sendMail(messageOption)
    }
}

module.exports = expenseEmail