import express from "express";
import Star from "../models/Star.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const doc = await Star.findOne();
    res.json({ count: doc?.count || 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let doc = await Star.findOne();
    if (!doc) doc = await Star.create({ count: 1 });
    else {
      doc.count++;
      await doc.save();
    }
    res.json({ count: doc.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
