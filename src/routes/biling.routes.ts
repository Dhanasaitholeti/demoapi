import { employeeBilling } from "../controllers/billing.controller";
import { Router } from "express";

const billingRoutes = Router();

billingRoutes.get("/:id", employeeBilling);

export default billingRoutes;
