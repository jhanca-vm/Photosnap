import { RouterContext } from "../deps.ts";
import Features from "../models/Feature.ts";

export const getFeatures = async (ctx: RouterContext) => {
  const features = await Features.all();

  ctx.response.body = features;
};
