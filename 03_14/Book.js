class Book {
    constructor(title, author, datePublished, chapters, version) {
        this.title = title;
        this.author = author;
        this.datePublished = datePublished;
        this.chapters = chapters;
        this.version = version;
    }
    bookAge() {
        let now = new Date();
        let published = new Date(this.datePublished);
        let age = now.getFullYear() - published.getFullYear();
        return age;
    }
}

export default Book;