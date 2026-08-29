const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(this.read == true) {
            let sentence = this.title + " by " + this.author + ", " + this.pages + " has been read";
            return sentence;
        }

        else {
            let sentence = this.title + " by " + this.author + ", " + this.pages + " not read yet";
            return sentence;
        }
    }
}

function addBookToLibrary() {
    
}