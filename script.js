
const app = Vue.createApp ({
    data() {
        return{
            randomEmail: [

            ]

        }
    },
    methods: {
        getRandomEmail(){
            for (i = 0; i <= 10; i++ ) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(serverResponse => this.randomEmail.push() = serverResponse.data.response);
            console.log (this.randomEmail);
            };
        },
    },
    created() {
        this.getRandomEmail();
    }
});

app.mount('#app');

