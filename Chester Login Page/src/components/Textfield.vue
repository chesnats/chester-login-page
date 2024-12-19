  <template>
    <div class="textfield">
      <label :for="label">{{ label }}</label>
      <input
        v-bind=   "$attrs"
        :value=   "value"
        :type=    "type"
        :class=   "{ 'input-error': error }"
        @input=   "$emit('input', $event.target.value)"
        @blur=    "$emit('blur')"
      />
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
    computed: {
      errorMessage(){
        if (this.type === "email"){
          return "Email is not valid";
        }
        if (this.type === "password" && this.value.length < 8){
          return "Password should at least 8 characters long";
        }
        return "";
      }
    }
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
  label{
    color: rgb(255, 255, 255);
  }
  .textfield input.input-error {
    border-color: red;
  }
  
  .error-message {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
  
  </style>
  