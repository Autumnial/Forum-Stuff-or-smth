<template>
  <nav class="font-sans w-screen p-12 h-12 items-center flex flex-row bg-neutral-700">
    <RouterLink
      to="/"
      class="text-2xl ml-0 mr-8 font-bold text-left text-primary-500"
    >
      Cool Forum
    </RouterLink>
    <ul class="inline-block" v-for="(link, index) in filteredLinks">
      <RouterLink
        class="p-2 py-4 hover:scale-110 scale-100 text-xl m-0 text-gray-100 bg-neutral-600 hover:bg-neutral-500" :class="index == 0 ? 'rounded-l-lg' :  index == filteredLinks.length-1 ? 'rounded-r-lg' : ''" 
        :to="link.route"
      >
        {{ link.name }}
      </RouterLink>
    </ul>
    <div class="flex-grow"></div>
    <font-awesome-icon v-if="store.logged" icon="bell" size="2x" class="m-4"></font-awesome-icon>
    <div v-if="store.logged" class="text-center text-gray-100 m-4">
       <img  src="@/assets/DefaultUser.svg" class="h-12 " alt="" />
       <p> {{store.name}} </p>
    </div>

    
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { userDataStore } from "@/stores/logged";

const store = userDataStore();
console.log(store.name);

const links = ref([
  { name: "Forums", route: "/messages", logged: true, level: 0 },
  { name: "Admin Panel", route: "/admin", logged: true, level: 2 },
  { name: "Mod Panel", route: "/mod", logged: true, level: 1 },
  { name: "Register", route: "/register", logged: false, level: 0 },
  { name: "Log in", route: "/login" , logged: false, level: 0},
]);

let filteredLinks = computed(() => {
  return links.value.filter((item) => item.logged === store.logged && item.level <= store.level)
})
</script>
