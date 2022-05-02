const app = new Vue ({
    el: '#app',

    data: {
        mail: null,
        myMails: [],
        loading: true,
    },

    methods: {

    },
    created() {
        for (i = 0; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

                this.mail = response.data.response;
                this.myMails.push(this.mail);

            }).catch(function (error) {
                console.log(error);
            }).finally(() => this.loading = false)
        }
    }
})