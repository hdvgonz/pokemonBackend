/* eslint-disable prettier/prettier */
/**
 * Mapeo De Variables De Entorno
 */
export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev', //Variable de entorno que nos va a decir si estamos en desarrollo o produccion o testing
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7

});

//Esto es lo mismo que tengo arriba
// const envfb = () => {
//     return {

//     }
// }