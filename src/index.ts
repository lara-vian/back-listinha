import express from "express";
import marketParentRouter from "./routes/market-parent.route";
import carParentRouter from "./routes/car-parent.route";

const app = express()

app.use(express.json())
app.use("/market", marketParentRouter);
app.use("/car", carParentRouter);

export default app