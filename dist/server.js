"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import WilderModel from './models/Wilder';
const WilderModel = require("./models/Wilder");
const wilderController = require("./controllers/wilders");
// import wilderController from "./controllers/wilders";
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
    autoIndex: true
})
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));
function runAsyncWrapper(callback) {
    return function (req, res, next) {
        callback(req, res, next).catch(next);
    };
}
app.get("/", (req, res) => {
    res.send('Hello World');
    WilderModel.init().then(() => {
        const firstWilder = new WilderModel({
            name: "First Wilder",
            city: "San Francisco",
            skills: [
                { title: "HTML", votes: 10 },
                { title: "React", votes: 5 },
            ],
        });
        firstWilder
            .save()
            .then((result) => {
            console.log("success:", result);
        })
            .catch((err) => {
            console.log("error:", err);
        });
    });
});
app.post("/api/wilder/create", runAsyncWrapper(wilderController.create));
app.get("/api/wilder/read", runAsyncWrapper(wilderController.read));
app.post("/api/wilder/update/:id", runAsyncWrapper(wilderController.update));
app.post("/api/wilder/delete/:id", runAsyncWrapper(wilderController.delete));
app.listen(3000, () => console.log("Server started on 3k"));
//# sourceMappingURL=server.js.map