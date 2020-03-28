const express = require('express');

const router = express.Router();
const weightLossPlan = require('../Models/weightLossPlans.js');
const foodMacros = require('../Models/foodMacros.js');

router.get('/weightLoss', (req, res) => {
    weightLossPlan.find({}, 'title', (err, plan) => {
        if (err) {
            console.log(err);
            res.sendStatus(500).json({
                message: "Unable to connect to database !",
            })
        }
        res.status(200).json(plan);
    });
})

router.get('/weightLoss/:plantitle', (req, res) => {
    weightLossPlan.findOne({ title: req.params.plantitle }, (err, plan) => {
        if (err) {
            console.log(err);
            res.sendStatus(500).json({
                message: "Unable to connect to database !",
            })
        }
        if (plan) res.status(200).json(plan);
        else res.sendStatus(404).json({
            message: "Data does not exists"
        })
    });
});

router.get('/foodMacros', (req, res) => {


    foodMacros.find({}, 'foodName', (err, food) => {
        if (err) {
            console.log(err);
            res.sendStatus(500).json({
                message: "Unable to connect to database !",
            })
        }
        res.status(200).json(food);
    });
})

router.get('/foodMacros/:foodName', (req, res) => {
    foodMacros.findOne({ foodName: req.params.foodName }, (err, food) => {
        if (err) {
            console.log(err);
            res.sendStatus(500).json({
                message: "Unable to connect to database !",
            })
        }
        if (food) res.status(200).json(food);
        else res.sendStatus(404).json({
            message: "Data does not exists"
        })
    });
});
module.exports = router


