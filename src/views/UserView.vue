<template>
    <div id="usuario">
        <ul>
            <li v-for="(user, index) in users" :key="index">{{user.nome}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: 'userView',
    data() {
        return {
            users: [{nome: 'Bárbara'}, {nome: 'Thomas'}]
        }
    },
    computed: {
        ...mapState(['token'])
    },
    methods: {
        atualizar() {
            axios.get('/usuario', {headers: {Authorization: this.token}})
            .then(response => {
                this.users = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    create() {
        this.atualizar();
    }
}
</script>
