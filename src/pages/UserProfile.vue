<template>
  <div>
    <header>
      <div class="mans-navbar">
        <a @click.prevent="navigateToHomePage"  style="cursor: pointer; text-decoration: none;">
            <h1>MANS</h1>
        </a>
          <Loading v-if="loading" />
        <div class="nav-links">
            <a @click.prevent="navigateToHomePage"  class="mans-link">HOME</a>
            <a @click.prevent="navigateToHomePage" class="mans-link">ABOUT ME</a>
            <a @click.prevent="navigateToHomePage"  class="mans-link">MY PORTFOLIO</a>
            <a @click.prevent="navigateToHomePage"  class="mans-link">GET IN TOUCH</a>
            <a @click.prevent="navigateToHomePage"  class="mans-link">MY BLOG</a>
        
        <div class="dropdown">
            <button class="dropdown-button">
              <span class="user-icon"><i class="fa fa-user"></i></span>
                <span>Chester Manolo</span>
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a>Profile</a>
                <a @click="logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    
      <div class="profile-container">
        <div v-if="!isEditing && !showChangePassword" style="display: flex; justify-content: right;">
          <button class="change-pass-btn" @click="toggleChangePassword"><i class="fas fa-key"></i> Change Password</button>
          <button  @click="enableEdit">Edit Profile</button>
        </div>
        <div style="display: flex; gap: 20px;">
            <span class="profile-icon"><i class="fa fa-user"></i></span>
            <span class="name"> Chester Manolo </span>
        </div>
          <div class="user-avatar" >
            <div class="profile-info">
              <div class="field">
                  <label>Username</label>
                  <div v-if="!isEditing" class="field-box">{{ user.username }}</div>
                  <Textfield
                    v-else
                    v-model="editableUser.username"
                    placeholder="Update your username"
                  />
              </div>
              <div class="field">
                  <label>Address</label>
                  <div v-if="!isEditing" class="field-box">{{ user.address }}</div>
                  <Textfield
                    v-else
                    v-model="editableUser.address"
                    placeholder="Update your address"
                  />
              </div>
              <div class="field">
                  <label>Primary Work Email</label>
                  <div v-if="!isEditing" class="field-box">{{ user.email }}</div>
                  <Textfield
                    v-else
                    v-model="editableUser.email"
                    placeholder="Update your primary email"
                  />
              </div>
              <div class="field">
                  <label>Secondary Work Email</label>
                  <div v-if="!isEditing" class="field-box">{{ user.secondaryemail }}</div>
                  <Textfield
                    v-else
                    v-model="editableUser.secondaryemail"
                    placeholder="Update your secondary email"  
                  />
              </div>
              <div v-if="isEditing" class="edit-actions" style="margin-top: -1rem;">
                  <button @click="saveProfile" class="save-btn">Save Changes</button>
                  <button @click="cancelEdit" class="cancel-btn">Cancel</button>
            </div>
        </div>
      </div>
<!-- Change Password Form -->
    <div class="password">
      <div class="password-section" v-if="showChangePassword" >
          <div v-if="showChangePassword">
              <h1>Change Password</h1>
              <form @submit.prevent="updatePassword">
                <div class="field">
                  <label>Old Password</label>
                  <input
                    type="password"
                    v-model="password.oldPassword"
                    placeholder="Enter your old password"
                  />
                </div>
                <div class="field">
                  <label>New Password</label>
                  <input
                    type="password"
                    v-model="password.newPassword"
                    placeholder="Enter your new password"
                  />
                </div>
                <div class="field">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    v-model="password.confirmPassword"
                    placeholder="Confirm your new password"
                  />
                </div>
                <div class="button-container">
                  <Button
                    type="submit"
                    :disabled="!password.oldPassword || !password.newPassword || password.newPassword !== password.confirmPassword"
                    label="Update Password"
                  />
                  <Button
                    type="button"
                    @click="showChangePassword = false"
                    label="Cancel"
                  />
                </div>
              </form>
          </div>
        </div>
      </div>
    <Loading v-if="loading" />
  </div>
</div>
</template>

<script>
import Textfield from "@/components/Textfield.vue";
import Loading from "@/components/Loading.vue"; 
import axios from 'axios';
import Button from "@/components/Button.vue";

export default {
  name: "UserProfile",
  components: {
    Textfield,
    Loading,
    Button,
  },

  data() {
    return {
      showChangePassword: false,
      
      loading: false, 
      stage_link: 'https://aapistage.newalchemysolutions.com',
      user: {
        username: localStorage.getItem("login_user") || "Guest",
        email: "user@example.com",
        secondaryemail: "user1@example.com",
        address: "Alegria, Cebu"
      },
      isEditing: false,
      editableUser: { username: "", email: "", secondaryemail: "" },
      password: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      storedPassword: localStorage.getItem("user_password") || "manss", 
    };
  },
  methods: {
    
    async navigateToHomePage() {
      this.loading = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); 
        this.$router.push({ name: "Home" });
      } finally {
        this.loading = false;
      }
    },
    logout() {
        this.loading = true;
  
        let headers = {
          "Content-Type": "application/json",
          "Gui" : "Verification"
        };
  
       axios.delete(`${this.stage_link}/logout`, { headers })
          .then(response => {
          console.log(response);
          if (response.status === 200) {
              localStorage.setItem('logout_time', new Date().toISOString()); 
              localStorage.setItem('logout', 'User successfully logged out.');
              localStorage.clear();
  
        this.$router.push({ name: 'Login' });
        this.loading = false;
        }
       })
      },
    enableEdit() {
      this.editableUser = { ...this.user };
      this.isEditing = true;
      this.showChangePassword = false;
    },
    toggleChangePassword() {
      this.isEditing = false;
      this.showChangePassword = true;
    },
    saveProfile() {
      this.user = { ...this.editableUser };
      alert("Profile saved successfully!");
      this.isEditing = false;
    },
    cancelEdit() {
      this.isEditing = false;
      this.editableUser = { ...this.user };
    },
    cancelChangePassword() {
      this.showChangePassword = false;
    },
    updatePassword() {
      if (this.password.oldPassword === this.storedPassword) {
        if (this.password.newPassword === this.password.confirmPassword) {
          this.storedPassword = this.password.newPassword;
          localStorage.setItem("user_password", this.storedPassword);
          alert("Password updated successfully!");
          this.password = { oldPassword: "", newPassword: "", confirmPassword: "" };
          this.showChangePassword = false;
        } else {
          alert("New password and confirmation do not match.");
        }
      } else {
        alert("Old password is incorrect.");
      }
    },
  },
};
</script>

<style scoped>
.user-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px; 
  height: 30px; 
  border-radius: 50%; 
  background-color: #464543;
  color: white; 
  font-size: 18px;
  margin-right: 8px; 
}

.dropdown{
  position: relative;
  left: 25px;
  padding-top: 1px;
}
.dropdown-button {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 12px;
  background-color: #ff9900;
  color: white;
  height: 35px;
  width: 165px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  gap: 5px;
  margin-top: 8px;
}
.dropdown-button:hover {
  background-color: #ff8000;
}

.dropdown-content {
  display: none;
  position: absolute;
  margin-left: 5px;
  background-color: #ffffff;
  min-width: 165px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  overflow: hidden;
}

.dropdown-content a {
  color: #333;
  padding: 10px 15px;
  font-size: 12px;
  text-decoration: none;
  display: block;
  transition: background-color 0.2s;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.dropdown-content a:hover {
   background-color: #ff8000;
   border-radius: 5px;
   color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.mans-link {
    text-decoration: none;
    font: normal normal normal 13px/15px 'Arial', sans-serif;
    color: #FFFFFF;
    padding: 10px;
    position: relative;
    transition: color 0.2s;
    margin-left: -2%;
    margin-top: 10px;
    left: 30px;
}
.mans-link::after{
  content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #FFA200;
    transition: width 0.5s; 
}
.mans-link:hover::after {
    width: 100%;
}
.mans-link:hover {
    color: #FFA200;
}
.mans-navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 53px;
    margin-top: -98px;
    z-index: 1;
    margin-left: -48px;
    background: #1D1D1D 0% 0% no-repeat padding-box;
}
.mans-navbar h1 {
    font: normal normal bold 30px/29px 'Arial', sans-serif;
    color: #FFA200;
    margin: 10px;
}
.nav-links {
    display: flex;
    gap: 40px;
}
.user-avatar{
  display: flex;
  justify-content: space-around;
}
.name{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 3rem;
  margin-top: 3rem;
}
.profile-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px; 
  height: 150px; 
  border-radius: 50%; 
  background-color: #e6e6e6;
  color: rgb(0, 140, 255); 
  font-size: 100px; 
  margin-right: 8px;
}

.profile-container {
  padding: 50px;
  max-width: 900px;
  margin: 50px auto;
  background-color: #001f36;
  color: white;
  border-radius: 8px;

}

.profile-info {
  position: relative;
  left: -5.8rem;
  padding-top: 5rem;
  width: 80%;
  display: grid;
  grid-row: auto auto;
  grid-row-gap: 50px;

}

.field {
  display: flex;
  align-items: center;
  gap: 20px; /* Space between label and content */
}

label {
  flex: 0 0 200px; /* Fixed width for the label */
  text-align: left;
  font-weight: bold;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.field-box,
.textfield-placeholder {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #bdbdbd;
  font-size: 1rem;
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.edit-actions {
  margin-top: -1rem;
  display: flex;
  gap: 10px;

}

button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #ff9900;
  border: none;
  width: 200px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #cc7a00;
}


.password {
  padding-top: 4rem;
  max-width: 700px;
  padding-left: 1rem;
}
.password-section{
  margin-left: -1rem;
}
.password-section h1 {
  margin-left: -29rem;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.password-section form {
  padding-top: 2rem;
  display: grid;
  grid-row-gap: 50px;
}

.password-section .field {
  display: flex;
  gap: 70px; /* Space between label and input */
}

.password-section label {
  flex: 0 0 150px; /* Fixed label width */
  text-align: left;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
}

.password-section input[type="password"] {
  flex: 1; /* Input takes the remaining space */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
}

.password-section input[type="password"]:hover {
  background-color: #f1f1f1;
}

.password-section button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #ff9900;
  border: none;
  width: 200px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.password-section button:disabled {
  background-color: #585858;
  cursor: not-allowed;
}


</style>