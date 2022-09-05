<template>
    <div class="controller">
        <div id="app" class="controll">
            <!-- <label for="list_order">Order</label> -->
            <b-form-select name="list_order" id="list_order" size="sm" class="mt-3">
                <option value="list_latest">latest</option>
                <option value="list_name">name order</option>
                <option value="list_heart">heart order</option>
            </b-form-select>
        </div>
        <b-button class="list_delete" variant="danger" v-on:click="ListAllClean">당근 다 지우기</b-button>
    </div>
</template>

<script>
export default {
    methods : {
        ListAllClean : function(){
            this.$emit('AllCleanBtnClicked')
        }
    }
}
</script>

<style>

.controller{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    /* margin-left: 50px;
    margin-right: 50px; */
    /* background-color:lightgray; */

}
.mt-3, .list_delete{
    height : 40px
}
.list_delete{
    margin-top: 15px;
}
</style>