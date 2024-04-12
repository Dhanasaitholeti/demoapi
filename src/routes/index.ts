import { Application, Request, Response } from "express";
import employeeRoutes from "./employee.routes";
import overHeadRoutes from "./overhead.routes";
import billingRoutes from "./biling.routes";

export const RouteHandler = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("The server is working...");
  });
  app.use("/employee", employeeRoutes);
  app.use("/overhead", overHeadRoutes);
  app.use("/billing", billingRoutes);
};
