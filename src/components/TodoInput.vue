<template>
    <div id="app" class="input">
        <input type="text" v-model="InputContent" placeholder="당근을 추가해보세요. . ."/>
        <button class="list_add" v-on:click="sendDo">당근 더하기</button>
    </div>
</template>

<script>
export default {
    data : function(){
        return{
            InputContent : "",
            InputDate : ""
        };
    },
    created(){
        const now = new Date();

        const month = now.getMonth() + 1;
        const date = now.getDate();

        const weekList = new Array("Sun.", "Mon.", "Tue.","Wed.","Thu.","Fri.","Sat.");
        const week = weekList[now.getDay()];
        this.InputDate = `${month}/${date} ${week}`;
    },
    methods : {
        sendDo : function(){
            console.log('sendDo : '+"   "+this.InputContent+"   "+this.InputDate)
            this.$emit('newTask', this.InputContent, this.InputDate)
        }
    }
}
</script>

<style>
.list_add{
    height: 37px;
}
</style>