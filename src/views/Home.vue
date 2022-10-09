<template>
  <div class="mainPage">
    <categorias-component />
    <div class="SelecaoPage">
      <navbar-component />

      <form id="ContainerSearchBar" class="d-flex" role="search">
        <input
          id="IndexSearchBar"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="pesquisa"
        />
      </form>

      <div class="container-lg" id="ContainerConteudo" v-if="pesquisa == ''">
        <template v-for="item in locais" :key="item.id">
          <div class="Conteudo">
            <a class="nav-link" :href="item.maps" target="_blank">
              <i :class="item.icon" id="LinkIcon"></i>
              <p>
                {{ item.name }}
              </p>
              <p>
                {{ item.address }}
              </p>
              <p>
                {{ item.neighborhood }}
              </p>
              <p>
                {{ item.city }}
              </p>
            </a>
          </div>
        </template>
      </div>
      <div class="container-lg" id="ContainerConteudo" v-else>
        <template v-for="item in locais" :key="item.id">
          <div
            class="Conteudo"
            v-if="item.name.toLowerCase().includes(pesquisa.toLowerCase())"
          >
            <a class="nav-link" :href="item.maps" target="_blank">
              <i :class="item.icon" id="LinkIcon"></i>
              <p id="nome">
                {{ item.name }}
              </p>
              <p id="rua">
                {{ item.address }}
              </p>
              <p id="bairro">
                {{ item.neighborhood }}
              </p>
              <p id="cidade">
                {{ item.city }}
              </p>
            </a>
          </div>
        </template>
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
import CategoriasComponent from "../components/Categorias.vue";
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "HomeComponent",
  components: {
    CategoriasComponent,
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      locais: null,
      pesquisa: "",
    };
  },
  methods: {
    async getLocais() {
      const req = await fetch("http://localhost:3000/locais");
      const data = await req.json();
      this.locais = data;
    },
  },
  mounted() {
    this.getLocais();
  },
};
</script>
