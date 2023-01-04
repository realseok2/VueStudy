<script>
  export default{
    el : "counter",
    data() {
      return {
        count : 0,
        submitCount : "",
        testText : "Counter Test"
      }
    },

    methods : {
      increment() {
        count : this.count++;
        console.log(this.count);
      },

      decrement() {
        count : this.count--;
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
  <div id="counter">
    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-img
          contain
          height="300"
          src="@/assets/logo.svg"
        />
        <div>
          {{ testText }}
          <br><br>
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
          <br>
          {{ submitCount }}
        </div>
      </v-responsive>
    </v-container>
  </div>
</template>