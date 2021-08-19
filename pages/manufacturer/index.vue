<template>
  <div class="container-fluid">
    <h3 class="text-dark mb-4">Bid for Projects</h3>
    <bid-for-projects-component />
  </div>
</template>

<script>
import BidForProjectsComponent from '../../components/dashboard/bidForProjectsComponent.vue'
export default {
  layout: 'dashboard-manufacturer',
  components:{BidForProjectsComponent},
  data () {
    return {
      img:'',
    }
  }
}
</script>

<style lang="css" scoped>
</style>