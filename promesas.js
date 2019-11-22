let empleados = [{
    id: 1,
    nombre: 'Pablo'
}, {
    id: 2,
    nombre: 'Melisa'
}, {
    id: 3,
    nombre: 'Juan'
}];


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

 let getEmpleado = (id) => {
     return new Promise((resolve,rejec) => {
         let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB){
            rejec(`No existe un empleado con el ID ${ id }`)
        }else{
            resolve(empleadoDB)
        }
     })
 }


 let getSalario = (empleado) => {

     return new Promise((resolve,rejec) => {
         let salarioDB = salarios.find(salario => salario.id === empleado.id)

         if(!salarioDB){
             rejec(`No se encontro un salario para el empleado ${ empleado.nombre }` )
         }else{
             resolve({
                 nombre: empleado.nombre,
                 salario: salarioDB.salario,
                 id: empleado.id
             })
         }
     })
 }


 getEmpleado(10).then(empleado => {
     getSalario(empleado).then(resp => {
         console.log(`El salario de ${ resp.nombre } es de ${ resp.salario}$`)
     }, (err) => {
         console.log(err)
     })
 }, (err) => {
     console.log(err)
 })

//EN CADENA
getEmpleado(10).then(empleado => {

   return  getSalario(empleado)

})
    .then(resp => {  console.log(`El salario de ${ resp.nombre } es de ${ resp.salario}$`)
})
    .catch( err => { console.log(err)})
