<template>
  <div class="textfield">
    <label :for="label">{{ label }}</label>
    <div class="password-wrapper" v-if="type === 'password'">
      <input
        v-bind="$attrs"
        :value="value"
        :type="showPassword ? 'text' : 'password'"
        :class="{ 'input-error': error }"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
      />
      <span class="toggle-password" @click="togglePasswordVisibility">
        <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
      </span>
    </div>
    <div v-else>
      <input
        v-bind="$attrs"
        :value="value"
        :type="type"
        :class="{ 'input-error': error }"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
      />
    </div>
    <span v-if="error" class="error-message"> {{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseTextfield",
  props: {
    label: String,
    value: String,
    type: String,
    error: Boolean,
  },
  data() {
    return {
      showPassword: false, // New data property to toggle password visibility
    };
  },
  computed: {
    errorMessage() {
      if (this.type === "username") {
        return "Username is not valid";
      }
      if (this.type === "password" && this.value.length < 8) {
        return "Password should at least 8 characters long";
      }
      return "";
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
.textfield {
  margin-bottom: 40px;
}

.textfield input {
  width: 400px;
  height: auto;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 16px;
}

label {
  color: rgb(255, 255, 255);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.textfield input.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.password-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 15px;
  top: 60%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 16px;
  color: #000000;
}
</style>
