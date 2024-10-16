/*
  Warnings:

  - Added the required column `dataVencimento` to the `contratos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contratos" ADD COLUMN     "dataVencimento" TIMESTAMP(3) NOT NULL;
