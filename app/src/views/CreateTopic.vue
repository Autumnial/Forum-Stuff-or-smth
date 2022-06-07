<template>

<form onsubmit="return false" class="relative top-10" >

<Input name="Topic Name" v-model="title" />
<label for="Topic Name" class=" inline-block text-left mb-4 left-5 w-96" :class="title.length >= maxTitleAmt ?' text-red-500' : 'text-gray-100'" v-if="title">  {{title.length}} / {{maxTitleAmt}}</label> <br>


<label for="description" class="text-gray-100 inline-block text-left w-80 mb-2"> Topic Description</label> <br>
<textarea class="rounded-xl border-none resize-none"  name="description" id="description" cols="38" rows="10" v-model="description"></textarea> <br>
<label for="description" class=" inline-block text-left w-96" :class="description.length >= maxDescAmt ?' text-red-500' : 'text-gray-100'" v-if="description">  {{description.length}} / {{maxDescAmt}}</label> <br>

    <button class="bg-primary-600 text-gray-100 text-lg px-4 py-2 my-4 rounded-full" @click="addTopic">
    <font-awesome-icon icon="plus"></font-awesome-icon> Add Topic  
    </button>
    <p class="text-red-500" v-if="error"> {{error}}  </p>
    <div v-if="success" class="flex items-center justify-center w-screen"> <div class="bg-green-500 text-white p-4 w-40 rounded-md" >  
        <font-awesome-icon icon="check" class="mr-2"></font-awesome-icon>
        Topic Added! </div>   </div>
 
</form>


</template>

<script setup>
import { ref, computed } from 'vue'
import Input from '@/components/Input.vue'
import Topics from '@/services/Topics.js'

let title = ref()
let description = ref()
let maxDescAmt = ref("1000")
let maxTitleAmt = ref('32')
let error = ref()
let success = ref(false)

async function addTopic(){
    error.value = ''
    success.value = false
    const result = await Topics.createTopic({
        title: title.value,
        description: description.value
    })

    console.log(result.data)
    if(result.data.status != 200){
        error.value = result.data.error;
    } else{
        success.value = true
    }
}


</script>