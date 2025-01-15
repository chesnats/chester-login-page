<template>
  <div class="register-form">
    <form @submit.prevent="handleSubmit">
      <!-- Email Field -->
      <div>
        <label for="email">Email</label>
        <input v-model="form.email" type="email" id="email" placeholder="Enter your Email" />
        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
      </div>

      <!-- Password Field -->
      <div>
        <label for="password">Password</label>
        <div class="password-wrapper">
          <input 
            v-model="form.password" 
            :type="showPassword.password ? 'text' : 'password'" 
            id="password" 
            placeholder="Enter your Password" 
          />
          <span class="toggle-password1" @click="togglePasswordVisibility('password')">
            <i :class="showPassword.password ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
          </span>
        </div>
        <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
      </div>

      <!-- Confirm Password Field -->
      <div>
        <label for="confirmPassword">Confirm Password</label>
        <div class="password-wrapper">
          <input 
            v-model="form.confirmPassword" 
            :type="showPassword.confirmPassword ? 'text' : 'password'" 
            id="confirmPassword" 
            placeholder="Confirm your Password" 
          />
          <span class="toggle-password" @click="togglePasswordVisibility('confirmPassword')">
            <i :class="showPassword.confirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
          </span>
        </div>
        <p v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</p>
      </div>

      <!-- Register Button -->
      <Button :disabled="isFormInvalid" label="Register" />
    </form>
  </div>
</template>


<script>
import { reactive, computed } from 'vue';
import Button from "@/components/Button.vue";  
import * as yup from 'yup';  

export default {
  name: 'RegisterUser',
  components: {
    Button,
  },
  setup() {
    const form = reactive({
      email: '',
      password: '',
      confirmPassword: '',
    });

    const errors = reactive({});

    const showPassword = reactive({
      password: false,
      confirmPassword: false,
    });

    const schema = yup.object().shape({
      email: yup
        .string()
        .required('Email is required')
        .email('Enter a valid email'),
      password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
    });

    const isFormInvalid = computed(() => {
      return (
        !form.email ||
        !form.password ||
        form.password !== form.confirmPassword ||
        errors.email ||
        errors.password ||
        errors.confirmPassword
      );
    });

    const handleSubmit = async () => {
      try {
        await schema.validate(form, { abortEarly: false });
        alert('User Registered Successfully!');
      } catch (err) {
        Object.keys(errors).forEach((key) => (errors[key] = ''));
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
      }
    };

    const togglePasswordVisibility = (field) => {
      showPassword[field] = !showPassword[field];
    };

    return {
      form,
      handleSubmit,
      errors,
      isFormInvalid,
      showPassword,
      togglePasswordVisibility,
    };
  },
};
</script>



<style scoped>
.register-form {
  margin: auto;
  padding: 20px;
  position: relative;
}
.form-group {
  margin-bottom: 30px; /* Added spacing between input fields */
}
h2 {
  color: white;
  font-family: 'Arial', sans-serif;
}
label {
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: block;
  margin-bottom: 15px
}
.toggle-password {
  position: absolute;
  right: 35px;
  top: 71.5%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 16px;
  color: #000000;
}
.toggle-password1 {
  position: absolute;
  right: 35px;
  top: 47%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 16px;
  color: #000000;
}
input {
  width: 94%;
  height: auto;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 16px;
}
button {
  width: 400px;
  margin-top: 1rem;
  background: #ff9900;
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}
button:hover {
  background: #9b5d00;
}
p {
  color: red;
  font-size: 0.9rem;
}
</style>
