import fs from "fs";
import path from "path";
import { ICar } from "../@types/interfaces";

export function saveParent(data: ICar[]) {
  try {
    const filePath = path.join(
      __dirname,
      "..",
      "data",
      "car",
      "data-parent.json"
    );
    fs.writeFileSync(filePath, JSON.stringify(data));

    return true;
  } catch (error) {
    return false;
  }
}
