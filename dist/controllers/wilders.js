var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WilderModel = require("../models/Wilder");
module.exports = {
    create: (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield WilderModel.init();
        const wilder = new WilderModel(req.body);
        const result = yield wilder.save();
        res.json({ success: true, result });
    }),
    read: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const result = yield WilderModel.find({});
        res.json({ succes: true, result });
    }),
    update: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const result = yield WilderModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({ succes: true, result });
    }),
    delete: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const result = yield WilderModel.findOneAndRemove(req.params.id);
        res.json({ succes: true, result });
    })
};
//# sourceMappingURL=wilders.js.map