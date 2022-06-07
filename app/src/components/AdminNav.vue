<template>

<nav class="fixed top-25 left-0 h-screen flex flex-col items-center text-center bg-gray-700 w-40"> 

    <ul class="flex flex-col items-center w-full" v-for="(link) in links">
      <RouterLink
        class="p-4 text-md w-full text-gray-100 bg-neutral-600 hover:bg-neutral-500"
        :to="link.route"
      >
        {{ link.name }}
      </RouterLink>
    </ul> 
</nav>

</template>

<script setup>
    import { ref } from 'vue'
    let links = ref([
        {name: 'topics', route: '/admin/topics'},
        {name: 'users', route: '/admin/topics'},
    ])

</script>