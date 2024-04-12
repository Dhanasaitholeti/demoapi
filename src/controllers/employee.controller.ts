import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { getEmployees } from "../handlers/employee.handler";
import { IEmployee } from "../libs/types/employee.type";
import { generateResponse } from "../utils/generateResponse";

const prisma = new PrismaClient();

export const getAllEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const employees = await getEmployees();
  res.status(200).json(generateResponse(true, "Employeed List", employees));
  try {
  } catch (error) {
    next(error);
  }
};

export const getIndividualEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    const employees = await getEmployees(id);
    res.status(200).json(generateResponse(true, "Employeed List", employees));
  } catch (error) {
    next(error);
  }
};

export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const employeeData: Omit<IEmployee, "id" | "updatedAt" | "createdAt"> =
    req.body;
  try {
    const user = await prisma.employee.create({
      data: {
        name: employeeData.name,
        payable: employeeData.payable,
        salaryPerMonth: employeeData.salaryPerMonth,
      },
    });
    res.status(201).json(generateResponse(true, "New User Created", user));
  } catch (error) {
    next(error);
  }
};
