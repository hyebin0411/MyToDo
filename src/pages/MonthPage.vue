<template>
    <div>
        <TodoHeader />

        <TodoNavbar />

        <h3>MonthPage 입니다. gg</h3>
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoNavbar from '@/components/TodoNavbar.vue';

export default {
    components: { TodoHeader, TodoNavbar  },
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
