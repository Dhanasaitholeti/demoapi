import {
  addNewOverHead,
  listALlOverHead,
} from "../controllers/overhead.controller";
import { Router } from "express";

const overHeadRoutes = Router();

overHeadRoutes.get("/list", listALlOverHead);

overHeadRoutes.post("/add", addNewOverHead);

export default overHeadRoutes;
