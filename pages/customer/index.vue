<template>
  <place-order/>
</template>

<script>
import placeOrder from '~/components/customer/placeOrder'
export default {
  layout: 'dashboard-customer',
  components:{
    'place-order': placeOrder
  },
  data () {
    return {
    
    }
  },
  mounted(){
    console.log(this.$strapi.user)
  }
}
</script>

<style lang="css" scoped>
</style>