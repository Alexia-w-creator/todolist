<template>
    <div id = "todolist">
        <div id="title">Todo list</div>
        <div id="enter-task">
            <input 
                type="text" 
                v-model="task.task"
                id="enter-task" 
                placeholder="Enter task" 
                >
                <!-- {{ task_name }} -->
            <input 
                type="date" 
                id="enter-date" 
                placeholder="Enter date" 
                v-model="task.date">
                
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <button 
                class="btn"
                @click="addTask()"
            >

                <i class="fa fa-plus"></i> 
                Add
            </button>
        </div>
        <div id="list">

            <ul>
                <li
                    v-for="(curTask, index) in tasks"
                    :key="index"
                >

                    <input type="checkbox" id="checkbox" v-model="curTask.checked">
                    <div id="task_n">
                        <span :class="className(curTask)">{{ curTask.task }}</span>
                    </div>
                    <div id="task_d">
                        <span :class="className(curTask)">{{ curTask.date }}</span>
                        
                    </div>

                    <button 
                            class="d-btn"
                            @click="deleteTask(index)"
                        >

                            <i class="fa fa-trash"></i> 
                            <!-- Delete -->
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>




export default{
    name: "ToDoList",
    data() {
        return {
            task:{
                task: '',
                date: "",
                checked: false
            },
            tasks: [
                {
                    task: "Eat",
                    date: "2023-05-15",
                    checked: false
                },
                {
                    task: 'Walk',
                    date: '2023-05-11',
                    checked: false
                }
            ]
        };
    },
    methods: {
        addTask() {
            if(this.task.date =='')
            {
                let curDate = new Date();
                let year, month, day;
                year = curDate.getFullYear();
                month = String(curDate.getMonth()+1).padStart(2, '0');
                day=String(curDate.getDate()).padStart(2, '0');
                this.task.date = year + '-' +month+'-'+day;
            }
            // console.log(this.task);
            
            this.tasks.push(this.task);
            this.sortTasks();
            this.task = {
                    task: '',
                    date: ''
                };
            // console.log(this.tasks);
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
            console.log(index);
        }, 
        sortTasks() {

            return this.tasks.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
            
        },
        toggleCompleted() {
            return this.checked === " " ? "checked" : " "
        },
        className(task) {
            let classes = ['tasks__item__toggle'];
            if (task.checked) {
                classes[0] = 'tasks__item__toggle--completed';
            }
            return classes[0];
        }
    },
    // components: { LineTask }
}
</script>