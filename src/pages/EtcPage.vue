<template>
    <div>
        <TodoHeader />

        <TodoNavbar />

        <!-- <TodoCalendarVue /> -->

        <h3>EtcPage 입니당~~ ㅎㅎ</h3>
        <i class="bi bi-balloon" style="color: red"> etc</i>
    </div>
</template>

<script>
import TodoHeader from "../components/TodoHeader.vue"
import TodoNavbar from '@/components/TodoNavbar.vue';
// import TodoCalendarVue from "@/components/TodoCalendar/TodoCalendar.vue";

export default {
    components : {
        TodoHeader,
        TodoNavbar,
        // TodoCalendarVue,
    },
}
</script>

<style>

</style>