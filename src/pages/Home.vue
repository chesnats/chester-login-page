<template>
  <div>
  
   <header class="mans"> 
        <div class="mans-con">
            <div class="mans-navbar">
                <h1 style="cursor: pointer;">MANS</h1>
                <div class="nav-links">
                    <div class="home">
                        <a class='mans-link' href='#home'>HOME</a>
                    </div>
                    <div class="home">
                        <a class='mans-link' href='#about'>ABOUT ME</a>
                    </div>
                    <div class="home">
                        <a class='mans-link' href='#portfolio'>MY PORTFOLIO</a>
                    </div>
                    <div class="home">
                        <a class='mans-link' href='#touch'>GET IN TOUCH</a>
                    </div>
                    <div class="home">
                        <a class='mans-link' href='#blog'>MY BLOG</a>
                    </div>
                    <button @click="logout" class="logout-button">Logout</button>
                    <Loading v-if="loading" />
                </div>
            </div>
        </div>
    </header>
    <section id="home">
    <div class="header1">
        <div class="text-container">
            <p class="signature">Chester Manolo</p>
            <h1 class="text">- I'M CHESTER MANOLO.</h1>
            <img class="text1" src="@/assets/Comp1online-video-cutter.com-ezgif.com-crop.gif">
            <pre class="paragraph">I’m a Filipino based UI/UX designer specializing in
creating intuitive and engaging user experiences. My 
focus is on designing seamless, user-centered
interfaces that help bring digital products to life.</pre>
<a class="more" href="#more">MORE ABOUT ME</a>

</div>
<img class="images" src="@/assets/profile.png">
</div>
<div class="myplaylist">MY PLAYLIST</div>
    <div class="playlist" style="display: flex; justify-content: space-between; gap: 5px; overflow-x: auto;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/L4sbDxR22z4?si=sWwy4F7DcUrI4HUW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3XqqkrJENB4?si=1Bd0MeyOEAjH1PU5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/paODmdHQWMo?si=_c-OrlP4ezejaH08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PDJPpG8e4n4?si=VzN-MrA9xPkfJYrt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OVy41wSFdiE?si=CYiQtsZtpHP1g4fP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9q2UgXro0VU?si=33Z4yWPxwKXNPiHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lY3g3h0iP3A?si=dqq1gGoAWv6RSCbj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</section>
<section id='more'>

    <div id="about" class="resume-cons">
        <h1 class="resume">RESUME</h1>
        <h1 class="about"><span>ABOUT</span> ME</h1>
    </div>
<div class="personal">Personal Info</div>
<div class="about-con">
    
    <pre class="name">First Name: <span>Chester</span>                                 Last Name: <span>Manolo</span> 

Age: <span>23 Years</span>                                            Nationality: <span>Filipino</span> 

Freelance: <span>Available</span>                                 Address: <span>Alegria, Cebu</span> 

Phone: <span>09491735243</span>                              Email: <span>klaychestermans425@gmail.com</span> 

Skype: <span>Chester Manolo - IT Dev</span>             Languages: <span>Bisaya, Tagalog, English</span></pre>
                                    <div>
                                <div>
                            <div>
                        <div>
                    <div class="years-container">
                        <div class="years">
                            <h1>5&#8314;</h1>
                            <p>—— YEARS OF EXPERIENCE</p>
                        </div>
                        
                        <div class="years">
                            <h1>9&#8314;</h1>
                            <p>—— COMPLETED PROJECTS</p>
                        </div>
                        
                        <div class="years">
                            <h1>50&#8314;</h1>
                            <p>—— HAPPY CUSTOMERS</p>
                        </div>
                        
                        <div class="years">
                            <h1>51&#8314;</h1>
                            <p>—— AWARDS WON</p>
                        </div>   
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>
<div class="live">LIVE LOCATION</div>
<div class="iframe-container" style="width: 100%; height: 450px; display: flex; justify-content: center; padding-top: 3%;  ">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1617.8773998378372!2d123.8478837547453!3d10.274095393103982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1732587682952!5m2!1sen!2sph" 
            width="1000" 
            height="450" 
            style="border:0; box-shadow: 1px 1px 10px rgb(228, 127, 68);" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>
<div class="skills">MY SKILLS</div>
        <div class="circle-container">
            <div class="circle-item">
                <h1 class="circle">69%</h1>
                <p class="circle-text">HTML</p>
            </div>
            <div class="circle-item">
                <h1 class="circle">50%</h1>
                <p class="circle-text">JAVASCRIPT</p>
            </div>
            <div class="circle-item">
                <h1 class="circle">70%</h1>
                <p class="circle-text">CSS</p>
            </div>
            <div class="circle-item">
                <h1 class="circle">39%</h1>
                <p class="circle-text">PHP</p>
            </div>
            <div class="circle-item">
                <h1 class="circle">64%</h1>
                <p class="circle-text">WORDPRESS</p>
            </div>
            <div class="circle-item">
                <h1 class="circle">37%</h1>
                <p class="circle-text">JQUARY</p>
            </div>
            <div class="circle-item">
                <h1 class="circle">50%</h1>
                <p class="circle-text">ANGULAR</p>
            </div>
            <div class="circle-item"> 
                <h1 class="circle">45%</h1>
                <p class="circle-text">REACT</p>
            </div>
        </div>
        <div class="experience">EXPERIENCE & EDUCATION</div>
    <div class="experience-container">
        <div class="designer">
            <img class="star" src="@/assets/Group 14.png">
            <div class="present">2024 - PRESENT</div>
            <h1>UI/UX DESIGNER</h1>
            <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Magnam iure temporibus repellendus vero doloribus sapiente voluptatum.
Distinctio, earum. Esse, quia? Pariatur a voluptate odio magni. 
At praesentium odit deserunt labore!</pre>
        </div>

        <div class="designer">
            <img class="star" src="@/assets/Group 14.png">
            <div class="present">2021 - 2022</div>
            <h1>WEB DEVELOPER</h1>
            <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Magnam iure temporibus repellendus vero doloribus sapiente voluptatum.
Distinctio, earum. Esse, quia? Pariatur a voluptate odio magni. 
At praesentium odit deserunt labore!</pre>
        </div>

        <div class="designer">
            <img class="star" src="@/assets/Group 14.png">
            <div class="present">2020 - 2021</div>
            <h1>BACKEND DEVELOPER</h1>
            <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Magnam iure temporibus repellendus vero doloribus sapiente voluptatum.
Distinctio, earum. Esse, quia? Pariatur a voluptate odio magni. 
At praesentium odit deserunt labore!</pre>
        </div>

        <div class="designer">
            <img class="star" src="@/assets/Group 14.png">
            <div class="present">2010 - 2020</div>
            <h1>ENGINEERING DEGREE</h1>
            <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Magnam iure temporibus repellendus vero doloribus sapiente voluptatum.
Distinctio, earum. Esse, quia? Pariatur a voluptate odio magni. 
At praesentium odit deserunt labore!</pre>
        </div>

        <div class="designer">
            <img class="star" src="@/assets/Group 14.png">
            <div class="present">2018 - 2019</div>
            <h1>MASTER DEGREE</h1>
            <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Magnam iure temporibus repellendus vero doloribus sapiente voluptatum.
Distinctio, earum. Esse, quia? Pariatur a voluptate odio magni. 
At praesentium odit deserunt labore!</pre>
        </div>

        <div class="designer">
            <img class="star" src="@/assets/Group 14.png">
            <div class="present">2016 - 2018</div>
            <h1>BACHELOR DEGREE</h1>
            <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Magnam iure temporibus repellendus vero doloribus sapiente voluptatum.
Distinctio, earum. Esse, quia? Pariatur a voluptate odio magni. 
At praesentium odit deserunt labore!</pre>
        </div>
    </div>
</section>
  <section id="portfolio">

<div class="works-cons">
    <h1 class="works">WORKS </h1>
    <h2 class="portfolio"><span>MY</span>PORTFOLIO</h2>
</div>   

        <div class="main-images">
            <a href="/empathy" class="anime-image">
                <img src="@/assets/map.png" class="image">
            </a>
            <a href="/harley" class="anime-image">
                <img src="@/assets/harley.png" class="image">
            </a>
            <a href="/drawing" class="anime-image">
                <img src="@/assets/31211.png" class="image">
            </a>
            <a href="/webpage" class="anime-image">
                <img src="@/assets/log4.png" class="image">
            </a>
            <a href="/birthday" class="anime-image">
                <img src="@/assets/October Celebrants.png" class="image">
            </a>
            <a href="/dota" class="anime-image">
                <img src="@/assets/Components.png" class="image">
            </a>
        </div>
</section>
<section id="touch">
    <div class="contact-cons">
        <h1 class="contact">CONTACT</h1>
        <h2 class="touch"><span>GET IN</span> TOUCH</h2>
    </div>

    <div class="dont-con">
        <div class="main">
            <div class="dont">
                <div class="dont1">DON'T BE SHY !
                    <p>Don't hesitate to reach out, I'm always open to discussing new projects, brainstorming ideas, and exploring opportunities to bring your vision to life.</p>

                    <img class="address" src="@/assets/land-layer-location.png" />
                    <div class="address1">
                        <span>ADDRESS POINT</span> <br>Bulacao Sta. Filomena Alegria, Cebu
                    </div>

                    <img class="mail1" src="@/assets/envelope (2).png" />
                    <div class="mail">
                        <span>MAIL ME </span> <br><a href="mailto:klaychestermans425@gmail.com" class="contact_link">klaychestermans425@gmail.com</a>
                    </div>

                    <img class="call1" src="@/assets/circle-phone-flip.png" />
                    <div class="call">
                        <span>CALL ME </span> <br>09491735243
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
                </div>
            </div>
        </div>

        <div class="search-container">
            <div class="name-email-container">
                <input type="text" class="search-input" placeholder="YOUR NAME" />
                <input type="text" class="search-input" placeholder="YOUR EMAIL" />
            </div>
            <input type="text" class="search-input" placeholder="YOUR SUBJECT" />
            <textarea class="search-input" placeholder="YOUR MESSAGE"></textarea>
            <button class="send" @click="toggleModal">SEND MESSAGE</button>
            <Modal
            :isOpen="showModal"
            title="SEND SUCCESSFULLY"
            @close="toggleModal"
            >
            <template #footer>
                <button class="confirm1" @click="confirmAction">Confirm</button>
            </template>
        </Modal>
        </div>
        </div>
</section>
<section id="blog">

<div class="post-cons">
    <h1 class="post">POSTS</h1>
    <h2 class="blog"><span>MY</span> BLOG</h2>
</div>
    <div class="blog-images">
            <a href="error" class="blog-image">
                <img src="@/assets/image_2024_10_08T03_17_56_067Z.png" class="image">
            </a>
            <a href="error" class="blog-image">
                <img src="@/assets/image_2024_10_11T07_22_38_025Z.png" class="image">
            </a>
            <a href="error" class="blog-image">
                <img src="@/assets/image_-1.png" class="image">
            </a>
            <a href="error" class="blog-image">
                <img src="@/assets/ariel.png" class="image">
            </a>
            <a href="error" class="blog-image">
                <img src="@/assets/image_2024_10_08T03_13_14_527Z.png" class="image">
            </a>
            <a href="error" class="blog-image">
                <img src="@/assets/image_2024_09_30T04_48_39_382Z.png" class="image">
            </a>
            </div>
            
<div class="under-cons">@ 2024 Chester Manolo. All rights reserved</div>
<a href="#home" class="scroll-to-top">↑</a>
</section>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue"; 
import Modal   from '@/components/Modal.vue';
export default {
  name: "HomePage",
  components: {
    Loading,  
    Modal,
  
  },
  data() {
    return {
      loading:   false, 
      showModal: false,
    
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    confirmAction() {
      alert('Action confirmed!');
      this.showModal = false;
    },
    async logout() {
        
      this.loading = true;

      await new Promise((resolve) => setTimeout(resolve, 1000));
   
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      localStorage.removeItem('user'); 

      this.$router.push({ name: 'Login' });
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.logout-button {
  display: block;
  padding: 5px 10px;
  font-size: 12px;
  background-color: #ff9900;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.logout-button:hover {
  background-color: #ff8000;
}
.confirm1{
   padding: 0.75rem 1rem;
   border-radius: 10px;
   border: 1px;
   background-color: #d5d5d5;
   box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}
.confirm1:hover{
    background-color: #ff8000;
}
.mans {
  position: fixed;
    width: 100%;
    height: 53px;
    margin-top: -48px;
    margin-left: -48px;
    background: #1D1D1D 0% 0% no-repeat padding-box;
}
.text1 {
    margin-left: 24px;
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
    font: normal normal bold 30px/29px 'Arial', sans-serif;
    color: #FFA200;
    margin: 0;
}
.nav-links {
    display: flex;
    gap: 40px;
}
.home {
    font: normal normal normal 13px/15px 'Arial', sans-serif;
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
        font-size: 30px; 
    }
    .home{
        font-size: 10px;
        gap: 10px;
    }
}

.container h1 {
  text-align: center;
  
}
.header1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 750px;
  background-size: cover;
  box-sizing: border-box;
}
.text-container {
  margin-left: 10%;
  max-width: 700px; 
}
.signature {
  margin-left: 34px;
  font-family: "Herr Von Muellerhoff", cursive;
  font-size: 12px;
  letter-spacing: 10px;
  font-style: italic;
  color: #e1e1e1;
}
.text {
  font: normal normal bold 50px/39px 'Arial', sans-serif;
  color: #FFA200;
}
.text1 {
  margin-top: -10%;
  margin-left: 24px;
}
.paragraph {
  margin-left: 34px;
  font: normal normal 300 15px/20px 'Arial', sans-serif;
  color: #b2b2b2;
}
.more {
    margin-left: 25px;
    margin-top: 10px;
    width: 175px;
    height: 39px;
    font: 12px/14px 'Arial', sans-serif;
    color: #ffffff;
    text-align: center;
    line-height: 39px;
    border-radius: 50px;
    background: none;
    border: 2px solid #FFA200;
    text-decoration: none;
    display: inline-block;
    transition: 0.3s;
}
.more:hover {
    background-color: #FFA200;
}
.images {
    max-width: 500px;
    height: auto;
    padding-right: 8%;
    padding-bottom: 10%;
}
@media (max-width: 1200px) {
    .header1 {
        flex-direction: column; 
        height: auto;
        padding: 30px 20px;
    }
    .text-container {
        padding-top: 10%;
        margin-left: 0;
        text-align: center;
    }
    .signature {
        font-size: 10px; 
        margin-left: 0;
    }
    .text {
        font-size: 40px; 
        margin-left: -2%;
    }
    .more {
        margin-left: 0;
        margin-top: 15px;
        width: 150px;
    }
    .images {
        max-width: 80%; 
        padding-left: 10%;
        margin-top: -20%;
    }
}
.myplaylist{
    padding-top: 5%;
    text-align: center;
    width: 100%;
    height: 50px;
    font: normal normal 300 18px/20px 'Arial', sans-serif;
    color: #FFFFFF;
}
.playlist {
    display: flex;
    justify-content: flex-start; 
    gap: 5px; 
    overflow-x: auto; 
    scroll-snap-type: x mandatory; 
    width: 100%; 
}
.resume-cons{
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh; 
}
.resume{
    text-align: center;
    font: normal normal bold 100px/10vh 'Arial', sans-serif;
    color: #4E4C4C;
    margin: 0;
}
.about{
    text-align: center;
    color: #FFA200;
    font: normal normal bold 60px/10vh 'Arial', sans-serif;
    margin-top: -10vh;

}
span{
    color: #FFFFFFFF;
}
.personal {
    display: flex;
    justify-content: left;
    margin-top: 6%;
    margin-left: 12%;
    font: normal normal normal 30px/24px 'Arial', sans-serif;
    color: #FFFFFF;
}
.name {
    margin-top: 2%;
    margin-left: 12%;
    font: normal normal 300 15px/16px 'Arial', sans-serif;
    color: #8b8b8b;
}
.about-con {
    display: flex;
    justify-content: space-between;
}
.years-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);  
    gap: 20px;
    justify-items: center; 
    margin-top: -10%;
    margin-right: 15rem;
}
.years {
    width: 150px;
    height: 100px;
    border: 0.5px solid #FFA200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-align: center;
}
.years h1 {
    font: normal normal normal 30px/37px 'Arial', sans-serif;
    color: #FFA200;
    margin: 0;
}
.years p {
    font: normal normal normal 10px/13px 'Arial', sans-serif;
    color: #FFFFFF;
    margin-top: 5px;
}
@media (max-width: 1200px) {
    .resume {
        font-size: 80px; 
    }
    .about {
        font-size: 50px; 
    }
    .personal {
        font-size: 25px;
        margin-left: 33%;
    }
    .name {
        font-size: 14px;
    }
    .about-con {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-left: -10%;
    }
    .years-container{
        margin-top: 5%;
        margin-left: 20%;
    }
    .years {
        width: 120px; 
        height: 80px;
    }
    .years h1 {
        font-size: 25px; 
    }
    .years p {
        font-size: 12px;
    }
}
.live {
    width: 100%;
    text-align: center;
    padding-top: 13%;
    font: normal normal normal 20px/24px 'Arial', sans-serif;
    color: #FFFFFF;

}
.skills{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8%;
    font: normal normal normal 20px/24px 'Arial', sans-serif;
    color: #FFFFFF;
}
.circle:hover{
    background-color: #FFA200;
}
.circle-container {
    display: flex;
    text-align: center;
    display: grid;
    margin-top: 8%;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);  
    gap: 50px;
}
.circle-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0;
}
.circle {
    width: 50px;
    height: 50px;
    border: 5px solid #FFA200; 
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font: normal normal normal 15px/18px 'Arial', sans-serif;
    margin-bottom: 10px; 
}
.circle-text {
    font: normal normal normal 12px/14px 'Arial', sans-serif;
    color: #FFFFFF;
}
.experience{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8%;
    font: normal normal normal 20px/24px 'Arial', sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
}
.experience-container {
    display: grid;  
    margin-top: 3%;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(3, auto);   
    gap: 50px;
    justify-items: center; 
    align-items: center;  
}
.present {
    margin-top: -27%;  
    margin-left: 12%;     
    display: flex;
    align-items: center;
    justify-content: center;
    font: normal normal normal 10px/11px 'Arial', sans-serif;
    color: #FFFFFF;
    width: 90px;       
    height: 15px;       
    background: #4E4E4E 0% 0% no-repeat padding-box;
    border-radius: 15px;
}
.designer{
    margin-top: 10%;
}
.designer h1 {
    margin-top: 1%;
    margin-left: 13%;  
    font: normal normal normal 15px/17px 'Arial', sans-serif; 
    letter-spacing: 0px;
    color: #FFFFFF;
}
.designer pre {
    margin-left: 12%;    
    font: normal normal 300 12px/13px 'Arial', sans-serif;
    letter-spacing: 0px;
    color: #919191;
}
@media (max-width: 768px) {
    .experience-container {
        grid-template-columns: 1fr; 
        gap: 30px; 
        margin-left: -10%;
    }
    .designer {
        margin-top: 5%;
        padding: 15px; 
    }
    .designer h1 {
        font-size: 14px; 
    }
    .designer pre {
        font-size: 11px; 
    }
    .present {
        margin-top: -25%; 
        margin-left: 15%;
        font-size: 9px; 
    }
}
.works-cons{
    padding-top: 5%;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10vh; 
}
.works{
    text-align: center;
    font: normal normal bold 100px/10vh 'Arial', sans-serif;
    color: #4E4C4C;
    margin: 0; 
}
.portfolio{
    text-align: center;
    color: #FFA200;
    font: normal normal bold 50px/10vh 'Arial', sans-serif;
    margin-top: -10vh;
  
}

.main-con {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: .5%;
    flex-direction: column;
    row-gap: 20px;
    padding: 20px;
}
.gallery-header {
    font: normal normal normal 22px/18px 'Arial', sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    font-weight: bold;
}
.gallery-navbar {
    display: flex;
    column-gap: 20px;
}
.person {
    font: normal normal normal 22px/18px 'Arial', sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    padding: 10px;
    display: flex;
    justify-content: center;
    transition: 0.2s;
}
.a-link {
    text-decoration: none;  
    color: inherit;     
}
.person:hover {
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    color: #FFA200;
}
.selected {
    font-weight: bold;
    color: #FFA200;
    transition: 0.2s;
}
.main-images {
    display: grid;
    width: 100%;
    margin-top: 5%;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(2, auto);   
    gap: 20px;  
    justify-items: center;  
    align-items: center;   
}
.anime-image {
    overflow: hidden;   
    border-radius: 10px; 
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
}
.anime-image img {
    width: 100%;  
    max-width: 500px;
    height: auto; 
    border-radius: 20px;
}
.anime-image:hover{
    transform: scale(1.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease; 

}
@media (max-width: 768px) {
    .main-images {
        grid-template-columns: 1fr; 
        grid-template-rows: auto; 
    }
    .anime-image img {
        max-width: 80%;  
        margin-left: 5rem;
    }
}
@media (max-width: 480px) {
    .works {
        font-size: 60px; 
    }
    .portfolio {
        font-size: 35px; 
    }
}
.contact-cons {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
}

.contact {
    text-align: center;
    font: normal normal bold 100px/10vh 'Arial', sans-serif;
    color: #4E4C4C;
    margin: 0; 
}

.touch {
    text-align: center;
    color: #FFA200;
    font: normal normal bold 50px/10vh 'Arial', sans-serif;
    margin-top: -10vh;
}


.dont-con {
    margin-top: 15%; 
    margin-left: 9%;
    display: flex;
    justify-content: space-between;
}

.dont1 {
    font: normal normal normal 20px/24px 'Arial', sans-serif;
    color: #FFFFFF;
    padding-left: 15%;
    margin-bottom: 3rem;  
}


.dont p {
    font: normal normal 300 12px/16px 'Arial', sans-serif;
    color: #b3b0b0;
    margin-top: 1%;
}

.address, .mail1, .call1 {
    display: inline-block;
    margin-top: 2rem;
    margin-left: 10px;
}
.mail .contact_link {
    text-decoration: none; 
    color: inherit; 
}
.address1, .mail, .call {
    color: #FFFFFF;
    text-align: left;
    margin-left: 5rem;
    margin-top: -3rem;
    font-size: 17px;
}

.address1 span, .mail span, .call span {
    font: normal normal normal 10px/13px 'Arial', sans-serif;
    color: #A7A7A7;
    
}
.socmed {
    display: flex;
    margin-top: 10%;
    gap: 10%;
}
.socmed a {
    display: block;
}

.search-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-right: 5%;
    margin-top: 1rem;  
}
.name-email-container {
    margin-left: -20%;
    display: flex;
    gap: 15px;
}

.search-input {
    padding: 10px;
    font-size: 16px;
    background: #545454;
    border-radius: 20px;
    border-color: #FFA200;
    width: 100%;
    max-width: 490px;
}

.search-input::placeholder {
    padding-left: 2%;
    font: normal normal normal 12px/14px 'Arial', sans-serif;
    color: #8F8F8F;
}

.search-input[placeholder="YOUR NAME"] {
    width: 226px;
}
.search-input[placeholder="YOUR EMAIL"] {
    width: 226px;
}
.search-input[placeholder="YOUR SUBJECT"] {
    width: 490px;
    margin-left: -20%;
}
.search-input[placeholder="YOUR MESSAGE"] {
    width: 490px;
    height: 198px;
    margin-left: -20%;
}
.send {
    margin-left: -6rem;
    width: 175px;
    height: 39px;
    font: 12px/14px 'Arial', sans-serif;
    color: #FFFFFF;
    border-radius: 50px;
    background: none;
    border-color: #FFA200;
    cursor: pointer;
    transition: background-color 0.3s;
}

.send:hover {
    background-color: #FFA200;
}

@media (max-width: 1200px) {
    .contact {
        font-size: 80px;
    }

    .touch {
        font-size: 40px;
    }

    .dont-con {
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }

    .dont1 {

        font-size: 18px;
    }

    .address1,
    .mail,
    .call {
        font-size: 14px;
    }

    .address1 span,
    .mail span,
    .call span {
        font-size: 12px;
    }

    
    .search-container {
        margin-top: 3rem;
        margin-left: 13rem;
    }

    .search-input {
        font-size: 14px;
    }

    .search-input[placeholder="YOUR NAME"],
    .search-input[placeholder="YOUR EMAIL"] {
        width: 155px;
    }

    .search-input[placeholder="YOUR SUBJECT"],
    .search-input[placeholder="YOUR MESSAGE"] {
        width: 350px;
    }

    .send {
        width: 160px;
        margin-left: 8%;
    }
}
.post-cons{
    padding-top: 2.5%;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh; 
}
.post{
    text-align: center;
    font: normal normal bold 100px/10vh 'Arial', sans-serif;
    color: #4E4C4C;
    margin: 0; 
}
.blog{
    text-align: center;
    color: #FFA200;
    font: normal normal bold 60px/10vh 'Arial', sans-serif;
    margin-top: -10vh;
 
}
.blog-images {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(2, auto);
    padding-top: 3%;
    gap: 50px;
}

.blog-image {
    display: flex;
    justify-content: center;
    align-items: center;
}
.image {
    width: 100%; 
    height: auto; 
    max-width: 300px;
    transition: transform 0.5s ease, box-shadow 0.5s ease;   
}
.image:hover {
    box-shadow: 5px 5px 0 rgb(207, 107, 25), 10px 10px 0 rgb(226, 123, 6),
    20px 20px 0 rgb(138, 51, 1);
}
@media (max-width: 768px) {
    .blog-images {
        grid-template-columns: 1fr; 
        grid-template-rows: auto; 
    }
    
    .image {
        max-width: 80%;  
        margin-left: 3rem;
    }
}

.under-cons{
    text-align: center;
    margin-top: 10%;
    margin-bottom: 3%;
    font: normal normal 300 15px/16px 'Arial', sans-serif;
    color: #FFFFFF;
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

</style>
