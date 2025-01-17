<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <p>{{ message }}</p>
      
      <div class="button-group">
        <a :href="url" target="_blank" rel="noopener noreferrer">
          <button>Continue to Login</button>
        </a>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    url: String,
    isVisible: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px; 
  margin-top: 20px;
}
p {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a {
  text-decoration: none;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  background: rgb(250, 162, 103);
}

button:hover {
  opacity: 0.9;
}
</style>
