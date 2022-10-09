<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    let scriptFont = document.createElement("script");
    scriptFont.setAttribute("src", "https://kit.fontawesome.com/208c9d7d9a.js");
    scriptFont.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(scriptFont);
  },
};
</script>
