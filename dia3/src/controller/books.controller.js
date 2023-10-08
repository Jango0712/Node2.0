const express = require("express");
const app = express();
const Book = require('../models/book');

let books = [
    new Book("el principito", "aventuras", "Jan", 50, "foto", 1, 1),
    new Book("el nombre del viento","aventuras", "patrick", 20, "foto", 2, 0 ),
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
        modificar = books.find(book => book.id_book == req.body.id_book);
        console.log(modificar);
        if(modificar.id_book == req.query.id_book){
            modificar.title = req.body.title
            modificar.type = req.body.type
            modificar.author = req.body.author
            modificar.price = req.body.price
            modificar.photo = req.body.photo
            modificar.id_book = req.body.id_book
            modificar.id_user = req.body.id_user
            put = {error:false, codigo: 200, mensaje: "El libro se ha modificado correctamente", data:modificar}
        }else{
            respuesta = {error:true, codigo: 404, mensaje: "No se pudo modificar libro"}
        }
    }
}

const deletebooks = (req, res) =>{
    books= books.filter(book => book.id_book != req.query.id_book)
    res.send({error:false, codigo: 200, mensaje: "libro borrado"})
}

module.exports ={getbookid, getbooks, postbooks, putbooks, deletebooks}