<template>
    <div id="login">
        <p>Seja bem-vindo ao meu primeiro app Vue.js! Identifique-se!</p>

        <p>Username: <input type="text" v-model="nome"/></p>
        <p>Senha: <input type="password" v-model="senha"/></p>

        <button @click="doLogin">Ok</button>

        <p>{{status}}</p>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapMutations } from 'vuex';

    export default {
        name: "loginView",
        data() {
            return {
                nome: '',
                senha: '',
                status: ''
            }
        },
        methods: {
            ...mapMutations(['setToken']),
            doLogin() {
                axios.post('login', {username: this.nome, password: this.senha})
                .then((response) => {
                    console.log(response);
                    this.status = response.data.token;
                    this.setToken(response.data.token);
                })
                .catch((error) => {
                    console.log(error)
                });
            }
        }
    }
</script>