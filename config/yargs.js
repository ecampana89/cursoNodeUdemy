const opts =
    {
        base: {
            demand: true,
            description: 'base para mulilicar ',
            alias: 'b'
        },
        limite: {
            description: 'hasta que numero se va a multilicar',
            alias: 'l',
            default: 10
        }
    }

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'graba en archivo la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}
