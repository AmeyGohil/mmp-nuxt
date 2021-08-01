<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex justify-content-between align-items-center mb-4">
          <h3 class="text-dark mb-0">Upload a new design</h3><a class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="index.html#"><i class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a>
      </div>
      <div class="row">
          <div class="col">
              <div class="files color form-group mb-3"><input type="file" multiple="" name="files"></div>
          </div>
      </div>
      <div class="row"></div>
    </div>
    <div class="container">
      <div class="row">
          <div class="col-md-12 offset-md-4"><a class="btn btn-light btn-icon-split" role="button"></a></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
          <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Tolerance" readonly=""></div>
          <div class="col-md-6"><input type="number"></div>
          <div class="col"><input class="form-control-plaintext" type="text" value="Quantity" readonly=""></div>
          <div class="col"><input type="number"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
          <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Process" readonly=""></div>
          <div class="col-md-6">
              <div class="dropdown"><button class="btn btn-primary dropdown-toggle d-table" aria-expanded="false" data-bs-toggle="dropdown" type="button">Dropdown </button>
                  <div class="dropdown-menu"><a class="dropdown-item" href="index.html#">Laser Cutting</a><a class="dropdown-item" href="index.html#">Milling</a><a class="dropdown-item" href="index.html#">Heat Treatment</a><a class="dropdown-item" href="index.html#">Shaping</a><span class="dropdown-item-text">Text Item</span></div>
              </div>
          </div>
      </div>
    </div>
    <div class="dashed_upload"></div>
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