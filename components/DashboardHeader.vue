<template>
    <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
            <!-- <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input class="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
                    <button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form> -->
            <ul class="navbar-nav flex-nowrap ms-auto">
                <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="index.html#"><i class="fas fa-search"></i></a>
                    <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                        <form class="me-auto navbar-search w-100">
                            <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
                                <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                            </div>
                        </form>
                    </div>
                </li>
                <notification-dropdown />
                <div class="d-none d-sm-block topbar-divider"></div>
                <li class="nav-item no-arrow">
                <div class="nav-item no-arrow">
                    <a class="nav-link">
                    <span class="d-none d-lg-inline me-2 text-gray-600 small">{{$strapi.user.username}}</span>
                    </a>
                </div>
                </li>
                <div class="d-none d-sm-block topbar-divider"></div>
                <li class="nav-item no-arrow">
                    <div class="nav-item no-arrow">
                        <a class="nav-link" @click="logout" title="Click here to Sign out">
                            
                            <i class="fa fa-power-off"></i>
                        </a>
                        <!-- <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                            <nuxt-link class="dropdown-item" :to="`/${$strapi.user.role.name}/profile`">
                                <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                                &nbsp;Profile
                            </nuxt-link>
                            <a class="dropdown-item" href="index.html#">
                                <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                                &nbsp;Settings
                            </a>
                            <a class="dropdown-item" href="index.html#">
                                <i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                                &nbsp;Activity log
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" @click="logout">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                                &nbsp;Logout
                            </a>
                        </div> -->
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import notificationDropdown from '~/components/dashboard/notificationDropdown'
export default {
    props: ['role'],
    components:{
        'notification-dropdown':notificationDropdown
    },
    methods:{
        logout(){
            console.log("logout")
            this.$strapi.logout()
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>