const app = Vue.createApp({
    data() {
        return {
            url: "http://googe.com/",
            books: [
                { id: 1, 
                    name: 'book_one', 
                    author: 'asik', 
                    image: 'img/01.jpg', 
                    isFav: true
                },
                { id: 1, 
                    name: 'book_one', 
                    author: 'asik', 
                    image: 'img/01.jpg', 
                    isFav: false
                },
                { id: 1, 
                    name: 'book_one', 
                    author: 'asik', 
                    image: 'img/01.jpg', 
                    isFav: true
                },
                
            ]
        }
    },
    methods: {
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },

    //Porgaca

    computed: {
        totalBooks() {
            return this.books.length;
        },

        favBooksCount() {
            let total = this.books.filter((book)=> book.isFav);
            return total.length;
        },

        favBooks() {
            return this.books.filter((book)=> book.isFav);
        }
    },
});

app.mount("#app");