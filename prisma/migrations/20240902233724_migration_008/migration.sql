/*
  Warnings:

  - You are about to drop the column `diaPagamento` on the `contratos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contratos" DROP COLUMN "diaPagamento",
ADD COLUMN     "diaVencimento" INTEGER;
