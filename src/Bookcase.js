import React from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';

class Bookcase extends React.Component {

    static bookshelves = [
        {
            title: 'Currently reading',
            name: 'currentlyReading'
        },
        {
            title: 'Want to read',
            name: 'wantToRead'
        },
        {
            title: 'Read',
            name: 'read'
        }
    ];

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Bookcase.bookshelves.map((bookshelf) => (
                            <Bookshelf title={bookshelf.title} key={bookshelf.name} name={bookshelf.name} />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    };
}

export default Bookcase;
