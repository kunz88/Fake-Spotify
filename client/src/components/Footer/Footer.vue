<script setup lang="ts">
import { ref } from "vue";
import FooterBottom from "./FooterBottom.vue"
import agent from "../../utils/agent";

const uuidUser = ref<string>("")
/* type UserTypeKeys = keyof typeof user; */

const validationMail = () => {

    try {
      agent.SignIn.mailvalidation(uuidUser.value)
      console.log(uuidUser.value)
      
    } catch (error) {
      console.log(error)
    }
    
}

</script>

<template>
<footer class="footer p-10 bg-base-100 text-base-content">
  <nav>
    <h6 class="footer-title">Services</h6> 
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 class="footer-title">Company</h6> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 class="footer-title">Legal</h6> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </nav> 
  <form @submit.prevent="() => {console.log('validated')}">
    <h6 class="footer-title">Valida mail</h6> 
    <fieldset class="form-control w-80">
      <label class="label">
        <span class="label-text">Enter your uuid</span>
      </label> 
      <div class="join">
        <input type="text" placeholder="uuid" v-model="uuidUser" class="input input-bordered join-item" /> 
        <button class="btn btn-primary join-item " @click="()=>validationMail()">valida</button>
      </div>
    </fieldset>
  </form>
</footer>
<FooterBottom/>
</template>
