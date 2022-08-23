<template>
    <div class="controller">
        <div id="app" class="controll">
            <label for="list_order">Order</label>
            <select name="list_order" id="list_order" class="selectbox">
                <option value="list_latest">latest</option>
                <option value="list_name">name order</option>
                <option value="list_heart">heart order</option>
            </select>
        </div>
        <button class="list_delete">당근 다 지우기</button>
    </div>
</template>

<script>
export default {

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
.controll{

}

.selectbox{

}
.list_delete{

}
</style>