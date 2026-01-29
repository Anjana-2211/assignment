/*
  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/


class Book{
    title;
    author;
    pages;
    isAvailable=true;
    Borrow(){
        this.isAvailable=false;
    }
    returnBook(){
        this.isAvailable=true;
    }
    getInfo(){
        console.log(`${this.title} by ${this.author} (${this.pages} pages)`)
    }
    isLongBook(){
        console.log(this.pages>300?true:false);
    }
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
}
let b1=new Book("a","author1",250);
let b2=new Book("b","author2",350);
let b3=new Book("c","author3",150);
let b4=new Book("d","author4",450);
let b5=new Book("e","author5",200);
b1.getInfo();
b2.getInfo();   
b3.getInfo();
b4.getInfo();
b5.getInfo();
b1.Borrow();
console.log(b1.isAvailable);
b2.Borrow();
console.log(b2.isAvailable);
b1.returnBook();
console.log(b1.isAvailable);
//count lng books
let books=[b1,b2,b3,b4,b5];
let longBookCount=0;
for(let book of books){
    if(book.pages>300){
        longBookCount++;
    }
}
console.log(longBookCount)
let availablebook=books.filter(book=>book.isAvailable==true);
console.log(availablebook);
