<template>
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <!--<h1><a href="index.html">Make My Part</a></h1>-->
         <a href="index.html"><img src="assets/img/logo.PNG" alt="" class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><nuxt-link class="nav-link" to="/">Home</nuxt-link></li>
          <li><nuxt-link class="nav-link" to="/services">Services</nuxt-link></li>
          <li><nuxt-link class="nav-link" to="/aboutus">About Us</nuxt-link></li>
          <li><nuxt-link class="signup-btn" to="/register">Register</nuxt-link></li>
          <li><nuxt-link class="login-btn" to="/login">Login</nuxt-link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style>

</style>