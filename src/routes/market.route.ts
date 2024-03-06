import { Router } from "express";
import market  from "../data/market/data-1.json";
const marketRouter = Router()

marketRouter.get("/market-parent", (req, res) => {
  res.json(market)
})

marketRouter.post("/market-parent", (req, res) => {
  
})

marketRouter.delete("/market-parent", (req, res) => {
  
})


export default marketRouter