import { prisma } from "../prismaClient";
import { MotoristaCreateInput } from "../schemas/motorista.schema";

export const createMotorista = async (data: MotoristaCreateInput) => {
  return await prisma.motorista.create({ data });
};

export const listMotoristas = async () => {
  return await prisma.motorista.findMany({
    include: { Veiculo: true }, // Traz o veículo associado
  });
};

export const findMotoristaByCPF = async (CPF: string) => {
  return await prisma.motorista.findUnique({ where: { CPF }, include: { Veiculo: true } });
};
