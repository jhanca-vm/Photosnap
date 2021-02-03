import { RouterContext } from "../deps.ts";
import Storie from "../models/Storie.ts";

export const getStories = async (ctx: RouterContext) => {
  const stories = await Storie.all();

  ctx.response.body = stories;
};
