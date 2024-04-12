-- CreateEnum
CREATE TYPE "Occurences" AS ENUM ('monthly', 'yearly');

-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "payable" BOOLEAN NOT NULL,
    "salaryPerMonth" INTEGER NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "overhead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "occurence" "Occurences" NOT NULL,

    CONSTRAINT "overhead_pkey" PRIMARY KEY ("id")
);
