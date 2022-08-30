<template>
    <div id="app" class="input">
        <!-- <input type="text" v-model="InputContent" placeholder="당근을 추가해보세요. . ."/>
        <b-button class="list_add" v-on:click="sendDo" variant="outline-primary">당근 더하기</b-button> -->

        <b-input-group class="mt-3">
            <b-form-input type="text" class="list_search" v-model="InputContent" v-on:keyup.enter=sendDo placeholder="당근을 추가해보세요. . ."/>
            <b-input-group-append>
                <b-button class="list_add" v-on:click="sendDo" variant="outline-primary">당근 더하기</b-button>
            </b-input-group-append>
    </b-input-group>
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
            console.log("-----------------sendDo()...ed--------------------------\n")
        }
    }
}
</script>

<style>
.list_add, .list_search{
    height: 40px;
}
</style>