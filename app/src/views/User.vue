<template>

<div>

    <p v-if="store.logged">Welcome {{ store.name }}!</p>
    <p v-else > You filthy fucking pig, you should log in NOW.</p>

</div>

</template>

<script setup> 

import { useRoute, useRouter } from "vue-router";
import { userDataStore } from "@/stores/logged";

const store = userDataStore()

let currPath = useRoute().fullPath
console.log(currPath)



</script>