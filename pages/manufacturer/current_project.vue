<template>
    <div>
        <div class="container-fluid">
            <h3 class="text-dark mb-1">Project - 'name'&nbsp;</h3>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Quotation" readonly=""></div>
                <div class="col-md-6"><button class="btn btn-primary" type="button">View</button></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Current Status" readonly=""></div>
                <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Display what manufacturer/admin puts" readonly=""></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12"><div class="stepwizard">
                    <div class="stepwizard-row">
                        <div class="stepwizard-step">
                            <button type="button" class="btn btn-default btn-circle">1</button>
                            <p>Cart</p>
                        </div>
                        <div class="stepwizard-step">
                            <button type="button" class="btn btn-primary btn-circle">2</button>
                            <p>Shipping</p>
                        </div>
                        <div class="stepwizard-step">
                            <button type="button" class="btn btn-default btn-circle" disabled="disabled">3</button>
                            <p>Payment</p>
                        </div> 
                    </div>
                </div></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3>Chat Box</h3>
                        </div>
                        <div class="card-body" style="height:233px;">
                            <ul class="list-group">
                                <li class="list-group-item" style="margin-bottom:6px;">
                                    <div class="d-flex media">
                                        <div></div>
                                        <div class="media-body">
                                            <div class="d-flex media" style="overflow:visible;">
                                                <div><img class="mr-3" style="width: 25px; height:25px;" src="/assets/img/user-photo4.jpg"></div>
                                                <div style="overflow:visible;" class="media-body">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <p><a href="Product&#32;Page.html#">Sara Doe:</a> This guy has been going 100+ MPH on side streets. <br>
                                                                <small class="text-muted">August 6, 2016 @ 10:35am </small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item" style="margin-bottom:6px;">
                                    <div class="d-flex media">
                                        <div></div>
                                        <div class="media-body">
                                            <div class="d-flex media" style="overflow:visible;">
                                                <div><img class="mr-3" style="width: 25px; height:25px;" src="/assets/img/user-photo4.jpg"></div>
                                                <div style="overflow:visible;" class="media-body">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <p><a href="Product&#32;Page.html#">Brennan Prill:</a> This guy has been going 100+ MPH on side streets. <br>
                                                                <small class="text-muted">August 6, 2016 @ 10:35am </small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul><button class="btn btn-light" style="margin-left:601px;margin-top:-9px;" type="button">Add Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  layout: 'dashboard-manufacturer',
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