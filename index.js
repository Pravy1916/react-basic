import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";

const Books =[
{
    id:1,
    
    img:"https://m.media-amazon.com/images/I/512c4l+AUrS._SX460_BO1,204,203,200_.jpg",
    title: "Treasure Island ",
    author: "Robert Louis Stevenson "
},
{
    id:2,
    img:"https://m.media-amazon.com/images/I/51KSK8Jm95L._SX460_BO1,204,203,200_.jpg",
    title: "Ghosts of The Silent Hills",
    author: "Anita Krishan "
},
{
    id:3,
    img:"https://m.media-amazon.com/images/I/51LskPhMyWL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett"
},
{
    id:4,
    img:"https://m.media-amazon.com/images/I/41MwnqF77XS._SX460_BO1,204,203,200_.jpg",
    title: "Dracula ",
    author: " Bram Stoker"
},
{
    id:5,
    img:"https://m.media-amazon.com/images/I/51OhYHwji3S._SX460_BO1,204,203,200_.jpg",
    title: "The Canterville Ghost ",
    author: "oscar wilde "
},
{
    id:6,
    img:"https://m.media-amazon.com/images/I/515myHzaTpL._SX348_BO1,204,203,200_.jpg",
    title: "Illustrated Classics",
    author: " Wonder House Books"
},
];

function  Booklist(){
    return(
        <section className="booklist">
            {Books.map( (book)=>{
                return <Book  key={book.id} book={book} />
            })}
        </section>
    );
};

const Book=(props)=>{
    const{img,title,author}=props.book;
    const click=(e)=>{
        console.log(e);
        alert("happy shoping");
    }

    return(
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={click}>order</button>
            
        </article>
        
        );
};

ReactDOM.render(<Booklist/>,document.getElementById("root"));
