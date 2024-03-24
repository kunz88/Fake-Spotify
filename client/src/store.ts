import axios, { AxiosResponse } from "axios";
import { computed, reactive, ref } from "vue";



//STORE "logged" RICHIAMABILE OVUNQUE
export const logged = reactive({
  //STATE
  isLogged: false, // constrolla se l'utente è loggato
  token: "", // inizializzo il token a stringa vuota
  user: { user: String }, // inizializazione dell'utente

  //ACTION
  checkToken() {
    const token = localStorage.getItem("token"); // prendo il token dal local storage
    
    if (token) { // se c'è il token
      // setto si logged a true
      this.isLogged = true;
      // faccio una chiamata al server per prendere i dati dell'utente
      axios
        .get("http://localhost:3000/auth/me", { headers: { token: token } })
        .then((response: AxiosResponse) => {
          // setto l'utente con i dati che ricevo dal server
          this.user = response.data;
        }
        ).catch(error => {
          console.log(error)
        });
    }
  },
});


// utilizzo una computed  come getter dei dati dell'utente da renderizzare
const getUser = computed(() => {
  return logged.user;
});

const listFavourites = ref<String[]>([])
//UTILIZZO COME REDUX CON SELECTOR
export const store = reactive({
  logged,
  getUser,
  listFavourites
});
