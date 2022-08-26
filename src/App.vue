<template>
    <div id="app">
        <TodoHeader />
        <TodoTitle />
        <TodoInput v-on:newTask="send_Do"></TodoInput>
        <TodoController />
        <TodoList 
            v-bind:p_content="content" 
            v-bind:p_date="date"></TodoList>
    </div>
</template>

<script>
import  TodoHeader from "./components/TodoHeader";
import  TodoController from "./components/TodoController";
import  TodoInput from "./components/TodoInput";
import  TodoTitle from "./components/TodoTitle";
import  TodoList from "./components/TodoList";

export default {
    name : 'app',
    data : function(){
        return{
            content : "", 
            date : ""
        }
    },
    // beforeUpdate(){
    //     alert("beforeUpdate")
    // },
    // updated(){
    //     alert("updated")
    // },
    components : {
        TodoHeader,
        TodoInput,
        TodoController,
        TodoTitle,
        TodoList
    },
    methods : {
        send_Do : function (content, date){
            console.log('send__Do : '+"   "+content+"   "+date)
            this.content = content;
            this.date = date;
        }
    }
};
</script>

<style>
body {
    text-align: center;
    background-color: #F6F6F6;
}
input {
    border-style: groove;
    width: 200px;
    height: 30px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>