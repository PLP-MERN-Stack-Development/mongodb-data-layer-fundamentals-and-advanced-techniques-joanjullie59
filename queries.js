db = db.getSiblingDB('plp_bookstore');

print("Find all books in genre 'Fiction':");
printjson(db.books.find({ genre: "Fiction" }).toArray());

print("Find books published after 2000:");
printjson(db.books.find({ published_year: { $gt: 2000 } }).toArray());

print("Find books by author 'Dan Brown':");
printjson(db.books.find({ author: "Dan Brown" }).toArray());

print("Update price of 'The Hobbit' to 18.99:");
printjson(db.books.updateOne({ title: "The Hobbit" }, { $set: { price: 18.99 } }));

print("Delete book titled 'Angels & Demons':");
printjson(db.books.deleteOne({ title: "Angels & Demons" }));

print("Find books in stock and published after 2010:");
printjson(db.books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

print("Projection: title, author, price:");
printjson(db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).toArray());

print("Sort books by price ascending:");
printjson(db.books.find().sort({ price: 1 }).toArray());

print("Sort books by price descending:");
printjson(db.books.find().sort({ price: -1 }).toArray());

print("Pagination page 1 (first 5 books):");
printjson(db.books.find().skip(0).limit(5).toArray());

print("Pagination page 2 (next 5 books):");
printjson(db.books.find().skip(5).limit(5).toArray());

print("Average price of books by genre:");
printjson(db.books.aggregate([
    { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]).toArray());

print("Author with most books:");
printjson(db.books.aggregate([
    { $group: { _id: "$author", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 }
]).toArray());

print("Books grouped by publication decade:");
printjson(db.books.aggregate([
    {
        $group: {
            _id: { $subtract: [ "$published_year", { $mod: [ "$published_year", 10 ] } ] },
            count: { $sum: 1 }
        }
    },
    { $sort: { _id: 1 } }
]).toArray());

print("Create index on title:");
printjson(db.books.createIndex({ title: 1 }));

print("Create compound index on author and published_year:");
printjson(db.books.createIndex({ author: 1, published_year: -1 }));

print("Explain query performance with index:");
printjson(db.books.find({ title: "The Hobbit" }).explain());
