<template>
  <div class="register-form">
    <form @submit.prevent="handleSubmit">
      <!-- Email Field -->
      <div>
        <label for="email">Email</label>
        <input v-model="form.email" type="email" id="email" />
        <p v-if="errors.email">{{ errors.email }}</p>
      </div>

      <!-- Password Field -->
      <div>
        <label for="password">Password</label>
        <input v-model="form.password" type="password" id="password" />
        <p v-if="errors.password">{{ errors.password }}</p>
      </div>

      <!-- Confirm Password Field -->
      <div>
        <label for="confirmPassword">Confirm Password</label>
        <input v-model="form.confirmPassword" type="password" id="confirmPassword" />
        <p v-if="errors.confirmPassword">{{ errors.confirmPassword }}</p>
      </div>
      
      <!-- Register Button -->
      <Button :disabled="isFormInvalid" label="Register" />
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';  // Importing computed from vue
import Button from "@/components/Button.vue";  // Import Button component
import * as yup from 'yup';  // Import yup for form validation

export default {
  name: 'RegisterUser',
  components: {
    Button,  // Registering the Button component
  },
  setup() {
    // Reactive form data and error messages
    const form = reactive({
      email: '',
      password: '',
      confirmPassword: '',
    });

    const errors = reactive({});

    // Yup validation schema
    const schema = yup.object().shape({
      email: yup.string().required('Email is required').email(),
      password: yup.string().required('Password is required').min(6),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
    });

    // Computed property for form validation
    const isFormInvalid = computed(() => {
      return !form.email || !form.password || form.password !== form.confirmPassword || errors.email || errors.password || errors.confirmPassword;
    });

    // Submit handler
    const handleSubmit = async () => {
      try {
        await schema.validate(form, { abortEarly: false });
        alert('User Registered Successfully!');
      } catch (err) {
        // Reset previous errors
        Object.keys(errors).forEach((key) => (errors[key] = ''));
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
      }
    };

    return { form, handleSubmit, errors, isFormInvalid };
  },
};
</script>

<style scoped>
.register-form {
  margin: auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 20px; /* Added spacing between input fields */
}
h2 {
  color: white;
  font-family: 'Arial', sans-serif;
}
label {
  color: white;
  font-family: 'Arial', sans-serif;
  display: block;
  margin-bottom: 8px
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
