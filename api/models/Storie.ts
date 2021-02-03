import { DATA_TYPES, Model } from "../deps.ts";
import db from "../db.ts";

export default class Storie extends Model {
  static table = "stories";

  static fields = {
    id: {
      type: DATA_TYPES.INTEGER,
      primaryKey: true,
    },
    title: DATA_TYPES.STRING,
    author: DATA_TYPES.STRING,
    createdAt: DATA_TYPES.STRING,
    imgMobile: DATA_TYPES.STRING,
    imgDesktop: DATA_TYPES.STRING,
  };
}

db.link([Storie]);

await db.sync();
