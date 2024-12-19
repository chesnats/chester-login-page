<template>
    <div>
        <!-- This is HOME PAGE -->
<section id="home">
    <button @click="home" to="/home" class="custom-link">Back to Home</button>
    <Loading v-if="loading" />
    <div class="header1">
        <h1 class="paragraph">UI/UX COMPONENTS</h1>
        <img class="images" src="@/assets/Website Creator-pana.png">
    </div>
</section>


<section class="pictures">
    <h2 class="empathy">SAMPLE COMPONENTS</h2>
    <div class="portfolio">
        <img src="@/assets/Components.png"  class="portfolio_img">
        <img src="@/assets/Progress Indicators.png"  class="portfolio_img">
        <img src="@/assets/Progress Indicators-1.png"  class="portfolio_img">
        <img src="@/assets/sliders.png"  class="portfolio_img">
        <img src="@/assets/Sliders-1.png"  class="portfolio_img">
        <img src="@/assets/slide1.png"  class="portfolio_img">
    </div>
</section>
<section class="button">
    <div class="mail">
        <h1>CONTACT ME</h1>
        <a href="mailto:klaychestermans425@gmail.com" class="contact_link">klaychestermans425@gmail.com</a>
    </div>
    
            <div class="socmed">
                <a href="https://www.facebook.com/2Ches.Ter.17" target="_blank">
                    <img src="@/assets/facebook (1).png" alt="Facebook" />
                </a>
                <a href="https://x.com/?lang=en" target="_blank">
                    <img src="@/assets/Logo_00000038394049246713568260000012923108920998390947_.png" alt="Logo 2" />
                </a>
                <a href="https://www.instagram.com/chesnatts" target="_blank">
                    <img src="@/assets/instagram (1).png" alt="Instagram" />
                </a>
            </div>
        <div class="under-cons">@ 2024 Chester Manolo. All rights reserved</div>
        <a href="#home" class="scroll-to-top">↑</a>
    </section>
    </div>
  </template>
  
  <script>
  import Loading from "@/components/Loading.vue"; 
  export default {
    name: 'DotaPage',
      components: {
      Loading,  
    },
    data() {
      return {
        loading: false, 
      };
    },
    methods: {
      async home() {
          
        this.loading = true;
  
        await new Promise((resolve) => setTimeout(resolve, 1000));
     
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');
        localStorage.removeItem('user'); 
  
        this.$router.push({ name: 'Home' });
        this.loading = false;
      },
    },
  };
  </script>
  
  <style scoped>
*{
    margin: 0;
    padding: 0;
}
body{
    width: 100%;
    height: 100%;
    background: black;
}
.scroll-to-top {
    position: fixed;
    bottom: 20px; 
    right: 20px; 
    padding: 10px 15px;
    background-color: #333; 
    color: white;
    font-size: 24px;
    border-radius: 50%;
    text-decoration: none;
    display: none; 
    text-align: center;
    transition: opacity 0.3s ease;
}

body:has(:not(:target)) .scroll-to-top {
    display: block;
}

.scroll-to-top:hover {
    background-color: #FFA200; 
}
.custom-link {
  margin-top: 10px;
  color: #FFA200; 
  text-decoration: none; 
  background-color: rgb(63, 63, 63);
  padding: 15px 25px;
  font-size: 20px;
  border-radius: 20px;
  text-decoration: none; 
  cursor: pointer; 
}

.custom-link:hover {
    background-color: #FFA200; 
    color: white;
}
.header1 {
    display: flex;         
    justify-content: center;   
    align-items: center;        
    width: 100%;               
    height: 850px;              
    background-size: cover;   
    flex-direction: column;      
}
.paragraph {
    font: normal normal bold 70px/60px Roboto; 
    color: #FFA200;
    text-align: center;           
    padding-top: 15%;       
}
.images {
    max-width: 900px; 
}
.empathy{
    font: normal normal bold 50px/39px Roboto;
    color: #FFA200;
    padding-bottom: 5%;
}
.pictures {
    padding-top: 20%;
    display: flex;
    justify-content: center; 
    align-items: center;     
    min-height: 100vh;     
    flex-direction: column;  
    width: 100%;               
}

.portfolio {
    display: flex;            
    flex-direction: column;  
    justify-content: center;   
    align-items: center;      
    gap: 2em;                 
    max-width: 1000px;       
    width: 100%;              
}

.portfolio_img {
    width: 100%;             
    max-width: 1500px;    
    height: auto;               
    transition: transform 0.75s cubic-bezier(.5, 0, .5, 1), opacity 0.25s linear;
    border-radius: 8px;  
    transition: transform 0.5s ease, box-shadow 0.5s ease;    
}
.portfolio_img:hover {
    box-shadow: 5px 5px 0 rgb(207, 107, 25), 10px 10px 0 rgb(226, 123, 6),
    20px 20px 0 rgb(138, 51, 1);
}
.under-cons {
    text-align: center;
    margin-top: 10%;
    margin-bottom: 3%;
    font: normal normal 300 15px/16px Roboto;
    color: #FFFFFF;
}

.under-cons {
    text-align: center;
    margin-top: 10%;
    margin-bottom: 3%;
    font: normal normal 300 15px/16px Roboto;
    color: #FFFFFF;
}
.mail{
    text-align: center;

}
.button{
    margin-top: 3%;
    background: #111;
    text-align: center;
    padding: .5em 0;
}
.mail h1{
    color: #FFA200;
    font: normal normal bold 55px/10vh Roboto;
    margin-bottom: .5em;
}
.contact_link{
    text-decoration: none;
    font: normal normal bold 30px Roboto;
    color: #FFFFFF;
}
.contact_link:hover{
    color: #FFA200;
    text-decoration: underline;
}
.socmed {
    margin-top: 3%;
    display: flex;
    justify-content: center;
    gap: 5%;
}
.socmed img {
    width: 40px;
    height: auto;
}

@media screen and (max-width: 768px) {

.header1 {
    height: 600px; 
}
.paragraph {
    font-size: 40px; 
}
.empathy {
    font-size: 40px;  
    padding-bottom: 3%;
    margin-top: 10%;
}
.images{
    width: 100%;
    height: auto;
}
.pictures {
    padding-top: 10%;
}
.portfolio {
    gap: 1.5em; 
}
.portfolio_img {
    max-width: 1000px;  
}
.under-cons {
    font-size: 13px;  
}
.button {
    padding: .4em 0; 
    width: 100%;
}
.mail h1 {
    font-size: 40px;  
}
.socmed img {
    width: 30px; 
}
}

</style>