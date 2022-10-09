<template>
  <div class="CategoriaPage">
    <nav class="navbar" id="CategoriaTitle">
      <div class="container-fluid" id="CategoriaTitleContainer">
        <a class="navbar-brand">Categorias</a>
      </div>
    </nav>
    <div class="CategoriaIcons">
      <ul class="list-group">
        <li class="list-group-item" id="IconContainer">
          <router-link to="/emergencia" class="nav-link">
            <i class="fa-solid fa-hospital fa-3x" id="LinkIcon"></i>
            <strong>Emergência</strong>
          </router-link>
        </li>
        <li class="list-group-item" id="IconContainer">
          <router-link to="/entretenimento" class="nav-link">
            <i class="fa-solid fa-champagne-glasses fa-3x" id="LinkIcon"></i>
            <strong>Entretenimento</strong>
          </router-link>
        </li>
        <li class="list-group-item" id="IconContainer">
          <router-link to="/gastronomia" class="nav-link">
            <i class="fa-solid fa-burger fa-3x" id="LinkIcon"></i>
            <strong>Gastronomia</strong>
          </router-link>
        </li>
        <li class="list-group-item" id="IconContainer">
          <router-link to="/outros" class="nav-link">
            <i class="fa-solid fa-list fa-3x" id="LinkIcon"></i>
            <strong>Outros</strong>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriasComponent",
};
</script>