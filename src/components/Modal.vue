<template>
    <div v-if="isOpen" class="modal-backdrop" @click="handleBackdropClick">
      <div class="modal-content" @click.stop>
        <header class="modal-header">
          <h3>{{ title }}</h3>
          <button class="close-btn" @click="closeModal">&times;</button>
        </header>
        <section class="modal-body">
          <slot></slot>
        </section>
        <footer v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseModal',
    props: {
      isOpen: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        default: 'Modal Title'
      },
      closeOnBackdrop: {
        type: Boolean,
        default: true
      }
    },
    emits: ['close'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
      handleBackdropClick() {
        if (this.closeOnBackdrop) this.closeModal();
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  .modal-content {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 400px;
    max-width: 80%;
    overflow: hidden;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    text-align: center;
    background: #f5f5f5;
   
  }
  .modal-header h3 {
    margin: 0;
    font-size: 30px;
    font-family: Roboto;
  }
  .close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #000000;
  transition: transform 0.3s ease-in-out; /* Smooth rotation transition */
}

.close-btn:hover {
  transform: rotate(90deg); /* Rotate 90 degrees on hover */
}
 
  /* .modal-body {
    padding: 1rem;
  } */
  .modal-footer {
    padding: 1rem 1rem;
    background: #f5f5f5;
    border-top: 1px solid #ddd;
    text-align: center;
  }
  </style>
  