<template>
<div class="w-50">
    <label class="text-left ml-4 inline-block w-96 text-gray-100 mb-2" :for="name" > {{name}} </label> <br>
    <input :value="modelValue" :type="type" @input="$emit('update:modelValue', $event.target.value)" :name="name" :placeholder="name" :id="name" class=" text-gray-800 px-4 py-2 rounded-full border-none w-96"><br>
    <label class="text-sm inline-block mt-2 text-gray-500 text-left w-96 break-words" :for="name" v-if="hint"> {{hint}} </label>  <br v-if="hint">
</div>
</template>

<script setup>
import { computed, ref } from 'vue'
defineProps({
    name: String,
    type: {
        type: String,
        default: 'text',
    },
    modelValue: String,
    hint: String
})

defineEmits(['update:modelValue'])


</script>