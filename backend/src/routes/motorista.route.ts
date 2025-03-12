import { Router } from "express";
import { createMotorista, listMotoristas, findMotoristaByCPF } from "../business/motorista.business";
import { MotoristaCreateSchema } from "../schemas/motorista.schema";
import createHttpError from "http-errors";

const router = Router();

router.get("/", async (req, res) => {
  const motoristas = await listMotoristas();
  return res.status(200).json(motoristas);
});

router.get("/:CPF", async (req, res) => {
  const { CPF } = req.params;
  const motorista = await findMotoristaByCPF(CPF);
  if (!motorista) throw createHttpError(404, "Motorista não encontrado");
  return res.status(200).json(motorista);
});

router.post("/", async (req, res) => {
  const data = MotoristaCreateSchema.parse(req.body);
  const motorista = await createMotorista(data);
  return res.status(201).json(motorista);
});

export default router;
