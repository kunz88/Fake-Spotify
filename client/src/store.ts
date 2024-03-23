import axios, { AxiosResponse } from "axios";
import { computed, reactive } from "vue";

//STORE "islogged" RICHIAMABILE OVUNQUE
export const logged = reactive({
  //STATE
  isLogged: false,
  token: "",
  user: { name: String, email: String, avatar: String },
  //ACTION
  checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      this.isLogged = true;
      axios
        .get("http://localhost:3000/auth/me", { headers: { token: token } })
        .then((response: AxiosResponse) => {
          this.user = response.data;
        });
    }
  },
});

const getUser = computed(() => {
  return logged.user;
});

//UTILIZZO COME REDUX CON SELECTOR
export const store = reactive({
  logged,
  getUser,
});
