const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
    const { user, items, totalCost } = req.body;
    try {
        const order = new Order({ user, items, totalCost });
        await order.save();
        res.status(201).json({ order });
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user items.item");
        res.json({ orders });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch orders" });
    }
};
