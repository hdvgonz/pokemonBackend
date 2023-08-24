<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrollo

1. Clonar el repo
2. Ejecutar
```
npm install
```
3. Tener nest CLI instalado
```
npm install -g @nest/cli
```

4. Borrar carpeta Mongo y Levantar la BD
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrarle a __.env__

6. Llenar las variables de entorno definidad en el ```.env```

7. Ejecutar la aplicacion en dev:
```
npm run start:dev
```

8. Reconstruir la Base de Datos con la semilla
```
http://localhost:3000/api/v2/seed
```



## Stack Usado
*MongoDB
*Nest