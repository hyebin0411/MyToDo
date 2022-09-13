<template>
    <div>
        <TodoHeader />
        <b-navbar class="nav_bar" toggleable="sm" type="light" variant="light">
            <i class="bi bi-list-check" @click="ClickIcon"></i>
        </b-navbar>
        <Transition name="slide-fade" mode="in-out">
            <div v-if="onIconClick">
                따라따라따닷
                <b-navbar class="nav_bar" toggleable="sm" type="light" variant="light">
                    <i class="bi bi-list-check" @click="ClickIcon"></i>
                </b-navbar>
                <!-- <SidePage /> -->
            </div>
        </Transition>
        <h3>MonthPage 입니다. gg</h3>
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
// import SidePage from './SidePage.vue';
export default {
    components: { TodoHeader },
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
    nav_bar{
        height: 60px;
    }
    .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    }
</style>
