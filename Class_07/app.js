const app = Vue.createApp({
    data() {
        return {
            books: [
                { id: 1, name: 'book_one', author: 'asik'},
                { id: 2, name: 'book_two', author: 'asik'},
                { id: 3, name: 'book_three', author: 'asik'},
                { id: 4, name: 'book_four', author: 'asik'},
            ]
        }
    }
});

app.mount("#app");