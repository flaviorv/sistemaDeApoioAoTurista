<template>
  <nav class="navbar navbar-expand-lg" id="navbarConteudo">
    <div class="container-fluid" id="ContainerNavbarConteudo">
      <a class="navbar-brand" id="link-home" href="#"
        >Sistema de Apoio ao Turista</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 ms-4 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">
              <i class="fa-solid fa-house" id="LinkIcon2"></i> Início
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa-solid fa-envelope" id="LinkIcon2"></i> Mensagens
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-flag" id="LinkIcon2"></i>
              Idioma
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Português - pt-br</a></li>
              <li><a class="dropdown-item" href="#">English - En-Us</a></li>
            </ul>
          </li>
          <li class="list-group-item"   v-if="this.log == '' ">
            <router-link to="/logup" class="nav-link" >
              <i class="fa-solid fa-right-to-bracket" id="LinkIcon2"></i>
              <span>Criar Conta</span>
            </router-link>
          </li>
            <li class="list-group-item"   v-else>
            <router-link to="/#" class="nav-link">
              <i class="fa-solid fa-user" id="LinkIcon2"></i>
              <span v-text="log"></span>
            </router-link>
          </li>
          <li class="list-group-item" v-if="this.log == ''">
            <router-link to="/login" class="nav-link"   >
              <i class="fa-solid fa-right-to-bracket" id="LinkIcon2"></i>
              <span>Acessar Conta</span>
            </router-link>
          </li>
           <li class="list-group-item" v-else>
            <a href="/#" class="nav-link"   @click="logout">
              <i class="fa-solid fa-square-xmark" id="LinkIcon2"></i>
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data(){
    return{
        log: null
    }
  },
  methods: {
     async logout() {
        const data ={
            log: ""
        }
        const dataJson = JSON.stringify(data);
      const req = await fetch("http://localhost:3000/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson,
        });
        const res = await req.json()
        console.log(res)
    },

    async getLog() {
      const req = await fetch("http://localhost:3000/log");
      const data = await req.json();
      this.log = data.log;
      console.log(this.log)
    },
  },
  mounted() {
    this.getLog();
  }
};
</script>
