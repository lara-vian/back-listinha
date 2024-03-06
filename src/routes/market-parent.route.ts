import express, { Router } from "express";
import { check, validationResult } from "express-validator";
import market from "../data/market/data-parent.json";
import { saveParent} from "../services/save-market.service";
const marketRouter = Router();

marketRouter.get(
  "/market-parent",
  (req: express.Request, res: express.Response) => {
    res.json(market);
  }
);

marketRouter.post(
  "/market-parent",
  [
    check("name", "O nome deve ser informado").not().isEmpty(),
    check("quantity", "A quantidade deve ser informada").not().isEmpty(),
  ],
  (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, quantity } = req.body;
    const id = market.length + 1;

    market.push({ id, name, quantity });

    const isSaved = saveParent(market);

    if (isSaved) {
      return res.status(200).json({ message: "Sucesso" });
    }
    if (!isSaved) {
      return res.status(400).json({ erro: true, message: "Erro" });
    }
  }
);

marketRouter.delete(
  "/market-parent",
  [check("id", "O id deve ser informado").not().isEmpty()],
  (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.body;

    const newMarket = market.filter((item) => item.id !== id);

    const isSaved = saveParent(newMarket);

    if (isSaved) {
      return res.status(200).json({ message: "Sucesso" });
    }
    if (!isSaved) {
      return res.status(400).json({ erro: true, message: "Erro" });
    }
  }
);

export default marketRouter;
