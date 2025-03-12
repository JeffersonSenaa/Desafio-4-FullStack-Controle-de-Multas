import { z } from "zod";

export const VeiculoCreateSchema = z.object({
  Placa: z.string().length(7, "Placa deve ter 7 caracteres") || null,
  Marca: z.string().min(2, "Marca deve ter pelo menos 2 caracteres"),
  Modelo: z.string().min(2, "Modelo deve ter pelo menos 2 caracteres"),
  Ano: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data inválida",
  }),
  Cor: z.string() || null,
  CPF_proprietario: z.string().length(11, "CPF deve ter 11 dígitos"),
});

export type VeiculoCreateInput = z.infer<typeof VeiculoCreateSchema>;
