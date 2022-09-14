<template>
    <div>
        <TodoHeader />

        <TodoNavbar />

        <h3>MonthPage 입니다. gg</h3>

        <TodoEverydayTitle />

        <TodoList /> <!--임시 리스트-->

        <TodoTodayTitle />

        <TodoList />
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoNavbar from '@/components/TodoNavbar.vue';
import TodoList from '@/components/TodoList.vue';
import TodoTodayTitle from '@/components/TodoTodayTask/TodoTodayTitle.vue';
import TodoEverydayTitle from '@/components/TodoEverydayTask/TodoEverydayTitle.vue';

export default {
    components: { TodoHeader, TodoNavbar, TodoList, TodoTodayTitle, TodoEverydayTitle  },
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
