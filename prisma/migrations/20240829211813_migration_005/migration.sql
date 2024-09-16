-- CreateTable
CREATE TABLE "programacao" (
    "id" SERIAL NOT NULL,
    "chave" TEXT NOT NULL,
    "programa" TEXT,
    "horaInicio" TEXT,
    "horaFim" TEXT,
    "apresentador" TEXT,
    "diasApresentacao" TEXT,
    "valorPatrocinio" DECIMAL(10,2),
    "estilo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "programacao_pkey" PRIMARY KEY ("id")
);
