import express from "express";
import dotenv from "dotenv-safe";
import helmet from "helmet";
import cors from "cors";
import "express-async-errors";

import { prisma } from "./prisma";

import { handleZodError } from "./middlewares/handleZodError.middleware";
import { handlePrismaError } from "./middlewares/handlePrismaError.middleware";
import { handleCommonError } from "./middlewares/handleCommonError.middleware";

import todoRoute from "./routes/todo.route";
import motoristaRoutes from "./routes/motorista.route";
import veiculoRoutes from "./routes/veiculo.route";
import multaRoutes from "./routes/multa.route";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

// Include your routes here
//app.use("/todo", todoRoute);
app.use("/motorista", motoristaRoutes);
app.use("/veiculo", veiculoRoutes);
app.use("/multa", multaRoutes);

app.use(handleZodError);
app.use(handlePrismaError);
app.use(handleCommonError);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, async () => {
  await prisma.$connect();
  console.log(`Server started on http://localhost:${PORT}`);
});
