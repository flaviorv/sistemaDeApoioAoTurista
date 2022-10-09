<template>
  <navbar-component/>
  <div class="mainPage">
   

    <div class="loginForm">
         <Message :msg="msg" v-show="msg" />
      <h1>Criar uma Conta</h1>
      <form id="user-form" @submit="createuser">
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
            value="Criar Conta"
          />
        </div>
      </form>
    </div>
  </div>
  <footer-component />
</template>
<script>
import FooterComponent from "../components/Footer.vue";
import Message from "../components/Message.vue";
import NavbarComponent from "../components/Navbar.vue"
export default {
  name: "LogupComponent",
  components: {
    Message,
    FooterComponent,
    NavbarComponent
  },
  data() {
    return {
      nome: null,
      senha: null,
      msg: null,
    };
  },
  methods: {
    async createuser(e) {
      e.preventDefault();
      const data = {
        nome: this.nome,
        senha: this.senha,
      };
      if (data.nome != null && data.senha != null ) {
        const dataJson = JSON.stringify(data);
        const req = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson,
        });
        await req.json();
        this.msg = `Conta criada com sucesso!`;
        setTimeout(() => {
          this.msg = "";
          window.location.href = window.history.back();
        }, 5000);
      } else {
        this.msg = `Erro ao criar conta.`;
        setTimeout(() => (this.msg = ""), 5000);
      }
    },
  },
};
</script>
