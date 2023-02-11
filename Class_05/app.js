const app = Vue.createApp({
    data() {
        return {
            title: 'This Age is',
            age: 47,
            show: true,
        }
    },
    methods: {
        changeTitle(){
            this.title = 'change Title'
        },
        toggleShow(){
            this.show = !this.show
        }
    }
});

app.mount("#app");