<template>
    <div>
        <TodoHeader />
        <TodoNavbar />
        <TodoTitle v-bind:list_length="list_length"/>
        <TodoInput v-on:newTask="send_Do"></TodoInput>
        <TodoController v-on:AllCleanBtnClicked="send_allCleanEvent"/>
        <TodoList 
            v-bind:p_content="content" 
            v-bind:p_date="date"
            v-bind:listAllClean="listAllClean"
            v-on:listlength="Send_length"></TodoList>
    </div>
</template>

<script>
import  TodoHeader from "../components/TodoHeader.vue"
import  TodoNavbar from '@/components/TodoNavbar.vue';
import  TodoController from "../components/TodoController";
import  TodoInput from "../components/TodoInput";
import  TodoTitle from "../components/TodoTitle";
import  TodoList from "../components/TodoList";

export default {
    data : function(){
        return{
            content : "", 
            date : "",
            listAllClean : false,
            list_length : 0
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
        TodoList,
        TodoNavbar
    },
    methods : {
        send_Do : function (content, date){
            console.log('App.send__Do : '+"   "+content+"   "+date)
            this.content = content;
            this.date = date;
        },
        send_allCleanEvent : function(){
            this.listAllClean = !this.listAllClean;
        },
        Send_length : function(list_length){
            this.list_length = list_length;
            console.log("App.Send_length : "+this.list_length)
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