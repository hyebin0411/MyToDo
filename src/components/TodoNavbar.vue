<template>
    <!-- <nav class="navbar navbar-expand-lg bg-light"> -->
        <nav class="navbar" style="background-color: whitesmoke;">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <!-- <i class="bi bi-archive-fill"></i> -->
                </a>
                <button class="navbar-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

        <div style="width: 300px" class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><i class="bi bi-archive-fill"></i></h5> <!--hidden 사이드바 제목-->
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> <!--hidden sidebar의 x 표시 버튼-->
            </div>
            <div class="offcanvas-body">
                <ul class="list-group list-group-flush">
                    <router-link to="/home">
                        <li class="list-group-item list-group-item-action">
                            <i class="bi bi-house-fill" style="color: black"> home</i>
                        </li>
                    </router-link>
                    <router-link to="/month">
                        <li class="list-group-item list-group-item-action">
                            <i class="bi bi-calendar-fill" style="color: black"> month</i>
                        </li>
                    </router-link>
                    <router-link to="/set">
                        <li class="list-group-item list-group-item-action">
                            <i class="bi bi-gear-fill" style="color: black"> setting</i>
                        </li>
                    </router-link>
                    <router-link to="/etc">
                        <li class="list-group-item list-group-item-action">
                            <i class="bi bi-balloon" style="color: black"> etc</i>
                        </li>
                    </router-link>
                    <!-- <li class="list-group-item list-group-item-action">
                        <router-link to="/month">
                            <i class="bi bi-calendar-fill" style="color: black"> month</i>
                        </router-link>
                    </li>
                    <li class="list-group-item list-group-item-action">
                        <router-link to="/side">
                            <i class="bi bi-gear-fill" style="color: black"> setting</i>
                        </router-link>
                    </li> -->
                </ul>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
    nav{
        height: 50px;
    }
    .navbar-button{
        padding: 0; border: none; background: none;
    }
    a{
        font-size: larger;
    }
    a:link {
        color: blue; text-decoration: none;
    }
    a:visited{
        color: blue; text-decoration: none;
    }
    a:hover{
        color: blue; text-decoration: none;
    }
    a:active{
        color: blue; text-decoration: none;
    }

</style>