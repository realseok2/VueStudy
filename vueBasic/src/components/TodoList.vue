<script>
export default {
  data() {},
};
</script>

<template>
  <div id="todo">
    <input type="text" v-model="todo" @keyup="addTodo"> 
  </div>
</template>
