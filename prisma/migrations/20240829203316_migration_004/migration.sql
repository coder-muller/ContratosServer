-- CreateTable
CREATE TABLE "formaPagamento" (
    "id" SERIAL NOT NULL,
    "chave" TEXT NOT NULL,
    "formaPagamento" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "formaPagamento_pkey" PRIMARY KEY ("id")
);
