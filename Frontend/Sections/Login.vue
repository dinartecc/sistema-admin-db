
<template>
    <div class="flex justify-center flex-col" id="contenedor" v-if="!terminado">
        <loading :active.sync="cargando" 
        :is-full-page="true"></loading>

               <div class="mensaje-rojo" v-show="incorrecto == true">
            Credenciales incorrectas
        </div>
        <div class="flex flex-col">
            <h2>EL LOGIN</h2>
            <input type="text" v-model="usuario" placeholder="Usuario">
            <input type="password" v-model="contrasena" placeholder="Contraseña">
        </div>
        <button @click="enviar" >Entrar</button>
        
    </div>

</template>



<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import {setCookie} from '../Utils/cookies'
export default {
    data: () => {
        return{
            cargando: false,
            terminado: false,
            incorrecto: false,
            usuario: '',
            contrasena: '',
        }
    },
    methods: {
        enviar: function(){
            this.cargando = true;
            axios.post('/api/auth/login', { 
                usuario: this.usuario,
                contrasena: this.contrasena
            })
            .then(async (respuesta) => {
                this.$store.commit('LoginTrue')
                this.terminado = true
                // Almacena la informacion en una Cookie llamada JWT
                setCookie('JWT', respuesta.data, 15)
              
                // Obtiene los permisos de la sesion
                await this.$store.dispatch('Permisos')
                this.$router.push('inicio')
            })
            .catch(() => {
                console.log('Login incorrecto')
                this.incorrecto = true
                console.log(this.incorrecto)
            })
            .finally(() => this.cargando = false)
            
        }
    },
    components:{
        Loading
    }
}
</script>

<style scoped>
#contenedor{
    width: 200px;
}
input{
    border: 1px solid black;
    height: 25px;
}
</style>