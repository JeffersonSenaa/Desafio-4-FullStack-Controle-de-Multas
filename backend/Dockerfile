#Imagem do Node
FROM node:18

#Diretorio do conteiner
WORKDIR /backend

#Copiar arquivos de configuracao
COPY package*.json ./

#Instala dependencias
RUN npm install

#Cogido restante
COPY . .

#Porta de Execucao
EXPOSE 3000

#Roda aplicacao
CMD ["run", "start"]
