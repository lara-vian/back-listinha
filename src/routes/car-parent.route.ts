import express, { Router } from "express";
import { check, validationResult } from "express-validator";
import car from "../data/car/data-parent.json";
import { saveParent } from "../services/save-market.service";
const carRouter = Router();

carRouter.get(
  "/car-parent",
  (req: express.Request, res: express.Response) => {
    res.json(car);
  }
);

carRouter.post(
  "/car-parent",
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
    const price = req.body.price || 0;
    const id = car.length + 1;

    car.push({ id, name, quantity, price });

    const isSaved = saveParent(car);

    if (isSaved) {
      return res.status(200).json({ message: "Sucesso" });
    }
    if (!isSaved) {
      return res.status(400).json({ erro: true, message: "Erro" });
    }
  }
);

carRouter.delete(
  "/car-parent",
  [check("id", "O id deve ser informado").not().isEmpty()],
  (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.body;

    const newMarket = car.filter((item) => item.id !== id);

    const isSaved = saveParent(newMarket);

    if (isSaved) {
      return res.status(200).json({ message: "Sucesso" });
    }
    if (!isSaved) {
      return res.status(400).json({ erro: true, message: "Erro" });
    }
  }
);

export default carRouter;
