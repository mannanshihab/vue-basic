const app = Vue.createApp({
    data() {
        return {
            title: 'this age is',
            age: 47,
        }
    },
    methods: {
        changeTitle(){
            this.title = 'change Title'
        }
    }
});

app.mount("#app");