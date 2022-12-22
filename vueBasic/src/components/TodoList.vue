<script>
export default {
  el : "todo",
  data() {
    return {
      state   : true,
      todo    : "",
      userNm  : "",
      inputNm : "",
      todoList: [],
    }
  },

  watch: {
      state (state) {
          //data -> state 데이터가 변경될 때 실행
          console.log('state: ' + state)
          this.state = state;
      },
  },

  methods : {
    //엔터 눌렀을 때
    setNm() {
      this.userNm = this.inputNm;
      console.log(this.state);
    },

    //submit 클릭했을 때
    getNm() {
      this.userNm = this.inputNm;
      if(this.userNm == '') {
        console.log("No Name");
      } else {
        console.log("ㅋㅋㅋㅋㅋ");

        this.todoList.push(this.userNm);
        console.log(this.todoList);

        // axios.get('211.47.239.80:8080/get-todo/홍길동')
        //     .then((res) => {
        //         alert(res);
        //         console.log(res);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     })
        //     .finally(() => {
        //       console.log("last");
        //     });
      }
    },

    delNm() {
      console.log("delete");
      // this.todoId.state = false;

      // if(this.state == true) {
      //   this.state = false;
      //   return;
      // } else if(this.state == false) {
      //   this.state = true;
      //   return;
      // }
      this.todoList.forEach(state => {
        console.log("state = " + state);
        // this.state = false;
      });


    },
  }
};
</script>

<template>
  <div id="todo">
    <div>
      <input type="text" v-model="inputNm" @keyup.enter="setNm">
    </div>

    <br>
    
    <div>
      [ {{ userNm }} ]
    </div>

    <div class="todoArr" v-for="todoList in todoList" @click="delNm">
      {{ todoList }}
    </div>

    <br>
    
    <div>
      <button type="button" @click="getNm">submit</button>
    </div>

  </div>
</template>