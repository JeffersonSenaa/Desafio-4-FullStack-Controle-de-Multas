import { prisma } from "../prisma";
import { MultaCreateInput } from "../schemas/multa.schema";

export const createMulta = async (data: MultaCreateInput) => {
  return await prisma.multa.create({ data });
};

export const listMultas = async () => {
  return await prisma.multa.findMany({
    include: { Veiculo: true },
  });
};

export const findMultaById = async (Id_multa: number) => {
  return await prisma.multa.findUnique({
    where: { Id_multa },
    include: { Veiculo: true },
  });
};
