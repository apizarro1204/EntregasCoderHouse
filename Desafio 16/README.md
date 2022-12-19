# Desafio 15
Se necesita Node para correr este programa

Instalación de dependencia
 - npm install

Iniciar el proyecto
 - npm start

comandos utilizados para métodos fork y cluster

pm2 start index.js --name="cluster" --watch -i 0 -- 8081

pm2 start index.js --name="fork1" --watch -- 8082

pm2 start index.js --name="fork2" --watch -- 8083

pm2 start index.js --name="fork3" --watch -- 8084

pm2 start index.js --name="fork4" --watch -- 8085
