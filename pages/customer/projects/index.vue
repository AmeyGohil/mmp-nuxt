<template>
<div class="container">
  <h3 class="text-dark mb-4">
    My Projects
  </h3>
  <my-projects/>
</div>
</template>

<script>
import myProjects from '~/components/customer/myProjectsComponent'

export default {
  layout:'dashboard-customer',
  components:{
    'my-projects':myProjects
  }
}
</script>

<style>

</style>