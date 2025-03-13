import { Router } from "express";
import { createMulta, listMultas, findMultaById } from "../business/multa.business";
import { MultaCreateSchema } from "../schemas/multa.schema";
import createHttpError from "http-errors";

const router = Router();

router.get("/", async (req, res) => {
  const multas = await listMultas();
  return res.status(200).json(multas);
});

router.get("/:Id_multa", async (req, res) => {
  const { Id_multa } = req.params;
  const multa = await findMultaById(parseInt(Id_multa));
  if (!multa) throw createHttpError(404, "Multa não encontrada");
  return res.status(200).json(multa);
});

router.post("/", async (req, res) => {
  const data = MultaCreateSchema.parse(req.body);
  const multa = await createMulta(data);
  return res.status(201).json(multa);
});

export default router;
