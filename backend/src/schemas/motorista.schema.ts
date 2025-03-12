import { z } from "zod";

export const MotoristaCreateSchema = z.object({
  CPF: z.string().length(11, "CPF deve ter 11 dígitos"),
  Nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  Vencimento_CNH: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data inválida",
  }),
  CNH: z.string().length(11, "CNH deve ter 11 dígitos"),
  placa_veiculo: z.string().length(7, "Placa deve ter 7 caracteres").optional(),
});

export type MotoristaCreateInput = z.infer<typeof MotoristaCreateSchema>;
