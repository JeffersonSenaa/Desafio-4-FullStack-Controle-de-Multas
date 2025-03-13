import { prisma } from "../prisma";
import { VeiculoCreateInput } from "../schemas/veiculo.schema";

export const createVeiculo = async (data: VeiculoCreateInput) => {
  return await prisma.veiculo.create({ data });
};

export const listVeiculos = async () => {
  return await prisma.veiculo.findMany({
    include: { Motorista: true, Multa: true },
  });
};

export const findVeiculoByPlaca = async (Placa: string) => {
  return await prisma.veiculo.findUnique({
    where: { Placa },
    include: { Motorista: true, Multa: true },
  });
};
