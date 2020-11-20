import React from "react"


function Results(props) {
    const books = props.books;

    return (
        <div>
            {books.map(book => (
                <div className="bookOutputComponent">
                    <div className="bookTitle">
                        <h2>{book.volumeInfo.title}</h2>
                    </div>
                    <div className="bookInfoWrapper">
                        <div className="bookImg">
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="{book.volumeInfo.title}"></img>
                        </div>
                        <div className="bookInfo">
                        <p> Author : {book.volumeInfo.authors} </p>
                        <p> Price: {book.saleInfo.listPrice?.amount} </p>
                        <p> Description: {book.volumeInfo.description}</p>
                        <a href={book.volumeInfo.canonicalVolumeLink} target="_new">link text</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    
    )
}

export default Results