import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getEmployees = async (id?: string) => {
  if (id)
    return await prisma.employee.findUnique({
      where: {
        id,
      },
    });
  else return await prisma.employee.findMany();
};
