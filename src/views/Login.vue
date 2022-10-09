<template>
<navbar-component :log="log" />
  <div class="mainPage">
    
    <div class="loginForm">
      <Message :msg="msg" v-show="msg" />
      <h1>Acessar Conta</h1>
      <form id="user-form" @submit="acessarconta">
        <div class="input-container">
          <label for="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            v-model="nome"
            placeholder="Digite o nome"
          />
        </div>
        <div class="input-container">
          <label for="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            v-model="senha"
            placeholder="Digite a senha"
          />
        </div>

        <div class="input-container">
          <input
            type="submit"
            class="btn btn-outline-danger"
            value="Acessar Conta"
          />
        </div>
      </form>
    </div>
  </div>
  <footer-component />
</template>

<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import Message from "../components/Message.vue";
export default {
  name: "LoginComponent",
  components: {
    Message,
    FooterComponent,
    NavbarComponent
  },
  data() {
    return {
      nome: null,
      senha: null,
      log: '',
      msg: null,
    };
  },
  methods: {
    async setLog() {
        const data ={
            log: this.log
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
       async setButtonOff() {
        const data ={
            log: this.log
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

    async acessarconta(e) {
      e.preventDefault();
        let dadosCorretos = false
      if (this.nome != null && this.senha != null) {
        const reqUsers = await fetch("http://localhost:3000/users");
        const resUsers = await reqUsers.json();
        for (let n in resUsers) {
          if (
            resUsers[n].nome == this.nome &&
            resUsers[n].senha == this.senha
          ) {
            dadosCorretos = true
            this.log = this.nome
            this.setLog()
            this.msg = `Entrando...`;
            setTimeout(() => {
              this.msg = "";
              
              window.location.href = window.history.back();
            }, 5000);
          }
        }
        if(dadosCorretos == false){
             this.msg = `Dados incorretos.`;
        setTimeout(() => {
          this.msg = "";
        }, 5000);
        }
     

       
      }else{
        
        this.msg = `Dados incompletos.`;
        setTimeout(() => {
          this.msg = "";
        }, 5000);
      }
    },
  }
};
</script>
