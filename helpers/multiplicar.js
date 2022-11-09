
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{

    try{
       
        let mostrar = '';
        let consola = '';  // Explicado mas abajo, casi innecesario

        for( let i = 1; i <= hasta; i++ ){
        
            mostrar += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;    
        // La consola y el mostrar es casi lo mismo, solo hago el mostrar para que salga por fs 
        // (y la consola por el console.log de abajo) y no tire un error en tabla-7.txt

        }
        if( listar ){

            console.log('================='.red );
            console.log(`TABLA DEL: ${base}`.green);
            console.log('================='.red );
            console.log(consola);

        }
      
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, mostrar);
    
        return (`Tabla del ${base}.txt `);
    
    }catch (err){

        throw err;
    }
        
        

    }
       
   

module.exports = {crearArchivo}