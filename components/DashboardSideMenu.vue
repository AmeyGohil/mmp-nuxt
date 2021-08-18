<template>
    <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div class="container-fluid d-flex flex-column p-0">
            <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
                <img :src="computedLogoSrc" alt="Make My Part" height="20" width="20"/>
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
                <li class="nav-item" v-if="role==='manufacturer'">
                    <nuxt-link class="nav-link" :to="'/'+role">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>
                            Upload Quotation
                        </span>
                    </nuxt-link>
                </li>

                <li class="nav-item">
                    <nuxt-link class="nav-link" :to="'/' + role + '/profile'">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" :to="'/' + role + '/projects'">
                    <i class="fas fa-table"></i><span>My Projects</span>
                    </nuxt-link>
                    </li> 
                <li class="nav-item" v-if="role==='customer'">
                    <nuxt-link class="nav-link" :to="'/' + role + '/view_quotation'">
                    <i class="fas fa-table"></i><span>View Quotation</span>
                    </nuxt-link>
                    </li>
                <li class="nav-item" v-if="role==='manufacturer'">
                    <nuxt-link class="nav-link" :to="'/' + role + '/projects_bid'">
                    <i class="fas fa-table"></i><span>Bid for Projects</span>
                    </nuxt-link>
                    </li>
            </ul>
            <div class="text-center d-none d-md-inline">
                <button class="btn rounded-circle border-0" id="sidebarToggle" type="button">
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['role'],
    computed:{
        computedLogoSrc(){
            return `${process.env.baseUrl}/assets/img/logo.PNG`
        }
    }
}
</script>

<style>

</style>