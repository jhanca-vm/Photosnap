import { DATA_TYPES, Model } from "../deps.ts";
import db from "../db.ts";

export default class Plan extends Model {
  static table = "plans";

  static fields = {
    id: {
      type: DATA_TYPES.INTEGER,
      primaryKey: true,
    },
    item: DATA_TYPES.STRING,
    basic: DATA_TYPES.STRING,
    pro: DATA_TYPES.STRING,
    business: DATA_TYPES.STRING,
  };
}

db.link([Plan]);

await db.sync();
