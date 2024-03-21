import { ref, toValue } from 'vue';


export const useFetch = (url: string, options?: RequestInit) => {
  const isFetching = ref(true);
  const data = ref<[]>([]);
  const error = ref(null);
  const status = ref<number>();

  setTimeout(() => {
    fetch(toValue(url), options)
      .then(async (res) => {
        status.value = res.status;

        return await res.json();
      })
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
      .finally(() => (isFetching.value = false));
  }, 2000);


  return { isFetching, data, status, error }; 
};

export default useFetch;
