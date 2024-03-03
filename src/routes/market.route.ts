import expres from "express";
import market  from "../data/market/data-1.json";
const marketRouter = expres.Router()

marketRouter.get("/market-parent", (req, res) => {
  res.json(market)
})

export default marketRouter