<template>
<form onsubmit="return false"> 
    <Input name="Username or Email" required v-model="name"/>
    <Input name="Password" type="password" required v-model="password"/>
    <Button text="Log In" @click="login"/>
<p class="text-red-500  m-2"> {{error}} </p>
</form>
</template>

<script setup> 
import { ref } from 'vue';
import { userDataStore } from '../stores/logged';
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import Authentication from '@/services/Authentication.js'

const store = userDataStore();

let name = ref();
let password  = ref();

let error = ref();

async function login(){
    error.value = ''
    const result = await Authentication.login({name: name.value, pass: password.value})
    console.log(result)

    if (result.data.status != 200){
        error.value = "Invalid username/password combo"
        return;
    }

    store.logged = true;
    store.name = result.data.user.username
    store.level = result.data.user.level
}

</script> 