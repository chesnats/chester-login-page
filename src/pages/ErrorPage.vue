<template>
  <div class="theft">
    <img src="@/assets/404.png" alt="theft" />
    <h1>SORRY!</h1>
    <P>The Page You're Looking For Was Not Found</P>
  <div>
    <button @click="goBackToLogin">⬅ Back to Login Page</button>

    <Loading v-if="loading" />
  </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue"; 
export default {
  name: 'ErrorPage',
  components: {
    Loading,  
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async goBackToLogin() {
      this.loading = true; 

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear authentication data if applicable
      localStorage.removeItem("login_data");
      sessionStorage.removeItem("authToken");
      localStorage.removeItem("user");

      // Navigate to the Login page
      this.$router
        .push({ name: "Login" })
        .catch(() => {

      // Suppress potential duplicate navigation errors
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.theft h1{
  color: aliceblue;
  font-family: 'Arial', sans-serif;
  font-size: 4rem;
}
.theft p{
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  color: aliceblue;
}
.theft {
  width: 100%;
  text-align: center;
  margin-top: 100px;
}
button{
  font-size: 1.5rem;
  padding: 15px 25px;
  border-radius: 10px;
  border: 1px;
  box-shadow: 0 10px 15px rgba(255, 255, 255, 0.3);
  cursor: pointer;
}
button:hover{
  background-color: #ff9900;
}
img {
  width: 80%; 
  max-width: 1000px; 
  filter: drop-shadow(1px 1px 20px #434343);
}
</style>
