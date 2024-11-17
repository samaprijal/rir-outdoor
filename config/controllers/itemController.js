const Item = require("../models/Item");

exports.createItem = async (req, res) => {
    const { name, description, pricePerDay, stock } = req.body;
    try {
        const item = new Item({ name, description, pricePerDay, stock });
        await item.save();
        res.status(201).json({ item });
    } catch (error) {
        res.status(500).json({ error: "Failed to add item" });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json({ items });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch items" });
    }
};
