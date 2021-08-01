<template>
    <div>
        <div class="container-fluid">
            <h3 class="text-dark mb-1">View Quotation</h3>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Product Name" readonly=""><input class="form-control-plaintext" type="text" value="Quantity" readonly=""></div>
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="value" readonly=""><input class="form-control-plaintext" type="text" value="value" readonly=""></div>
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Tolerance" readonly=""><input class="form-control-plaintext" type="text" value="Time estimated" readonly=""></div>
                <div class="col-md-6"><input class="form-control-plaintext" type="text" readonly="" value="value"><input class="form-control-plaintext" type="text" value="value" readonly=""></div>
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Material" readonly=""><input class="form-control-plaintext" type="text" value="Rate" readonly=""></div>
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="value" readonly=""><input class="form-control-plaintext" type="text" value="value" readonly=""></div>
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Total amount" readonly=""></div>
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="value" readonly=""></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  layout: 'dashboard-customer',
  components:{},
  data () {
    return {
      img:'',
    }
  }
}
</script>

<style lang="css" scoped>
</style>