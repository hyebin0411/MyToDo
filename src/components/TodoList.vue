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
            <!-- <input type="checkbox" id="list_item_check"/> -->
            <b-form-checkbox id="list_item_check"></b-form-checkbox>

            <label for="list_item_check">
                <p class="list_item_content">{{ item.content }}</p>
            </label>

            <p class="list_item_date">{{ item.date }}</p>

            <p>item.id : {{item.id}}</p>

            <b-button class="list_item_delete" v-on:click="deleteList(index)" variant="outline-danger">delete</b-button>
        </li>
    </ul>
</template>

<script>
export default {
    props : ['p_content', 'p_date'],
    data : function(){
        return{
            arr : [],
            notdelete : true,
            TaskList : [
                {id : 1, check : false,  content : "Hey Boy!", date:"8/16 Tue."},
                {id : 2, check : false,  content : "Hello", date:"8/16 Tue."},
                {id : 3, check : false,  content : "Hi hani", date:"8/16 Tue."}
                
            ]
        }
    },
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("created")
    },
    beforeMount(){
        console.log("beforeMount")
    }
    ,
    mounted(){
        console.log("mounted")
    },
    beforeUpdate(){
        console.log("\n===============beforeUpdate...ing===================")

        if(this.p_content == ""){
            alert("공백은 당근이 될 수 없습니다")
        }

        if(this.notdelete && this.p_content != ""){
            this.doAdd();
            console.log("-----------------doAdd()...ed--------------------------")
        }
        this.notdelete = true;
    },
    updated(){
        console.log("\n===============updated...ing===================\n")
    },  
    methods : { 
        doAdd : function(){
            console.log("\n-----------------doAdd()...ing1--------------------------")
            var max = this.TaskList.reduce(function(a,b){
                return a>b.id ? a:b.id
            }, 0)
            console.log("-----------------doAdd()...ing2--------------------------")
            this.TaskList.push({
                id : max+1, check : false, content : this.p_content, date : this.p_date
            })
            console.log("-----------------doAdd()...ing3--------------------------\n")
        },
        deleteList : function(index){
            // console.log("index : "+index)
            this.TaskList.splice(index, 1);
            this.notdelete = false;
        }
    }
}
</script>

<style>
.list{
    margin-top: 20px;
}
.list_item{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.list_item_delete{
    height: 32px;
}
</style>