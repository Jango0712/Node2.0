//RETO 1
// console.log("mensaje 1")

// setTimeout(() => {
//         console.log("mensaje 2")
//         console.log("mensaje 3")
//     }, 3000);


    //RETO2

let fs = require ("fs");

// let objeto = {
//     name: "Jan",
//     surname: "Jose",
//     age: "22"
// }

// fs.writeFile("objeto.json", JSON.stringify(objeto), (err)=>{
//     if(err){
//         console.log(err)}
//         else{
//             console.log("objeto creado")
//         }
//     })

//     fs.readFile("objeto.json", "utf-8",(err,contenido) => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log(contenido)
//         }
//     })

    //RETO 3

    let objeto ={
        name: '',
        surname: '',
        age: []
    }


    let readline = require('readline');

let rl = readline.createInterface(
    process.stdin, process.stdout);


rl.question('Nombre', (name) => {    
    objeto.name = name;
    rl.question('Apellido', (surname) => {
        objeto.surname = surname;
         rl.question('Edad', (age) => {
            objeto.age = age;
            rl.close();
            fs.writeFile("objeto.json", JSON.stringify(objeto), (err) => {
                if(err){
                    console.log(err)}

                else(fs.readFile("objeto.json", "utf-8", (err, objeto) => {
                    if(err){
                        console.log(err)}
                    else(console.log(JSON.parse(objeto)));
                }))


            })
        })
    })
})