import { Router } from "https://deno.land/x/oak/mod.ts";
import Controller from "../controllers/controller.ts";

const router = new Router();

router.get("/", Controller.getRootHandler);

export default router;