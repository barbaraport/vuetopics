<template>
    <div id="usuario">
        <p v-if="autorizacao === 'ROLE_ADMIN'">{{autorizacao}}</p>
        <p>Nome: <input type="text" v-model="nome"> <button @click="atualizar"> Ok</button></p>
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
            nome: '',
            users: [{}]
        }
    },
    computed: {
        ...mapState(['autorizacao'])
    },
    methods: {
        atualizar() {
            let url = 'usuario';
            if (this.nome) {
                url = 'usuario/nome/' + this.nome;
            }
            axios.get(encodeURI(url), {headers: {Authorization: this.token}})
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
