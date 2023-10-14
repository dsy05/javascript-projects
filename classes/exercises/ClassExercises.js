// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, isbn, numberPages, numberTimesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numberPages = numberPages;
        this.numberTimesCheckedOut = numberTimesCheckedOut;
        this.discarded = discarded;
    }
    checkout(uses = 1) {
        this.numberTimesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numberPages, numberTimesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numberPages, numberTimesCheckedOut, discarded);
    }
    dispose(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.discarded = 'yes';
        }
    }
}

class Novel extends Book{
    constructor(title, author, copyrightDate, isbn, numberPages, numberTimesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numberPages, numberTimesCheckedOut, discarded);
    }
    dispose() {
        if (this.numberTimesCheckedOut > 100) {
            this.discarded = 'yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let novel1 = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');
console.log(novel1);

let manual1 = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
console.log(manual1);

// Code exercises 4 & 5 here:
manual1.dispose(2023);
console.log(manual1);

novel1.checkout(5);
novel1.dispose();
console.log(novel1);

