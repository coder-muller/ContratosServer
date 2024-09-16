/*
  Warnings:

  - Added the required column `id_programa` to the `faturamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "faturamento" ADD COLUMN     "id_programa" INTEGER NOT NULL;
