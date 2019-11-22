const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const {crear_archivo,listarTabla} = require('./operaciones/multiplica')


let comando = argv._[0];

switch (comando) {

    case 'listar' :
        console.log('Listar: '.blue)
        listarTabla(argv.base , argv.limite)
            .then(data => console.log(colors.green(data)))
            .catch(err => console.log(err))
        break;
    case 'crear' :
        console.log('Crear: '.blue)
        crear_archivo(argv.base , argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)} `))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no valido'.red)
}



