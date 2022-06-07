<template>
    <button class="bg-primary-600 text-gray-100 text-lg px-4 py-2 rounded-full"> {{ text }} </button>
</template>

<script setup>

defineProps({
    text: String
})

</script>