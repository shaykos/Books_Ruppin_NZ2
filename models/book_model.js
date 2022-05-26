class BookModel {
    name;
    author;
    publisher;
    year;
    price;
    createdAt;
    isActive;

    constructor(name, author,publisher,year,price){
        this.name=name;
        this.author=author;
        this.publisher = publisher;
        this.price = price;
        this.year = year;
        this.createdAt = Date.now();
        this.isActive = true;

    }
}

module.exports = BookModel;