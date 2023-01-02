<script>
  export default{
    el : "axios",
    data() {
      return {
        inputData : "",
        users : [],
        testText : "Hello Friend"
      }
    },

    methods : {
        getData() {
          const data = this;

          try {
            axios.get('http://211.47.239.80:8080/get-todo/홍길동')
            .then(function(response) {
              alert(response);
                console.log(response);
            });
          } catch {
            console.log("실패");
          }
        }

        // getData : function() {
        //     console.log("211.47.239.80:8080/get-todo/홍길동");
        //     axios.get('211.47.239.80:8080/get-todo/홍길동')
        //     .then(function(response){
        //         alert(response);
        //         console.log(response); // 객체 형태로 반환. 파싱작업 불필요
        //     });
        // }

    }
  }
</script>

<template>
  <div id="axios">
    <inputData />
    <br>
    <button class="btn btn-sm" v-on:click="getData">get user</button>
    <br>
    <div>{{ users }}</div>
  </div>
</template>
