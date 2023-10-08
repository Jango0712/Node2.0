    //RETO2

   

    const { readFile } = require("fs");
let fs = require ("fs/promises");

    // let objeto = {
    //     name: "Jan",
    //     surname: "Jose",
    //     age: "22"
    // }

     //then/catch
    
    // fs.writeFile("objeto.json", JSON.stringify(objeto))
    // .then( () => {
    //     return fs.readFile('objeto.json', 'utf8')
    // })
    // .then( (data) => {
    //     console.log(JSON.parse(data))
    // })

    // .catch(err => 
    //     console.log(err))

    //async/await

    // async function asyncAwait(){

    //     await fs.writeFile('objeto.json', JSON.stringify(objeto))

    //     const nuevo = await fs.readFile('objeto.json', 'utf8')

    //     console.log(JSON.parse(nuevo))
    // }

    // asyncAwait()


        
    
        //RETO 3

         //then/catch

       let readline = require('readline');

    
        let objeto ={
            name: '',
            surname: '',
            age: []
        }
    
    function pregunta(pregunta) {
        const question = new Promise((resolve, reject) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question(pregunta,(respuesta) =>{
                resolve(respuesta);
                rl.close();
            });
        });
        return question
    }
 
    // pregunta('Nombre')
    // .then(name =>{
    //    objeto.name = name;
    //     return pregunta('Apellido')
    // })
    // .then(surname => {
    //    objeto.surname = surname;
    //     return pregunta('Edad')
    // })
    // .then(age => {
    //    objeto.age = age;
    // })
    // .then(()=>{
    //     return fs.writeFile('objeto.json', JSON.stringify(objeto))
        
    // })
    // .then(()=>{
    //     return fs.readFile('objeto.json','utf8')
    //     })
    //     .then( data => {
    //     console.log(JSON.parse(data))
    //     })
    //     .catch(err => {
    //     console.log(err);
    //     });

         //async/await

         async function asyncAwait(){

    try{
       
        objeto.name= await pregunta('Nombre');
       
        objeto.surname= await pregunta('Apellido');
        
        objeto.age= await pregunta('Edad');
        

        await fs.writeFile('objeto.json', JSON.stringify(objeto))

        const nuevo = await fs.readFile('objeto.json', 'utf8')

        console.log(JSON.parse(nuevo))
    }

    catch(err){
    console.log(err);
    }}

    asyncAwait()
    
  