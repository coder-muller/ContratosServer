-- CreateTable
CREATE TABLE "contratos" (
    "id" SERIAL NOT NULL,
    "chave" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "dataEmissao" TIMESTAMP(3),
    "id_programa" INTEGER NOT NULL,
    "numInsercoes" INTEGER,
    "valor" DECIMAL(10,2),
    "id_corretor" INTEGER,
    "comissao" DOUBLE PRECISION,
    "diaPagamento" INTEGER,
    "id_formaPagamento" INTEGER,
    "status" TEXT,
    "descritivo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contratos_pkey" PRIMARY KEY ("id")
);
