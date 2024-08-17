<template>
    <!--
        <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src="/src/assets/AdminLTE-3.2.0/dis/img/AdminLTELogo.png" alt="AdminLTELogo"
            height="60" width="60">
        </div>
        -->

    <nav class="main-header navbar navbar-expand navbar-white navbar-light">

        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link btn btn-light border" data-widget="pushmenu" href="#" role="button">
                    << </a>
            </li>
        </ul>

        <ul class="navbar-nav ml-auto">

            <li class="nav-item">
                <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                    <i class="fas fa-search"></i>
                </a>
                <div class="navbar-search-block">
                    <form class="form-inline">
                        <div class="input-group input-group-sm">
                            <input class="form-control form-control-navbar" type="search" placeholder="Search"
                                aria-label="Search">
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
        </ul>
    </nav>

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" class="brand-link">
            <img src="/src/assets/AdminLTE-3.2.0/dis/img/AdminLTELogo.png" alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="/src/assets/AdminLTE-3.2.0/dis/img/user2-160x160.jpg" class="img-circle elevation-2"
                        alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search"
                        aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <!-- Dashboard -->
                    <li class="nav-item menu-open">
                        <router-link to="/dashboard" class="nav-link" active-class="active">
                            <p>Dashboard</p>
                        </router-link>
                    </li>
                    <!-- Manage User -->
                    <li class="nav-item menu-open">
                        <router-link to="/register" class="nav-link" active-class="active">
                            <p>Manage User</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style scoped>
.nav-link.active {
    background-color: #007bff;
}
</style>