<template>
    <div class="icon-bar">
        <router-link to="/home">
            <i class="bi bi-house-fill">home</i>
        </router-link>
        <router-link to="/month">
            <i class="bi bi-calendar-fill">month</i>
        </router-link>
        <router-link to="/side">
            <i class="bi bi-gear-fill">setting</i>
        </router-link>
    </div>
</template>

<style>
.icon-bar {
    display: block;
    height: 100%;
    width: 70px;
    background-color: #555;
    position: fixed; 
    /* Fixed Sidebar (stay in place on scroll) */    
    /*z-index: 1;*/ 
    /* Stay on top */    
    top: 0; 
    /* Stay at the top */    
    left: 0;    
    overflow-x: hidden; 
    /* Disable horizontal scroll */    
    padding-top: 0;  
}
.icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 15px;
}
.icon-bar a:hover {
    background-color: #858585;
}
.active {
    background-color: #5eaf13;
}
</style>
