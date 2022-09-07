<template>
    <div>
        <TodoHeader />
        <!-- <b-card title="Card Title" no-body>
            <b-card-header header-tag="nav">
            <b-nav>
                <b-nav-item-dropdown
                id="my-nav-dropdown"
                text="="
                toggle-class="nav-link-custom"
                right
                >
                <b-dropdown-item>One</b-dropdown-item>
                <b-dropdown-item>Two</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Three</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-nav>
            </b-card-header>

            <b-card-body class="text-center">
            <b-card-text>
                With supporting text below as a natural lead-in to additional content.
            </b-card-text>

            <b-button variant="primary">Go somewhere</b-button>
            </b-card-body>
        </b-card> -->
        <b-navbar toggleable type="light" variant="light" 
        class="shadow p-3 mb-5 bg-white rounded p-3 mb-2 bg-secondary text-white">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Link 1</b-nav-item>
                <b-nav-item href="#">Link 2</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <h3>MonthPage 입니다. gg</h3>
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
export default {
    components: { TodoHeader }
}
</script>

<style>

</style>