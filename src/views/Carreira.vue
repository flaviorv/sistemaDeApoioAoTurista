<template>
<navbar-component/>
  <div class="mainPage">
    <div class="loginForm">
      <h1>Carreira</h1>
      <form id="user-form">
        <div class="input-container">
          <h3>Desenvolvedor</h3>
          <div>
            <a href="https://www.linkedin.com/in/flavio-rezende/" target="_blank"><span>Flavio RV</span></a>
          </div>
        </div>
        <div class="input-container">
          <h3>Desenvolvedor</h3>
          <div>
            <a
              href="https://www.linkedin.com/in/marco-antonio-ferreira-b11141209/" target="_blank"
              ><span>Marco Antônio Ferreira</span></a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
  <footer-component/>
</template>

<script>
import NavbarComponent from '../components/Navbar.vue'
import FooterComponent from "../components/Footer.vue"
export default {
  name: "CarreiraComponent",
  components:{
     FooterComponent,
     NavbarComponent
  }
 
};
</script>

<style scoped>
    a, span{
        display: flex;
        font-family: cursive;
        font-size: 1.3em;
        text-decoration: none;
        justify-content: center;
        
    }
</style>