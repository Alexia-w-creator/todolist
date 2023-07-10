<template>
    <div class="task">
        <!-- <input type="checkbox" id="checkbox" v-model="checked" @change="toggleCompleted()"> -->
        <!-- <label for="checkbox">{{ task_name}} {{ task_date }}</label> -->
        <!-- <label for="checkbox">{{ this.checked }}</label> -->
        <input type="checkbox" id="checkbox" v-model="checked">
        <!-- <label for="checkbox">{{ checked }}</label> -->
        <div id="task_n">

        <label for="task_n">{{ task_name }}</label>
        </div>
        <div id="task_d">
            <label for="task_d">{{ task_date }}</label>
            
        </div>

        <button 
                class="d-btn"
                @click="deleteTask()"
            >

                <i class="fa fa-trash"></i> 
                <!-- Delete -->
            </button>
    </div>
</template>

<script>
export default{
    name: 'TodoTaskItem',
    props: {
        task_name: {
            type: String
        },
        task_date: {
            type: Date
        },
        // checked: {
        //     type: String
        // }
    },
    methods:{
        showTask(){
            console.log(this.task_name)
        },
        deleteTask(){
            this.$emit('deleteTask')
        },
        // toggleCompleted() {
        //     return this.checked === " " ? "checked" : " "
        // }
    }
}

</script>