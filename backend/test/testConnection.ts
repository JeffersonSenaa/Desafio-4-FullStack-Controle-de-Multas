import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    // Tenta conectar ao banco de dados
    await prisma.$connect();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } finally {
    // Fecha a conexão
    await prisma.$disconnect();
  }
}

testConnection();
