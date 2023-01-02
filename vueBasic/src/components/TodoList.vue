<script>
export default {
  el: "todo",
  data() {
    return {
      inputTodo: "",
      todo: "",
      todoList: [],
      state: 'active',
    };
  },

  computed: {
    filterList() {
      return this.todoList.filter(todo => todo.state === this.state)
    },
  },

  // beforeCreate : function() {
  //   console.log("beforeCreate");
  // },

  // created : function() {
  //   console.log("created");
  // },

  // mounted : function() {
  //   console.log("mounted");
  // },

  // updated : function() {
  //   console.log("updated");
  // },

  watch: {
    state(state) {
      console.log("state: " + state);
      // state = this.state;
    },
  },

  methods: {
    changeState(state) {
      console.log(state);
      this.state = state;
    },
    
    setTodo() {
      if(this.inputTodo == '' || this.inputTodo == null) {
        alert("할 일을 입력해주세요.");
      } else {
        this.todo = this.inputTodo;
        this.todoList.push(
          {
            todo: this.todo,
            state: this.state
            }
          );
          this.inputTodo = ""
        }
    },

    delTodo(list) {
      console.log(list)
      list.state = list.state === 'active' ? 'done' : 'active'
    },

  },
};
</script>


<template>
  <div id="todo">
    <div>
      <input type="text" v-model="inputTodo" @keyup.enter="setTodo" />
    </div>

    <b-list-group>
      <div v-for="list in filterList" >
        <b-list-group-item class="btn btn-sm" v-model="state" @click="delTodo(list)">{{ list.todo }}</b-list-group-item>
      </div>
    </b-list-group>

    <br>

    <button type="button" class="btn btn-sm" @click="setTodo">submit</button>
    <div>
      <button type="button" class="btn btn-sm" @click="changeState('all')">all</button>
      <button type="button" class="btn btn-sm" @click="changeState('active')">active</button> 
      <button type="button" class="btn btn-sm" @click="changeState('done')">done</button>
    </div>
  </div>
</template>