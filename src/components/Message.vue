<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: "MessageComponent",
  props: {
    msg: String,
  }
};
</script>
<style scoped>
.message-container {
  color: whitesmoke;
  background-color: rgb(229, 130, 180);
  border: 2px solid pink;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  margin: 30px auto;
}
</style>