<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="container-fluid">
            <h3 class="text-dark mb-1">Project -{{computed_order_details.name}}</h3>
            <div v-for="(item,i) in computed_order_details_for_print" v-bind:key="i">
              <p><b>{{item.key}}</b></p>
              <p>{{item.value}}</p>
            </div>
        </div>
      </div>
      <div class="col-md-6">
        <timeline-and-chat :status="$route.params.orderDetails.status" :order_id="computed_order_details.id"/>
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
      printData:[
        'name',
        'description',
        'status',
        'created_at'
      ]
    }
  },
  computed:{
    computed_order_details(){
      return this.$route.params.orderDetails
    },
    computed_order_details_for_print(){
      return this.printData
        .map(key => {
          return {
            key,
            value: this.computed_order_details[key] || 'n/a',
          }
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>