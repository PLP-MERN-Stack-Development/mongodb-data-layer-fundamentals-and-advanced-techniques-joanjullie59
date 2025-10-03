// insert_books.js
// Script to insert sample books into MongoDB plp_bookstore database

// Connect to the database (if running in mongosh, the connection is already established)
// use plp_bookstore

db = db.getSiblingDB('plp_bookstore');

// Sample books data
if (typeof books === 'undefined') {
    var books = [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Fiction",
            published_year: 1925,
            price: 12.99,
            in_stock: true,
            pages: 180,
            publisher: "Scribner"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            published_year: 1960,
            price: 14.99,
            in_stock: true,
            pages: 324,
            publisher: "J.B. Lippincott & Co."
        },
        {
            title: "1984",
            author: "George Orwell",
            genre: "Science Fiction",
            published_year: 1949,
            price: 13.99,
            in_stock: false,
            pages: 328,
            publisher: "Secker & Warburg"
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            genre: "Fiction",
            published_year: 1951,
            price: 11.99,
            in_stock: true,
            pages: 277,
            publisher: "Little, Brown and Company"
        },
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            genre: "Fantasy",
            published_year: 1997,
            price: 19.99,
            in_stock: true,
            pages: 223,
            publisher: "Bloomsbury"
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            published_year: 1937,
            price: 15.99,
            in_stock: true,
            pages: 310,
            publisher: "George Allen & Unwin"
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            published_year: 1954,
            price: 29.99,
            in_stock: false,
            pages: 1178,
            publisher: "George Allen & Unwin"
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            genre: "Romance",
            published_year: 1813,
            price: 9.99,
            in_stock: true,
            pages: 432,
            publisher: "T. Egerton"
        },
        {
            title: "The Da Vinci Code",
            author: "Dan Brown",
            genre: "Mystery",
            published_year: 2003,
            price: 16.99,
            in_stock: true,
            pages: 689,
            publisher: "Doubleday"
        },
        {
            title: "The Hunger Games",
            author: "Suzanne Collins",
            genre: "Science Fiction",
            published_year: 2008,
            price: 14.99,
            in_stock: true,
            pages: 374,
            publisher: "Scholastic Press"
        },
        {
            title: "Angels & Demons",
            author: "Dan Brown",
            genre: "Mystery",
            published_year: 2000,
            price: 15.99,
            in_stock: false,
            pages: 736,
            publisher: "Pocket Books"
        },
        {
            title: "Becoming",
            author: "Michelle Obama",
            genre: "Biography",
            published_year: 2018,
            price: 22.99,
            in_stock: true,
            pages: 448,
            publisher: "Crown Publishing"
        }
    ];
}

// Insert the books into the collection
db.books.insertMany(books);

print("Successfully inserted " + books.length + " books into the plp_bookstore.books collection!");
print("\nVerifying insertion:");
print("Total books in collection: " + db.books.countDocuments());
