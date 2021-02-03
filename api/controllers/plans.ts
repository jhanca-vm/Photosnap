import { RouterContext } from "../deps.ts";
import Plan from "../models/Plan.ts";

export const getPlans = async (ctx: RouterContext) => {
  const plans = await Plan.all();

  ctx.response.body = plans;
};
