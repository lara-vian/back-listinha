import express from "express";
import marketRouter from "./routes/market.route";

const app = express()

app.use(express.json())
app.use("/market",marketRouter)

export default app