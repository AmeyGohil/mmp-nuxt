<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="container-fluid">
            <h3 class="text-dark mb-1">Project -{{$route.params.orderDetails.name}}</h3>
        </div>
      </div>
      <div class="col-md-6">
        <timeline-and-chat :status="$route.params.orderDetails.status"/>
      </div>
    </div>
  </div>
</template>

<script>
import timelineAndChat from '~/components/customer/timelineAndChatComponent'

export default {
  layout: 'dashboard-customer',
  components:{
    'timeline-and-chat': timelineAndChat
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>