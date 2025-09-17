    const express = require("express");
    const EventModel = require("../models/Event");
    const router = express.Router(); 
    
    router.get("/", async (req, res) => {
      try {
        const events = await EventModel.find();
        res.status(302).send(events);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    module.exports = router;

