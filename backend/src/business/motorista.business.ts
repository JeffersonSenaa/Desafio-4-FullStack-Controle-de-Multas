import { prisma } from "../prisma";
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

export const consultarPontuacaoMotorista = async () => {
  const motoristas = await prisma.motorista.findMany({
    include: {
      Veiculo: {
        include: {
          Multa: true, // Inclui as multas do veículo do motorista
        },
      },
    },
  });

  const motoristasPenalizados = motoristas
    .map((motorista) => {
      const totalPontos =
        motorista.Veiculo?.Multa.reduce((acc, multa) => acc + multa.Pontos_Penalidade, 0) || 0;

      return {
        motorista: motorista.Nome,
        pontos: totalPontos,
      };
    })
    .filter((m) => m.pontos >= 10); // Filtra apenas motoristas com 10 ou mais pontos

  return motoristasPenalizados;
};
