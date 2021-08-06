<template>
    <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="index.html#">
                <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                <div class="sidebar-brand-text mx-3"><span>MakeMyPart</span></div>
            </a>
            <hr class="sidebar-divider my-0">
            <ul class="navbar-nav text-light" id="accordionSidebar">
                <li class="nav-item" v-if="role==='customer'">
                    <nuxt-link class="nav-link" :to="'/'+role">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>
                            Upload Design
                        </span>
                    </nuxt-link>
                </li>
                <li class="nav-item" v-else>
                    <nuxt-link class="nav-link" :to="'/'+role">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>
                            Upload Quotation
                        </span>
                    </nuxt-link>
                </li>
                <li class="nav-item"><nuxt-link class="nav-link" :to="'/' + role + '/profile'"><i class="fas fa-user"></i><span>Profile</span></nuxt-link></li>
                <li class="nav-item"><nuxt-link class="nav-link" :to="'/' + role + '/projects'"><i class="fas fa-table"></i><span>My Projects</span></nuxt-link></li> 
                <li class="nav-item"><nuxt-link class="nav-link" :to="'/' + role + '/current_project'"><i class="fas fa-table"></i><span>Current Project</span></nuxt-link></li>
                <li class="nav-item"><nuxt-link class="nav-link" :to="'/' + role + '/view_quotation'" v-show="role==='customer'"><i class="fas fa-table"></i><span>View Quotation</span></nuxt-link></li>
            </ul>
            <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['role'],
}
</script>

<style>

</style>