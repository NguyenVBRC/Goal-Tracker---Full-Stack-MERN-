const { Router } = require("express");
const Goals = require("../model/GoalsModel")
const router = Router();

router.post("/Goals", async (request, response) => {
    try {
        const goal = await Goals.create(request.body);
        console.log(request.body);
        response.json(goal);
    } catch(error) {
        console.log(error);
        return response.status(500).json(error);
    }
});

router.get("/Goals", async (request, response) => {
    try {
        const listGoals = await Goals.find({}, null, {limit: 10000});
        response.send(listGoals);
    } catch(error) {
        console.log(error);
        return response.status(500).json(error);
    }
});

router.delete("/Goals", async (request, response) => {
    try {
        await Goals.deleteMany();
    } catch(error) {
        console.log(error);
        return response.status(500).json(error);
    }
});
  
module.exports = router;