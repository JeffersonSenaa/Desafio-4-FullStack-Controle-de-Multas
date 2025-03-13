import { z } from "zod";

export const MultaCreateSchema = z.object({
  Valor: z.number().positive("Valor deve ser positivo"),
  Data: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data inválida",
  }),
  Vel_Maxima: z.number() || null,
  Tipo_Infracao: z.string().min(3, "Tipo de infração inválido"),
  Pontos_Penalidade: z.number().int().min(1).max(21, "Penalidade entre 1 e 7 pontos"),
  id_veiculo: z.string().length(7, "Placa do veículo deve ter 7 caracteres"),
});

export type MultaCreateInput = z.infer<typeof MultaCreateSchema>;
