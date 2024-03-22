<script setup lang="ts">
import { reactive } from "vue";
import CustomButton from "../../CustomButton.vue";
import FormSection from "../FormSection.vue"
import agent from "../../../utils/agent.ts"
import {UserKey, UserType} from "../model/user"


//IL REACTIVE E' CONSIGLIATO QUANDO SI UTLIZZA UN OGGETTO E CREA UN REF PER OGNI CHIAVE DELL'OGGETTO (DA USARE CON PRUDENZA)
const user: UserType = reactive({
  name: "",
  email: "",
  avatar: "",
  password: "",
});



const handleSubmit = () => {
  //UTILIZZARE IL VERBO MODIFICATORE "prevent" PERMETTE DI NON UTLIZZARE LA SINTASSI CLASSICA DEL "preventDefault()"
  try{
    agent.SignIn.signin(user)
    console.log(user)
  }catch(e){
    console.log(e);
  }
  //RIINIZIALIZZA TUTTI I VALORI DI "card" ED E' IL CORRISPETTIVO DEL CODICE PRECEDENTE
Object.keys(user).forEach((inputName: string) => (user[inputName as UserKey] = "")); 
};
</script>

<template>

<FormSection>
  <!-- UTILIZZIAMO IL VERBO MODIFICATORE "prevent" PER PREVENIRE IL RELOAD DELLA PAGINA -->
  <form class="form-container self-center " @submit.prevent="handleSubmit">

    <h1 class="text-4xl leading-10 font-bold text-white mt-8 mb-8 ml-3.5">Iscriviti per iniziare ad ascoltare</h1>

    <label class="input input-bordered flex items-center gap-4 w-full max-w-xs">
      Name
      <input
        type="text"
        class="grow"
        placeholder="Kunz"
        required
        v-model="user.name"
      />
    </label>
    <label class="input input-bordered input-primary flex items-center gap-4 w-full max-w-xs">
      Email
      <input
        type="text"
        class="grow"
        placeholder="kunz@site.com"
        required
        v-model="user.email"
      />
    </label>
    <label class="input input-bordered flex items-center gap-4 w-full max-w-xs">
      <input
        type="text"
        class="grow"
        placeholder="Avatar"
        v-model="user.avatar"
      />
      <span class="badge badge-info mr-1">Optional</span>
    </label>
    <label class="input input-bordered flex items-center gap-4 w-full max-w-xs">
      <input
        type="password"
        class="grow"
        placeholder="password"
        v-model="user.password"
        required
      />
    </label>
    <!-- UTILIZZO CON IL COMPONENTE  "CustomInput" -->
    <!-- <CustomInput type="text" v-model="card.img" class="form-input" placeholder="immagine" required /> -->
    <CustomButton type="submit" text="Submit" name="Submit" color="btn-primary"/>

    <div class="divider">oppure</div>

    <button class="btn btn-outline">
        Accedi con Facebook
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          ></path>
        </svg>
      </button>


  </form>
</FormSection>

</template>

<style scoped lang="scss">
@import "../../../scss/includes.scss";

.form-container {
  @include flex($flex-direction: column);

  gap: rem(8);

  width: rem(300);

  margin-bottom: rem(16);
}

</style>
