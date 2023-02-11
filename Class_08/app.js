const app = Vue.createApp({
    data() {
        return {
            url: "http://googe.com/",
            books: [
                { id: 1, name: 'book_one', author: 'asik', image: 'img/01.jpg'},
                { id: 2, name: 'book_two', author: 'asik' , image: 'img/01.jpg'},
                { id: 3, name: 'book_three', author: 'asik' , image: 'img/01.jpg'},
                { id: 4, name: 'book_four', author: 'asik' , image: 'img/01.jpg'},
            ]
        }
    }
});

app.mount("#app");