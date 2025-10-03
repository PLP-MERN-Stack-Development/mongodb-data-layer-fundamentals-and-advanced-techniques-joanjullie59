# MongoDB Week 1 Assignment - PLP Academy

## 📚 Overview
This repository contains the Week 1 assignment for the PLP Academy Data Layer course, focusing on MongoDB fundamentals including CRUD operations, aggregation pipelines, and indexing.

## 📂 Files
- `insert_books.js` - Script to populate the database with 13 sample books
- `queries.js` - All MongoDB queries for Tasks 2-5
- `README.md` - This file

## 🚀 Quick Start

### 1. Setup MongoDB
Install MongoDB locally or create a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account.

### 2. Run the Scripts
```bash
# Start MongoDB Shell
mongosh

# Load and execute the insert script
load('insert_books.js')

# Load and execute all queries
load('queries.js')
```

## 📋 Assignment Tasks

### Task 1: MongoDB Setup ✅
- Created database: `plp_bookstore`
- Created collection: `books`

### Task 2: CRUD Operations ✅
- Insert 13 books with required fields
- Find books by genre, year, and author
- Update book prices
- Delete books by title

### Task 3: Advanced Queries ✅
- Complex filtering (in_stock AND published_year)
- Projection (return specific fields)
- Sorting (ascending/descending)
- Pagination with limit and skip

### Task 4: Aggregation Pipeline ✅
- Calculate average price by genre
- Find author with most books
- Group books by publication decade

### Task 5: Indexing ✅
- Single-field index on `title`
- Compound index on `author` and `published_year`
- Performance analysis using `explain()`

## 📖 Database Schema
```javascript
{
  title: String,
  author: String,
  genre: String,
  published_year: Number,
  price: Number,
  in_stock: Boolean,
  pages: Number,
  publisher: String
}
```

## 🔍 Sample Queries

**Find books by genre:**
```javascript
db.books.find({ genre: "Fiction" })
```

**Average price by genre:**
```javascript
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])
```

**Create index:**
```javascript
db.books.createIndex({ title: 1 })
```

## 📸 Screenshots
Screenshots are located in the `screenshots/` folder showing:
- Database and collection in MongoDB Compass
- Sample documents
- Index configuration

## 🛠️ Technologies
- MongoDB 6.0+
- MongoDB Shell (mongosh)
- MongoDB Compass (optional)

## 👨‍💻 Author
Joan Ouma- PLP Academy Student

## 📅 Submission
- Course: MongoDB Data Layer- Week 1
- Assignment Link:https://github.com/PLP-MERN-Stack-Development/plp-mern-stack-development-classroom-mongodb-data-layer-fundamentals-and-advanced-techniques-MERN-St
