<template>
  <div>
    <Loading v-if="loading" />
    <div class="main-container" @click="startMusic">
      <img src="@/assets/4c098bb079eb7146b72ab38dfffe8ed7.gif" alt="Loading..." class="logo1" />
      
      <div class="login-container">
        <img src="@/assets/3b1d86760d10d077f5ed7d8e4e0969aa.gif" alt="Loading..." class="logo" />
        
        <!-- Conditional Rendering for Login or Register -->
        <h1>{{ showRegisterForm ? "Create a New Account" : "Welcome again! Please sign in to begin." }}</h1>

        <h2>{{ showRegisterForm ? "Register" : "Login" }}</h2>
        <!-- LOGIN FORM (only shows when not registering) -->
        <form v-if="!showRegisterForm" @submit.prevent="handleLogin">
          <Textfield
            v-model="email"
            label="Email"
            type="email"
            :error="emailError"
            @blur="validateEmail"
            placeholder="Enter your email"
          />
          <div class="password-wrapper">
            <Textfield
              v-model="password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :error="passwordError"
              @blur="validatePassword"
              placeholder="Enter your password"
            />
     
          </div>
          <Button :disabled="isFormInvalid" label="Login" />
        </form>

        <!-- REGISTER FORM -->
        <RegisterUser v-else />

        <p class="or" v-if="!showRegisterForm">or continue with</p>

        <!-- SOCIAL LOGIN BUTTONS (only for login view) -->
        <div class="social-login" v-if="!showRegisterForm">
          <button @click="loginWithFacebook" class="social-btn facebook">
            <i class="fa-brands fa-facebook"></i>
          </button>
          <button @click="loginWithGoogle" class="social-btn google">
            <i class="fa-brands fa-google"></i>
          </button>
          <button @click="loginWithEmail" class="social-btn email">
            <i class="fa fa-envelope"></i>
          </button>
        </div>

        <!-- SWITCH BETWEEN LOGIN AND REGISTER -->
        <p class="switch-form">
          {{ showRegisterForm ? "Already have an account?" : "Don't have an account?" }}
          <a href="#" @click="toggleRegisterForm">
            {{ showRegisterForm ? "Login here" : "Register here" }}
          </a>
        </p>
      </div>
    </div>

    <audio id="background-music" loop autoplay muted>
      <source src="@/assets/music.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>


<script>
import Textfield from "@/components/Textfield.vue";
import Button from "@/components/Button.vue";
import Loading from "@/components/Loading.vue";
import RegisterUser from "@/components/RegisterUser.vue";

export default {
  name: "LoginPage",
  components: {
    Textfield,
    Button,
    Loading,
    RegisterUser,
  },

  data() {
    return {
      correctEmail: "klaychestermans425@gmail.com",
      correctPassword: "mans0935217",
      email: "",
      password: "",
      emailTouched: false,
      passwordTouched: false,
      loading: false,
      showPassword: false,
      showRegisterForm: false, 
    };
  },

  computed: {
    emailError() {
      return this.emailTouched && !this.isEmailValid;
    },
    passwordError() {
      return this.passwordTouched && !this.isPasswordValid;
    },
    isEmailValid() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(this.email);
    },
    isPasswordValid() {
      return this.password.length >= 8;
    },
    isFormInvalid() {
      return !(this.isEmailValid && this.isPasswordValid);
    },
  },

  methods: {
    validateEmail() {
      this.emailTouched = true;
    },
    validatePassword() {
      this.passwordTouched = true;
    },

    async handleLogin() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (this.email === this.correctEmail && this.password === this.correctPassword) {
        this.$router.push("/home");
      } else {
        alert("Invalid email or password!");
      }
      this.loading = false;
    },

    loginWithFacebook() {
      alert("Logging in with Facebook...");
    },
    loginWithGoogle() {
      alert("Logging in with Google...");
    },
    loginWithEmail() {
      alert("Logging in with Email...");
    },

    startMusic() {
      const music = document.getElementById("background-music");
      music.muted = false;
      music.play();
    },

    // Toggle between Login and Register Forms
    toggleRegisterForm() {
      this.showRegisterForm = !this.showRegisterForm;
    },
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.password-wrapper {
  position: relative;
}
.toggle-password {
  position: absolute;
  right: 15px;
  top: 40%;
  cursor: pointer;
}

.main-container {
  display: flex;
  gap: 15rem;
  justify-content: flex-end;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 600px;
  padding-bottom: 10rem;
  background-color: #001f36;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
}
h1 {
  padding-top: 5rem;
  color: #ffffff;
  font-size: 15px;
  padding-bottom: 25px;
  font-family: 'Arial', sans-serif;
  font-style: italic;
}
h2{
  color: #ff9900;
  font-size: 2rem;
  font-family: 'Arial Narrow', Arial, sans-serif;
}
.logo1 {
  height: 100vh;
  width: calc(100% - 500px);
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
}
.logo {
  width: 450px;
  height: auto;
  margin-top: 10vh;
}
form {
  display: flex;
  flex-direction: column;
  width: 30px;
  align-items: center;
}
button {
  width: 400px;
  padding: 12px;
}
.or {
  margin-top: 40px;
  font-size: 15px;
  color: #dadada;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.social-login {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}
.social-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
}
.social-btn i {
  font-size: 20px;
}
.social-btn.facebook {
  background-color: #3b5998;
}
.social-btn.google {
  background-color: #c92516;
}
.social-btn.email {
  background-color: #333;
}
.switch-form {
  margin-top: 20px;
  font-size: 14px;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.switch-form a {
  color: #ff9900;
  cursor: pointer;
  text-decoration: underline;
}
</style>
