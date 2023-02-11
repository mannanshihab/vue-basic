const app = Vue.createApp({
    data() {
        return {
            x : 0,
            y : 0,
        }
    },
    methods: {
        handleMouse(){
            console.log('mouse.event')
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

app.mount("#app");