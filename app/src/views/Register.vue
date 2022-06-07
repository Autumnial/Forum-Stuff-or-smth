<template>
  <div>
    <form onsubmit="return false">
      <Input name="Username" v-model="name" required />
      <p class="text-red-500 m-2">{{ nameErr }}</p>
      <Input name="Email" required v-model="email" />
      <p class="text-red-500 m-2">{{ emailErr }}</p>
      <Input
        name="Email Verification"
        v-model="emailconfirm"
        type="email"
        required
      />
      <p class="text-red-500 m-2">{{ emailconfirmErr }}</p>
      <Input
        name="Password"
        type="password"
        v-model="pass"
        required
        hint="Has to be 8 characters or longer, and must include atleast one Capital letter."
      />
      <p class="text-red-500 m-2">{{ passErr }}</p>
      <Input
        name="Password Verification"
        v-model="passconfirm"
        type="password"
        required
      />
      <p class="text-red-500 m-2">{{ passconfirmErr }}</p>
      <!-- <input name="submit" type="submit" @inputChanged="console.log('wahoo')" class="bg-primary-600 text-lg px-4 py-2 rounded-full"/> -->
      <Button @click="register" text="Register!" />
      <p class="text-red-500 m-2">{{ insertErr }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { userDataStore } from "../stores/logged";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Authentication from "@/services/Authentication.js";

let router = useRouter();
const store = userDataStore();
let name = ref();
let email = ref();
let emailconfirm = ref();
let pass = ref();
let passconfirm = ref();

let nameErr = ref();
let emailErr = ref();
let emailconfirmErr = ref();
let passErr = ref();
let passconfirmErr = ref();
let insertErr = ref();

async function register() {
  nameErr.value = "";
  emailErr.value = "";
  emailconfirmErr.value = "";
  passErr.value = "";
  passconfirmErr.value = "";
  insertErr.value = "";
  // console.log(name)
  // if(!validateForm()) return;

  // console.log(name.value)
  const status = await Authentication.registerUser({
    name: name.value,
    email: email.value,
    emailconfirm: emailconfirm.value,
    pass: pass.value,
    passconfirm: passconfirm.value,
  });

  console.log(status.data.status);

  if (status.data.error) {
    switch (status.data.error.type) {
      case "name":
        nameErr.value = status.data.error.message;
        break;
      case "email":
        emailErr.value = status.data.error.message;
        break;
      case "emailconfirm":
        emailconfirmErr.value = status.data.error.message;
        break;
      case "pass":
        passErr.value = status.data.error.message;
        break;
      case "passconfirm":
        passconfirmErr.value = status.data.error.message;
        break;
      case "insert":
        insertErr.value = status.data.error.message;
        break;
      default:
        break;
    }

    return;
  }
  router.push("login");
  // store.logged = true;
  // store.name = name;
}

function validateForm() {
  nameErr.value = "";
  emailErr.value = "";
  emailconfirmErr.value = "";
  passErr.value = "";
  passconfirmErr.value = "";

  console.log(passconfirm.value);
  if (!name.value) {
    nameErr.value = "Please Provide A Username.";
    return false;
  }
  if (!email.value) {
    passErr.value = "Please Provide An Email.";
    return false;
  }
  if (!emailconfirm.value) {
    emailconfirmErr.value = "Please Confirm Email.";
    return false;
  }
  if (!pass.value) {
    passErr.value = "Please Provide a Password.";
    return false;
  }
  if (!passconfirm.value) {
    passconfirmErr.value = "Please Confirm Password.";
    return false;
  }

  return true;
}
</script>
