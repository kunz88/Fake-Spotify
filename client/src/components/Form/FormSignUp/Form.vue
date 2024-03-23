<script setup lang="ts">
import { reactive} from "vue";
import CustomButton from "../../CustomButton.vue";
import FormSection from "../FormSection.vue";
import {UserKey, UserType} from "../model/user"
import agent from "../../../utils/agent";



//IL REACTIVE E' CONSIGLIATO QUANDO SI UTLIZZA UN OGGETTO E CREA UN REF PER OGNI CHIAVE DELL'OGGETTO (DA USARE CON PRUDENZA)
const user: UserType = reactive({
  name: "",
  email: "",
  avatar: "",
  password: "",
});


const handleSubmit = () => {
  try{
    agent.SignUp.signup(user).then(response => localStorage.setItem("token",response.token))
    console.log(user)
  }catch(e){
    console.log(e);
  }
  //RIINIZIALIZZA TUTTI I VALORI DI "card" ED E' IL CORRISPETTIVO DEL CODICE PRECEDENTE
Object.keys(user).forEach((inputName: string) => (user[inputName as UserKey] = "")); 
  /*   Object.keys(user).forEach((inputName: string) => (user[inputName] = "")); */
};
</script>

<template>
  <FormSection>
    <!-- UTILIZZIAMO IL VERBO MODIFICATORE "prevent" PER PREVENIRE IL RELOAD DELLA PAGINA -->
    <form class="form-container self-center" @submit.prevent="handleSubmit">
      <h1 class="text-4xl leading-10 font-bold text-white mb-8 text-center">
        Accedi a Spotify
      </h1>
      <button class="btn btn-outline">
        Continua con Facebook
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
      <button class="btn btn-outline">
        Continua con Youtube
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
          ></path>
        </svg>
      </button>

      <div class="divider"></div>
      <label
        class="input input-bordered input-primary flex items-center gap-4 w-full max-w-xs"
      >
        Email
        <input
          type="text"
          class="grow"
          placeholder="kunz@site.com"
          required
          v-model="user.email"
        />
      </label>
      <label
        class="input input-bordered flex items-center gap-4 w-full max-w-xs"
      >
        <input
          type="password"
          class="grow"
          placeholder="password"
          v-model="user.password"
          required
        />
      </label>
      <div class="flex p-5 items-center"> <p>Non hai un account?</p><RouterLink to="/signin" 
          ><CustomButton name="Iscriviti" color="btn-link"/>
        </RouterLink></div>



      <CustomButton
        type="submit"
        text="Submit"
        name="Submit"
        color="btn-primary"
      />
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
