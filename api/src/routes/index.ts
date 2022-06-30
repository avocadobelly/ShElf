import { Router } from "express";
import { getGroceries, addGrocery } from "../controllers/groceries";

const router: Router = Router();

router.get("/", getGroceries);

router.post("/add-grocery", addGrocery);

export default router;