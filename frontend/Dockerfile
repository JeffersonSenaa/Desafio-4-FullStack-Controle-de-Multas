#Imagem do Nold e build da aplicacao
FROM node:18 AS build

#Diretorio do conteiner
WORKDIR /frontend

#Copia dos arquivos de instalacao das dependencias
COPY package*.json ./

#Instalacao das dependencias
RUN npm install

#Copiar o codigo
COPY ../frontend .

#Compilacao do angular
RUN npm run build --prod

#Utilizando Nginx como servidor da aplicacao
FROM nginx:latest

#Copia dos arquivos compilados
#Modelo do comando:   COPY --from=build /frontend /usr/share/nginx/html

#Porta utilizada
EXPOSE 80

#Rodar Nginx
CMD ["nginx", "-g", "daemon off;"]
