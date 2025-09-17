    import Group from "./backend/models/Group.js";

    // Alle groups ophalen
    app.get("/groups", async (req, res) => {
      const groups = await Group.find();
      res.json(groups);
    });

    export default app;

