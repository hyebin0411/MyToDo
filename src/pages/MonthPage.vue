<template>
    <div>
        <TodoHeader />
        <b-navbar type="light" variant="light">
            <b-navbar-nav>
                <b-nav-item href="#">
                    <i class="bi bi-archive-fill" v-on:click="ClickIcon"></i>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        <h3>MonthPage 입니다. gg</h3>
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
export default {
    components: { TodoHeader },
    methods : {
        ClickIcon : function(){
            console.log('ddddd')
        }
    }
}
</script>

<style>
</style>
