   <template>
    <button :disabled="disabled" class="button" @click="handleClick">{{ label }}</button>
  </template>
  
  <script>
  export default {
    name: "BaseButton",
    props: {
      label: String,
      disabled: Boolean,
    },
    methods: {
      handleClick() {
        this.$emit("click");
      },
    },
  };
  </script>
  
  <style scoped>
  
  .button {
    padding: 10px;
    background-color: #db600e;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    align-items: center;
  }
  
  .button:disabled {
    background-color: #5e5c5c;
  }
  </style>
  