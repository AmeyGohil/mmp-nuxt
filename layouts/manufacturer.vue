<template>
<div class="row">
  <div class="col-3" style="background-color:blue;color:white;height:100vh;text-decoration:none;position:fixed">
      <nav class="mb-3 mt-5 p-1">
        <h5 class="mb-5 ml-3">
          Make My Part
        </h5>
        <b-nav vertical>
          <b-nav-item><nuxt-link class="nav-link" to="/manufacturer">View available orders</nuxt-link></b-nav-item>
          <b-nav-item><nuxt-link class="nav-link" to="/manufacturer/projects">My Projects</nuxt-link></b-nav-item>
          <b-nav-item><nuxt-link class="nav-link" to="/manufacturer/profile">Profile</nuxt-link></b-nav-item>
        </b-nav>
      </nav>
   
  </div>
  <div class="col-9" style="margin-left:25%;">
    <nuxt/>
  </div>
</div>   
</template>

<script>
export default {

  middleware: 'authManufacturer',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="css" scoped>
.nav-link{
  color:white;
  text-decoration:none;
}
</style>