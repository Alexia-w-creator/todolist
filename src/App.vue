<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue';


export default {
  name: 'App',
  components: {
    ToDoList
  },
  data: ()=>({}),
}
</script>


<style>
#app {
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;

}
body{
  background: url(
    https://i.artfile.me/wallpaper/06-05-2023/1600x900/anime-mo-dao-zu-shi-vej-usyan-lan-vanczi-1646928.jpg
        );

}
#todolist
{
  height: 25%;
  width: 37%;
  position: relative;
  left: 110px; /* или right: -20px; */
}
#title {
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size: 3em;
  text-align: center;
}
input[type="text"]
{
    height: 4vh;
    width: 17vw;
    margin-right: 10px;
    border-radius: 5px;
    font-family: FreeMono, monospace;
}
input[type="date"]
{
    height: 4vh;
    /* width: 15vw; */
    margin-right: 10px;
    border-radius: 5px;
    font-family: FreeMono, monospace;
}
.btn {
    background-color: rgb(129, 176, 223);
    color: white;
    height: 4vh;
    width: 7vw;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: .9rem;
}


#list
{
  /* height: 100%; */
  width: 60%;
  /* text-align: left; */
}
.tasks__item__toggle--completed{
  text-decoration: line-through;
}
#task_n
{
  position: relative;
  left: 40px;
  top: -19px;
}
#task_d
{
  position: relative;
  left: 250px;
  top: -39px;
}
input[type = "checkbox"]
{
    width: 20px;
    height: 20px;
    cursor: pointer !important;

    position: relative;
    top: 3.5px; /* или bottom: -10px; */
}
.d-btn {
    background-color: rgb(198, 68, 68);
    color: white; 
    width: 27.2px;
    height: 27.2px;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: .9rem;
    position: relative;
    left: 405px;
    top: -65.5px;
}


.sort{
    display: grid;
    grid-template-columns: 75% 25%;
    margin: 1% 30% 0 28.5%;
}

li ul li div{
    list-style-type: none;
    display: grid;
    grid-template-columns: 5% 75% 20%;
    /* font-family: FreeMono, monospace; */
}

ul{
    /* margin: 5% 15% 0 15%; */
    list-style-type: none;
    font-family: FreeMono, monospace;
}

</style>