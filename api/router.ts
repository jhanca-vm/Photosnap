import { Router } from "./deps.ts";
import { getStories } from "./controllers/stories.ts";
import { getPlans } from "./controllers/plans.ts";
import { getFeatures } from "./controllers/features.ts";

const router = new Router();

router.get("/stories", getStories);

router.get("/plans", getPlans);

router.get("/features", getFeatures);

export default router;
