<template>
    <div>
        <button @click="home" to="/home" class="custom-link">Back to Home</button>
        <Loading v-if="loading" />
<!-- This is HOME PAGE -->
<section id="home">
    <div class="header1">
        <h1 class="paragraph">SOFTWARE REQUIRMENTS SPECIFICATION</h1>
        <img class="images" src="@/assets/brand guidelines-amico.png">
    </div>
</section>


<section class="pictures">
    <h2 class="empathy">WEB LOGWORK SYSTEM</h2>
    <div class="portfolio">
        <img src="@/assets/log4.png"  class="portfolio_img">
        <img src="@/assets/log5.png"  class="portfolio_img">
        <img src="@/assets/log.png"  class="portfolio_img">
        <img src="@/assets/log1.png"  class="portfolio_img">
        <img src="@/assets/log2.png"  class="portfolio_img">
        <img src="@/assets/log3.png"  class="portfolio_img">
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
    </section>
    </div>
</template>

<script>
import Loading from "@/components/Loading.vue"; 
export default {
  name: 'WebPage',
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

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
body{
    width: 100%;
    height: 100%;
    background: black;
}
.custom-link {
  color: #FFA200; 
  text-decoration: none; 
  background-color: rgb(34, 34, 34);
  padding: 10px 15px;
  border-radius: 20px;
  text-decoration: none; 
}

.custom-link:hover {
    background-color: #FFA200; 
    color: white;
}
.mans {
    position: fixed;
    width: 100%;
    height: 53px;
    background: #1D1D1D 0% 0% no-repeat padding-box;
 
}

.mans-con {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}

.mans-navbar {
    
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.mans-navbar h1 {
    font: normal normal bold 40px/29px Roboto;
    text-shadow: 1px 1px 10px #FFA200;
    letter-spacing: 20px;
    color: #FFA200;
    margin: 0;

}

.nav-links {
    display: flex;
    gap: 40px;
    
}
.home {
    font: normal normal normal 13px/15px Roboto;
    color: #FFFFFF;
    padding: 10px;
    position: relative;
    transition: color 0.2s;
    margin-left: -2%;
}

.home::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #FFA200;
    transition: width 0.5s;
}
.home:hover::after {
    width: 100%;
}

.home:hover {
    color: #FFA200;
}
.mans-link {
    text-decoration: none;
    color: inherit;
    
}
@media (max-width: 1200px) {
                    .mans-navbar h1 {
                        font-size: 20px; 
                    }
                    .home{
                        font-size: 10px;
                        gap: 10px;
                    }
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
}
.mail h1 {
    font-size: 40px;  
}
.socmed img {
    width: 30px; 
}
}
</style>