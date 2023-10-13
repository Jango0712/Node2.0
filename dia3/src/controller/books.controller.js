const express = require("express");
const app = express();
const Book = require('../models/book');

let books = [
    new Book('El Principito', 'Aventuras', 'José Carlos', 99, 'https://m.media-amazon.com/images/I/81E-RNGwAIL._AC_UF1000,1000_QL80_.jpg', 99, 99),
    new Book('El Nombre del viento', 'Aventuras', 'Patrick Roffus', 120, 'https://i0.wp.com/saltodeeje.ideal.es/wp-content/uploads/2014/07/nombre-viento-portada.jpg?fit=650%2C366&ssl=1', 85, 85),
];

const getbookid = (req, res) =>{
    let getBook = books.find(book => book.id_book == req.query.id_book)
    console.log(getBook)

    if(getBook){ res.send({error: false, codigo: 200, mensaje: 'Libro encontrado', data: getBook})
} else {res.send({error: true, codigo: 404, mensaje: "Libro no encontrado"})}

}

const getbooks = (req,res) => {
    let answer;
    if(books){
        answer = {error: false, codigo: 200, mensaje: 'Libros encontrados', data: books}
    }else {
        answer = {error: true, codigo: 404, mensaje: 'Los libros no existen'}
    } 
    res.send(answer);
}

const postbooks = (req,res) => {
    let post;
    if(req.body){
   
        books.push(new Book (req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book, req.body.id_user));
        post= {error:false, codigo:200, mensaje:"Libro añadido correctamente", data: books}
    
    }else{
        post = {error:true, codigo:404, mensaje:"No se pudo añadir el libro"}
    }
    res.send(post);
}

const putbooks = (req, res) =>{
    let respuesta = '';
    let modificar;

    if(req.body.id_book){
        modificar = books.findIndex(book => book.id_book == req.body.id_book);
        if(modificar !== -1){
            books[modificar] = req.body;
            respuesta = {error:false, codigo: 200, mensaje: "El libro se ha modificado correctamente", data:req.body};
        }else{
            respuesta = {error:true, codigo: 404, mensaje: "No se pudo modificar libro"}
        }
        res.send(respuesta);
    }
}

const deletebooks = (req, res) =>{
    books= books.filter(book => book.id_book != req.body.id_book)
    res.send({error:false, codigo: 200, mensaje: "libro borrado"})
}

module.exports ={getbookid, getbooks, postbooks, putbooks, deletebooks}