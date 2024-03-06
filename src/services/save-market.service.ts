import fs from "fs";
import path from "path";
import { IMarket } from "../@types/interfaces";

export function saveParent(data: IMarket[]) {
  try {
    const filePath = path.join(
      __dirname,
      "..",
      "data",
      "market",
      "data-parent.json"
    );
    fs.writeFileSync(filePath, JSON.stringify(data));

    return true;
  } catch (error) {
    return false;
  }
}
