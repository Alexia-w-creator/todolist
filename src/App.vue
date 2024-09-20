<template>
  <div class="todolist">

    <div class="title has-text-centered">
      Todo list
    </div>

    <form
      @submit.prevent="addTodo"
    >

      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input 
            v-model="newTask.task"
            class="input" 
            type="text" 
            placeholder="Add task"
          >
          <!-- {{ newTask.task }} -->
        </p>
        <p class="control is-expanded">
          <input 
            v-model="newTask.date"
            class="input" 
            type="date"
          >
          <!-- {{ newTask.date }} -->
        </p>
        <p class="control">
          <button 
            :disabled="!newTask.task"
            class="button is-info"
          >
            Add
          </button>
        </p>
      </div>
    </form>



    <div 
      v-for="todo in todos"
      class="card mb-5"
      :class="{'has-background-success-light': todo.done}"
    >
      <div class="card-content">
        <div class="content">

          <div class="columns is-mobile">
            <div 
              class="column mt-2"
              :class="{'has-text-success line-through':
              todo.done}"
            >
              {{ todo.task }}
            </div>
            <div 
              class="column mt-2"
              :class="{'has-text-success line-through':
              todo.done}"
            >
              {{ todo.date }}
            </div>
            <div class="column is-5 has-text-right">
              <button 
                @click="toggleDone(todo.id)"
                class="button"
                :class="todo.done ? 'is-success':
                'is-light'"
              >
                &check;
              </button>
              <button 
                @click="deleteTodo(todo.id)"
                class="button is-danger ml-2"
              >
                &cross;
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>


<script setup>
import {ref, onMounted} from 'vue';
import { db } from '@/firebase';
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { Timestamp } from "@firebase/firestore";


const todosCollectionRef = collection(db, "todos");

const todos = ref([
  // {
  //   id:'id1',
  //   task:'Walk',
  //   date:'2023-05-06',
  //   done: false
  // },
  // {
  //   id:'id2',
  //   task:'Eat',
  //   date:'2023-05-16',
  //   done: false
  // }
])

onMounted(async()=>{

  onSnapshot(collection(db, "todos"), (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      let jsDate = timestampToDate(doc.data().date);

      const todo = {
        id: doc.id,
        task: doc.data().task,
        date: jsDate,
        done: doc.data().done
      }
      fbTodos.push(todo)
      sortTasks(fbTodos);
      });
      todos.value = fbTodos;
  });
})

const newTask = ref({
  task:'',
  date:''
})
const addTodo = ()=>{
  let jsDate = MygetTime(newTask._rawValue.date);
  console.log(newTask._rawValue.date)
  addDoc(collection(db, "todos"), {
    task: newTask._rawValue.task,
    date: jsDate,
    done: false
  });

  // if(newTask._rawValue.date =='')
  // {
  //   newTask._rawValue.date = getTodayDate();
  // }

  // const newTodo = {
  //   id:'',
  //   task:newTask._rawValue.task,
  //   date:newTask._rawValue.date,
  //   done: false
  // }
  // todos.value.unshift(newTodo);
  newTask.value = {
    task:'',
    date:''
  }

}
function MygetTime(date){
  let jsDate;
  if(date == ''){
    jsDate = new Date(getTodayDate());
  }
  else {jsDate = new Date(date);}
  const created = Timestamp.fromDate(jsDate);
  console.log(created);
  return (created)
}



function getTodayDate(){
  let curDate = new Date();
    let year, month, day;
    year = curDate.getFullYear();
    month = String(curDate.getMonth()+1).padStart(2, '0');
    day=String(curDate.getDate()).padStart(2, '0');
    curDate = year + '-' +month+'-'+day;
  return curDate;
}

function timestampToDate(date){
  let jsDate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
  // console.log(jsDate);
  let year, month, day;
  year = jsDate.getFullYear();
  month = String(jsDate.getMonth()+1).padStart(2, '0');
  day=String(jsDate.getDate()).padStart(2, '0');

  jsDate = year + '-' +month+'-'+day;
  
  return jsDate;
}
function sortTasks(fbTodos) {
  return fbTodos.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
  });
}



const deleteTodo = id =>{
  deleteDoc(doc(todosCollectionRef, id));
}

const toggleDone = id =>{
  const index = todos.value.findIndex(todo=>todo.id===id);
  
  updateDoc(doc(todosCollectionRef, id), {
    done: !todos.value[index].done
  });
}
</script>

<style>
@import url('/node_modules/bulma/css/bulma.min.css');

#app {
  font-family: FreeMono, monospace;
  text-align: left;
  color: #2c3e50;

}
body{
  background: url(assets/background.jpg);
}

.title{
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size: 3em;
  text-align: center;

}

.todolist{
max-width: 550px;
padding: 20px;
/* width: 90%; */
margin: 0;
}
.line-through{
  text-decoration: line-through;
}
</style>