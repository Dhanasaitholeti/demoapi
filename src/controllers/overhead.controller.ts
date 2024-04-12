import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { IOverhead } from "../libs/types/overhead.type";
import { generateResponse } from "../utils/generateResponse";

const prisma = new PrismaClient();

export const addNewOverHead = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const overheadData: Omit<IOverhead, "id" | "updatedAt" | "createdAt"> =
    req.body;
  try {
    const newOverHead = await prisma.overhead.create({
      data: {
        amount: overheadData.amount,
        name: overheadData.name,
        occurence: overheadData.occurence,
      },
    });
    res
      .status(201)
      .json(generateResponse(true, "Got the list of Overheads", newOverHead));
  } catch (error) {
    next(error);
  }
};

export const listALlOverHead = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const overheads = await prisma.overhead.findMany();
    res
      .status(200)
      .json(generateResponse(true, "Got the list of Overheads", overheads));
  } catch (error) {
    next(error);
  }
};
