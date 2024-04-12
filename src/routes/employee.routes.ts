import {
  createEmployee,
  getAllEmployees,
  getIndividualEmployee,
} from "../controllers/employee.controller";
import { Router } from "express";

const employeeRoutes = Router();

employeeRoutes.get("/", getAllEmployees);

employeeRoutes.get("/:id", getIndividualEmployee);

employeeRoutes.post("/", createEmployee);

export default employeeRoutes;
