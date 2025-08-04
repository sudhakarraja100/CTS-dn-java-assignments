import React from 'react';

const books = [
{ id: 1, title: 'Master React', price: 670, inStock: true },
{ id: 2, title: 'Deep Dive into Angular 11', price: 800, inStock: false },
{ id: 3, title: 'Mongo Essentials', price: 450, inStock: true },
{ id: 4, title: 'Node.js Basics', price: 550, inStock: true },
];

function BookItem({ book }) {
    return (
    <div>
        <div className="item-title">{book.title}</div>
        <div className="item-price">Price: <span className="price">${book.price}</span></div>
        <div className="item-status">
        {book.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
    </div>
);
}

function BookDetails({ showInStock }) {
const filteredBooks = showInStock
    ? books.filter(book => book.inStock)
    : books;

return (
    <div className="component-section">
        <h2>Book Details</h2>
    {filteredBooks.length > 0 ? (
        <div>
            {filteredBooks.map(book => (
            <BookItem key={book.id} book={book} />
            ))}
        </div>
        ) : (
        <p>No books available based on current filter.</p>
)}
    </div>
);
}

export default BookDetails;