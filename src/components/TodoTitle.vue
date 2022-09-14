<template>
    <div id="title" class="title">
        <p class="title__count">
            <span class="title__count-task">{{ task_count }}</span>개의
        </p>
        <p class="title__anne">
            <span class="title__anne-name">{{ task_name }}</span>이 기다리고 있습니다.
        </p>
    </div>
</template>

<script>
export default {
    props : ['list_length'],
    watch : {
        list_length(){
            this.task_count = this.list_length
        }
    },
    data(){
        return{
            task_count : 0,
            task_name : "오늘당근"
        }
    }
}
</script>

<style lang="scss">
.title{
    margin-left: 20px;
    margin-top: 10px;
    &__count { 
        font-size : 1.6rem;
        &-task {
            background-color:lightgray;
            font-size : 2.6rem;
            font-weight: bold;
        }
        
    }
    &__anne {
        font-size : 1.6rem;
        &-name {
            background-color:lightgray;
            font-size : 2.6rem;
            font-weight: bold;
        }
    }
}
</style>