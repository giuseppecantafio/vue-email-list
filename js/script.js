const app = new Vue ({
    el: '#app',

    data: {
        myMails: [],
        loading: true,
    },

    methods: {

    },
    created() {
        
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>{
        for (i=0; i<=10; i++){
            this.myMails.push(response.data.response);
        }
    }).catch(function (error) {
        console.log(error);
    }).finally(() => this.loading = false)
    }
    })