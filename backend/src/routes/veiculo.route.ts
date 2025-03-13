import { Router } from "express";
import { createVeiculo, listVeiculos, findVeiculoByPlaca } from "../business/veiculo.business";
import { VeiculoCreateSchema } from "../schemas/veiculo.schema";
import createHttpError from "http-errors";

const router = Router();

router.get("/", async (req, res) => {
  const veiculos = await listVeiculos();
  return res.status(200).json(veiculos);
});

router.get("/:Placa", async (req, res) => {
  const { Placa } = req.params;
  const veiculo = await findVeiculoByPlaca(Placa);
  if (!veiculo) throw createHttpError(404, "Veículo não encontrado");
  return res.status(200).json(veiculo);
});

router.post("/", async (req, res) => {
  const data = VeiculoCreateSchema.parse(req.body);
  const veiculo = await createVeiculo(data);
  return res.status(201).json(veiculo);
});

export default router;
