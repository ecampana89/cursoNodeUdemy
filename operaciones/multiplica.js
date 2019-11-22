//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla =  (base , limite = 10) =>{
    return new Promise((resolve, rejec) => {
        if (!Number(base)) {
            rejec(`El valor introducido no es un numero: ${base}`)
            return;
        }

        if (!Number(limite)) {
            rejec(`El valor introducido no es un numero: ${limite}`)
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        resolve(data);
    })
}


let crear_archivo = (base , limite) => {
    return new Promise((resolve, rejec) => {

        if(!Number(base)){
            rejec(`El valor introducido no es un numero: ${ base }`)
            return;
        }

        if (!Number(limite)) {
            rejec(`El valor introducido no es un numero: ${limite}`)
            return;
        }
        let file_name = `tabla-${base}-al ${ limite }.txt`;

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        let path = 'tablas/' + file_name;

        fs.writeFile(path, data, (err) => {

            if (err) rejec( err );
            else
            resolve(file_name)
        })

    });
}

module.exports = {
    crear_archivo,
    listarTabla
}



