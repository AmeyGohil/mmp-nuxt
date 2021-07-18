<template>
<div class="container">
  <place-order-component/>
</div>
</template>

<script>
import placeOrderComponent from '@/components/placeOrderComponent'
export default {
  layout: 'customer',
  components:{
    'place-order-component':placeOrderComponent
  },
  data () {
    return {
      img:'',
    }
  }
}
</script>

<style lang="css" scoped>
</style>