import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

import { getEmployees } from "../handlers/employee.handler";
import { generateResponse } from "../utils/generateResponse";
import { IEmployee } from "../libs/types/employee.type";
import { IOverhead } from "../libs/types/overhead.type";

const prisma = new PrismaClient();

export const employeeBilling = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const employee = (await getEmployees(id)) as unknown as IEmployee;

    const billableEmployees = await prisma.employee.findMany({
      where: {
        payable: true,
      },
    });

    const unbillableEmployees = (await prisma.employee.findMany({
      where: {
        payable: false,
      },
    })) as unknown as IEmployee[];

    const unbillableEmployeedSalariesTotal = unbillableEmployees.reduce(
      (acc, employee) => acc + employee.salaryPerMonth,
      0,
    );

    const overHeadsAmounts =
      (await prisma.overhead.findMany()) as unknown as IOverhead[];

    const overheadSum = overHeadsAmounts.reduce((acc, overhead) => {
      const monthlyAmount =
        overhead.occurence === "yearly"
          ? overhead.amount / 12
          : overhead.amount;
      return acc + monthlyAmount;
    }, 0);

    const totalCost =
      (employee.salaryPerMonth +
        (overheadSum + unbillableEmployeedSalariesTotal)) /
      billableEmployees.length;

    const totalCostWithGST = totalCost + totalCost * 0.18;

    const cashFlowPerMonth = totalCost - totalCost * 0.1;

    res.status(200).json(
      generateResponse(true, "employee per month salary", {
        totalCost,
        totalCostWithGST,
        cashFlowPerMonth,
      }),
    );
  } catch (error) {
    next(error);
  }
};
