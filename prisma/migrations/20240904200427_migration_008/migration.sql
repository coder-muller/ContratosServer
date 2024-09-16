-- CreateTable
CREATE TABLE "faturamento" (
    "id" SERIAL NOT NULL,
    "chave" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_contrato" INTEGER NOT NULL,
    "dataEmissao" TIMESTAMP(3),
    "dataVencimento" TIMESTAMP(3),
    "dataPagamento" TIMESTAMP(3),
    "valor" DECIMAL(10,2),
    "id_formaPagamento" INTEGER,
    "descritivo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "faturamento_pkey" PRIMARY KEY ("id")
);
