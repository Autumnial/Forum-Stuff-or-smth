<template>

<div>
    <Button v-if="!store.logged" @click="login" text="Log-in to the epicest awesomest ever"/>
    <Button v-else @click="logout" text="Log-out :c please dont please stay i beg"/>
     
</div>

</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { userDataStore } from "@/stores/logged";
import Button from '@/components/Button.vue'

const store = userDataStore()

function login(){
    store.logged = true
}
function logout(){
    store.logged = false
}
let currPath = useRoute().fullPath
console.log(currPath)

// 
// 
</script>