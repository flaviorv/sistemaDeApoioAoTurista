<template>
     <footer>
    <div class="card" id="Rodape">
      <div class="card-header" id="headerRodape">
        Sistema de Apoio ao Turista ₢ 2022 Infnet
      </div>
      <div class="card-body" id="conteudoRodape">
        <a class="nav-link" href="#" id="rodapeIcon"> Sobre Nós </a>
        <router-link to="/carreira" class="nav-link">
          <span>Carreira</span>
        </router-link>
        <a class="nav-link" href="#" id="rodapeIcon"> Entre em Contato </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name:'FooterComponent'
}
</script>