<template>
    <div id="app">
        <!--<h2>하하하 이게 바로 라우터다</h2>-->
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>