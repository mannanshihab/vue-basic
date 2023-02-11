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
    }
});

app.mount("#app");