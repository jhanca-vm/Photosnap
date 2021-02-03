import { DATA_TYPES, Model } from "../deps.ts";
import db from "../db.ts";

export default class Feature extends Model {
  static table = "features";

  static fields = {
    id: {
      type: DATA_TYPES.INTEGER,
      primaryKey: true,
    },
    name: DATA_TYPES.STRING,
    description: DATA_TYPES.STRING,
    img: DATA_TYPES.STRING,
  };
}

db.link([Feature]);

await db.sync();
