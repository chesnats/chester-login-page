<template>
  <div>
    <Loading v-if="loading" />
      <div class="main-container" @click="startMusic">
        <img src="@/assets/4c098bb079eb7146b72ab38dfffe8ed7.gif" alt="Loading..." class="logo1" />
      <div class="login-container">
        <img src="@/assets/3b1d86760d10d077f5ed7d8e4e0969aa.gif" alt="Loading..." class="logo" />
        <h1>Hello again! Please sign in to begin.</h1>

        <form @submit.prevent="handleLogin">
          <Textfield
            v-model=    "email"
            label=      "Email"
            type=       "email"
            :error=     "emailError"
            @blur=      "validateEmail"
            placeholder="Enter your email"
          />
        <div class="password-wrapper">
          <Textfield
            v-model=    "password"
            label=      "Password"
            :type=      "showPassword ? 'text' : 'password'"
            :error=     "passwordError"
            @blur=      "validatePassword"
            placeholder="Enter your password"
            />
            <i class="toggle-password" :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'" @click="togglePasswordVisibility"></i>
         </div>
          <Button :disabled="isFormInvalid" label="Login" />
        </form>

        <p class="or">or continue with</p>

        <div class="social-login">
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
    </div>
</div>
  <audio id="background-music" loop autoplay muted> 
  <source src="@/assets/music.mp3" type="audio/mp3" />
  </audio>
</div>

</template>

<script>
import Textfield from "@/components/Textfield.vue";
import Button    from "@/components/Button.vue";
import Loading   from "@/components/Loading.vue";

export default {
  name: "LoginPage",
  components: {
    Textfield,
    Button,
    Loading,
  },

  data() {
    return {
      correctEmail:    "klaychestermans425@gmail.com",
      correctPassword: "mans0935217",
      email:           "",
      password:        "",
      emailTouched:    false,
      passwordTouched: false,
      loading:         false,
      showPassword:    false,
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
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
    togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
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
  }
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
  background-color: #001f36;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
}
h1 {
  margin-top: -10px;
  color: #ffffff;
  font-size: 15px;
  padding-bottom: 25px;
  font-family: sans-serif;
  font-style: italic;
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
  margin-bottom: 30px;
  margin-top: -14vh;
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
.or{
  margin-top: 40px;
  font-size: 15px;
  color: #dadada;
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
.social-btn:hover {
  opacity: 0.8;
}
.social-btn.facebook {
  background-color: #3b5998;
}
.social-btn.facebook:hover {
  background-color: #2d4373;
}
.social-btn.google {
  background-color: #db4437;
}
.social-btn.google:hover {
  background-color: #c1351d;
}
.social-btn.email {
  background-color: #333;
}
.social-btn.email:hover {
  background-color: #555;
}
</style>
