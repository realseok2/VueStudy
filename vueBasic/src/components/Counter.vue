<script>
  export default{
    el : "todo",
    data() {
      return {
        count : 0,
        submitCount : "",
        testText : "Hello Friend"
      }
    },

    methods : {
      increment() {
        count : this.count++;
        // console.log(count);
        console.log(this.count);
      },

      decrement() {
        count : this.count--;
        // console.log(count);
        console.log(this.count);
      },

      submit() {
        this.submitCount = this.count;
        console.log(this.submitCount);
      }
    }
  }
</script>

<template>
  <div id="todo">

    <div>
      {{ count }}
      <br><br>
      <div>
        <button type="button" @click="increment">+</button>
        <button type="button" @click="decrement">-</button>
      </div>
      <br>
      <div>
        <button type="button" @click="submit">SUBMIT</button>
      </div>
      {{ submitCount }}
      <br>
      {{ testText }}
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#app {
   display:none;
}

#axios {
   display:none;
}
</style>
