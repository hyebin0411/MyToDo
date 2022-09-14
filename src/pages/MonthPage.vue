<template>
    <div>
        <TodoHeader />

        <TodoNavbar />

        <h3>MonthPage 입니다. gg</h3>

        <TodoEverydayTitle />

        <TodoList /> <!--임시 리스트-->

        <TodoInput /> <!--임시 리스트 추가 -->

        <TodoTodayTitle />

        <TodoList />

        <TodoInput /> <!--임시 리스트 추가 -->
    </div>
</template>
<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoNavbar from '@/components/TodoNavbar.vue';
import TodoList from '@/components/TodoList.vue';
import TodoTodayTitle from '@/components/TodoTodayTask/TodoTodayTitle.vue';
import TodoEverydayTitle from '@/components/TodoEverydayTask/TodoEverydayTitle.vue';
import TodoInput from '@/components/TodoInput.vue';

export default {
    components: { TodoHeader, TodoNavbar, TodoList, TodoTodayTitle, TodoEverydayTitle, TodoInput },
    methods : {
        ClickIcon : function(){
            console.log('ClickIcon() :: ');
            this.onIconClick = true;
        }
    },
    data : function(){
        return{
            onIconClick : false,
        }
    }
}
</script>

<style>
</style>
