<template>
    <ul class='list'>

        <!-- <li class='list_item'>
            <input type="checkbox" id="list_itme_1"/>
            <label for='list_item_1'>
                <p class='list_text'>Hello Boy</p>
            </label>
            <p class='list_date'>8/16</p>
            <button class='list_delete'>delete</button>
        </li> -->

        <!-- <li v-for="item in TaskList" v-bind:key="item.id">
            ID . {{ item.id }} content . {{ item.content }} date . {{ item.date }}
        </li> -->

        <li class="list_item" v-for="(item, index) in TaskList" v-bind:key="item.id">
            <input type="checkbox" id="list_item_check"/>

            <label for="list_item_check">
                <p class="list_item_content">{{ item.content }}</p>
            </label>

            <p class="list_item_date">{{ item.date }}</p>

            <p>item.id : {{item.id}}</p>

            <button class="list_item_delete" v-on:click="deleteList(index)">delete</button>
        </li>
    </ul>
</template>

<script>
export default {
    props : ['p_content', 'p_date'],
    data : function(){
        return{
            delete : false,
            TaskList : [
                {id : 1, check : false,  content : "Hey Boy!", date:"8/16 Tue."},
                {id : 2, check : false,  content : "Hello", date:"8/16 Tue."},
                {id : 3, check : false,  content : "Hi hani", date:"8/16 Tue."}
                
            ]
        }
    },    
    beforeUpdate(){
        if(this.delete == false){
            this.doAdd();
        }else{this.delete=true}
    },        
    methods : { 
        doAdd : function(){
            var max = this.TaskList.reduce(function(a,b){
                return a>b.id ? a:b.id
            }, 0)
            this.TaskList.push({
                id : max+1, check : false, content : this.p_content, date : this.p_date
            })
        },
        deleteList : function(index){
            // console.log("index : "+index)
            this.delete = true;
            this.TaskList.splice(index, 1)
        }
    }
}
</script>

<style>
.list_item{
    display: flex;
    justify-content: space-between;
}
</style>