const WilderModel = require("../models/Wilder");

module.exports = {

    create: async (req, res) => {
        await WilderModel.init();
        const wilder = new WilderModel(req.body);
        const result = await wilder.save();
        res.json({ success: true, result });
    },

    read: async (req, res) => {
        const result = await WilderModel.find({});
        res.json({ succes: true, result })
    },

    update: async (req, res) => {
        const result = await WilderModel.findByIdAndUpdate(req.params.id, req.body)
        res.json({ succes: true, result });
    },

    delete: async (req, res) => {
        const result = await WilderModel.findOneAndRemove(req.params.id);
        res.json({ succes: true, result });
    }
}