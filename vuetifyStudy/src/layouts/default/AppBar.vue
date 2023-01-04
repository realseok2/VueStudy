<template>
  <v-card max-height="50px" fixed>
    <v-tabs class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <!-- Home영역 -->
      <router-link to="/" class="fontColorWhite">
        <v-tab value="one">Home</v-tab>
      </router-link>

      <!-- Counter영역 -->
      <router-link to="/counter" class="fontColorWhite">
        <v-tab value="two">Counter</v-tab>
      </router-link>

      <!-- TodoList영억 -->
      <router-link to="/todo-list" class="fontColorWhite">
        <v-tab value="three">TodoList</v-tab>
      </router-link>

      <!-- AxiosExam영역 -->
      <router-link to="/modal-test" class="fontColorWhite">
        <v-tab value="four">ModalTest</v-tab>
      </router-link>
    </v-tabs>
  </v-card>
</template>

<script lang="ts" setup>
//
</script>

<style>
.fontColorWhite {
  color: white;
}
</style>
