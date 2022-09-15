<template>
    <div class="first-div">
        <b-list-group class='list_group'>
            <b-list-group-item class='list_item' style="display: flex;" v-for="(item, index) in TaskList" v-bind:key="item.id">
                <b-form-checkbox 
                    id="list_item_check" 
                    v-bind:value="item.id" 
                    v-model="val" 
                    @change="getcheckbox($event)"></b-form-checkbox>
                <label for="list_item_check">
                    <p v-if="font_no" class="list_item_content">{{ item.content }}</p>
                    <p v-else>{{ item.content }}</p>
                </label>
                <p class="list_item_date">{{ item.date }}</p>
                <p>item.id : {{item.id}}</p>
                <b-button class="list_item_delete" v-on:click="deleteList(index)" variant="outline-danger">delete</b-button>
            </b-list-group-item>
        </b-list-group>
    </div>
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
</template>

<script>
export default {
    props : ['p_content', 'p_date', 'listAllClean'],
    watch : {
        listAllClean(){
            this.TaskList = [];
            console.log("watch : listAllClean start")
            this.notdelete = false;
        },
        TaskList : {
            handler() {
                this.$emit('listlength', this.TaskList.length)
                console.log("List.watch : TaskList() "+this.TaskList.length)
            },
            deep: true
        }
    },
    data : function(){
        return{
            val : [],
            notdelete : true,
            font_no : false,
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
        console.log("List.created : TaskList() "+this.TaskList.length)
        console.log("List.created : TaskList "+JSON.stringify(this.TaskList))
        this.$emit('listlength', this.TaskList.length)
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
        console.log("delete : "+this.notdelete)
        if(this.p_content == "" && this.notdelete){
            alert("공백은 당근이 될 수 없습니다")
        }

        if(this.notdelete && this.p_content != ""){
            this.doAdd();
            console.log("-----------------doAdd()...end--------------------------")
        }
        this.notdelete = true;
        console.log("font_no : " +this.font_no)
        this.font_no = false;
        console.log("trans_font_no : " +this.font_no)
    },
    updated(){
        console.log("\n===============updated...ing===================\n")
        console.log(this.val + "\n")
    },  
    methods : { 
        doAdd : function(){
            console.log("\n-----------------doAdd()...start--------------------------")
            var max = this.TaskList.reduce(function(a,b){
                return a>b.id ? a:b.id
            }, 0)
            this.TaskList.push({
                id : max+1, check : false, content : this.p_content, date : this.p_date
            })
            //console.log("TaskList_length "+this.TaskList.length)
        },
        deleteList : function(index){
            this.TaskList.splice(index, 1);
            this.notdelete = false;
            this.$forceUpdate();
            console.log("deleteList start")
        },
        getcheckbox : function(e){
            this.notdelete = false;
            this.font_no = true;
            console.log("getcheckbox start"+e)
            console.log("font_no : " +this.font_no)
        }
    }
}
</script>

<style>
/* .list{
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
.list_item_content{
    text-decoration: line-through;
} */
.first-div{
    margin-top: 20px;
}
.list_group{ 
    width: 90%;
    margin: 0 auto;
}
.list_item{
    justify-content: space-between;
    margin-top: 0px;
}
</style>