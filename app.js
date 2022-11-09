
//const { basename } = require('path');
//const { argv } = require('process');
//const { number } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/config-yargs');
const colors = require('colors');

console.clear();                     //Limpia la pantalla cada vez que ejecutas en consola

//console.log(process.argv);           Agrega los procesos, innecesarios

//console.log(argv);                   Muestra el array en consola, innecesario

//console.log('base: yargs', argv.base);

//const base = 3;                      La constante se importa de multiplicar.js

crearArchivo( argv.b, argv.l, argv.h )
    .then (monchitoArchivo => console.log(monchitoArchivo.rainbow, 'creada'))// el rainbow es para los colores en "tabla creada"
    .catch(err => console.log(err));    

    //Acordarse de no mandar el .catch ni .then como funcion (debe aparecer sola la opcion)

