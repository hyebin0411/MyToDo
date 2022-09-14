<template>
    <header class="header">
        <h1 class="header__logo">MyToDo</h1>
        <p class="header__date">{{ timestamp }}</p>
    </header>
</template>

<script>
export default {
    data() {
        return {
            timestamp: ""
        };
    },
    created() {
        const now = new Date();

        const month = now.getMonth() + 1;
        const date = now.getDate();

        const weekList = new Array("Sun.", "Mon.", "Tue.","Wed.","Thu.","Fri.","Sat.");
        const week = weekList[now.getDay()];
        this.timestamp = `${month}/${date} ${week}`;

    }

};
</script>

<style lang="scss">
// .header{
//     &__logo {
//         font-family: 'OKCHAN';
//     }
//     &__date{
//         font-family: 'OKCHAN';
//     }
// }

.header__logo {
    font-family: 'OKCHAN';
    font-size: 20px;
    color:cornflowerblue;
    margin-top: 12px;
}

.header__date{
    font-family: 'OKCHAN';
    font-size: 20px;
    margin-top: 10px;
}

.header{
    background-color: #DCDCDC;//whitesmoke;
    display: flex;
    justify-content: space-between;
    height : 60px;
} 

@font-face {
    font-family: 'OKCHAN';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/OKCHAN.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
} 

</style>