const express = require("express");
const router = express.Router();

const Expense = require("../Models/Expense");

//add expense
router.post("/", async (req, res) => {
    try {
        const newExpense = await Expense(req.body);
        const expense = newExpense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get all expenses
router.get("/", async(req, res) => {
    try {
        const expenses = await Expense.find().sort({createdAt:-1});
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json(error);
        
    }
 });

//update expense
router.put("/:id", async(req, res) => {
try {
    const expense = await Expense.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{
        new:true
    });
    res.status(201).json(expense);
} catch (error) {
    res.status(500).json(error); 
}
 });

//delete expense
router.delete("/:id", async(req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.status(201).json("deleted Successfull")
    } catch (error) {
        res.status(500).json(error);
    }
 });

module.exports = router;
