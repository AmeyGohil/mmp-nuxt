<template>
    <div>
        <div class="container-fluid">
                    <h3 class="text-dark mb-1">Quotation HTML</h3>
        </div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="text-primary m-0 fw-bold">Basic Card Example</h6>
            </div>
            <div class="card-body">
                <section>
                    <div class="container">
                        <div class="row mt-4">
                            <div class="col">
                                <div class="card shadow-sm mb-2 db-graph">
                                    <div class="card-header p-2">
                                        <h6 class="text-white m-0 font-md">New quotation</h6>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-9 col-xl-9">
                                                    <div class="box-bg">
                                                        <div class="row">
                                                            <div class="col-md-2 col-xl-2 align-self-center font-md text-dark-blue"><label class="col-form-label p-0" for="table-no"><strong>Table No.:</strong><br></label></div>
                                                            <div class="col-md-4 col-xl-3">
                                                                <div class="mb-0 form-group"><select class="form-select form-select-sm font-sm">
                                                                    <option value="1" selected="">-- Choose Table --</option>
                                                                    <option value="1">SG1-TB1</option>
                                                                    <option value="2">SG1-TB2</option>
                                                                </select></div>
                                                            </div>
                                                            <div class="col-md-2 col-xl-2 offset-md-3 offset-xl-4 align-self-center"><button class="btn btn-info btn-sm d-block add-row btn-xs w-100" type="button"><i class="fa fa-plus"></i><strong>&nbsp;Add Item</strong></button></div>
                                                            <div class="col-md-1 col-xl-1 align-self-center"><button class="btn btn-danger btn-sm d-block delete-row btn-xs w-100" type="button"><i class="fa fa-trash-o"></i></button></div>
                                                        </div>
                                                        <div class="table-responsive tbl-wfx mt-1 kot-table">
                                                            <table class="table table-sm">
                                                                <thead class="text-dark font-md">
                                                                    <tr class="text-dark-blue">
                                                                        <th class="text-center w-3x"><strong>#</strong></th>
                                                                        <th><strong>Product name</strong></th>
                                                                        <th class="w-10x"><strong>Qty.</strong></th>
                                                                        <th class="w-10x"><strong>Time</strong></th>
                                                                        <th class="w-10x"><strong>Rate</strong></th>
                                                                        <th class="w-10x"><strong>Amount</strong></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="h-15x">
                                                                    <tr>
                                                                        <td class="text-center w-3x pt-2"><input type="checkbox"></td>
                                                                        <td>
                                                                            <div class="mb-1 form-group"><select class="form-select form-select-sm tbl-wfx kot-table font-sm">
                                                                                <option value="1" selected="">-- Select Product --</option>
                                                                                <option value="1">Cheese Burger</option>
                                                                                <option value="2">Cheese Pizza</option>
                                                                            </select></div>
                                                                        </td>
                                                                        <td class="w-10x">
                                                                            <div class="mb-1 form-group"><input class="form-control form-control-sm font-sm" type="number" step="1" min="1"></div>
                                                                        </td>
                                                                        <td class="w-10x">
                                                                            <div class="mb-1 form-group"><select class="form-select form-select-sm font-sm">
                                                                                <option value="" selected="">select</option>
                                                                                <option value="">FULL</option>
                                                                                <option value="">HALF</option>
                                                                            </select></div>
                                                                        </td>
                                                                        <td class="w-10x">
                                                                            <div class="mb-1 form-group"><input class="form-control form-control-sm font-sm" type="text" disabled=""></div>
                                                                        </td>
                                                                        <td class="w-10x">
                                                                            <div class="mb-1 form-group"><input class="form-control form-control-sm font-sm" type="text" disabled=""></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-xl-3">
                                                    <div class="box-bg">
                                                        <div class="row text-dark">
                                                            <div class="col-xl-5 offset-xl-0 align-self-center">
                                                                <h6 class="mb-0 font-sm">Gross amount:</h6>
                                                            </div>
                                                            <div class="col-xl-7 offset-xl-0 text-end align-self-center">
                                                                <div class="mb-1 form-group"><input class="form-control form-control-sm font-sm" type="text" disabled=""></div>
                                                            </div>
                                                            <div class="col-xl-5 offset-xl-0 align-self-center">
                                                                <h6 class="mb-0 font-sm">Parcel charges:</h6>
                                                            </div>
                                                            <div class="col-xl-7 offset-xl-0 text-end align-self-center">
                                                                <div class="mb-1 form-group"><input class="form-control form-control-sm font-sm" type="text"></div>
                                                            </div>
                                                            <div class="col-xl-5 offset-xl-0 align-self-center">
                                                                <h6 class="mb-0 font-sm">Discount (%)</h6>
                                                            </div>
                                                            <div class="col-xl-7 offset-xl-0 text-end align-self-center">
                                                                <div class="mb-1 form-group"><input class="form-control form-control-sm font-sm" type="text"></div>
                                                            </div>
                                                            <div class="col-xl-5 offset-xl-0 align-self-center">
                                                                <h6 class="mb-0 font-sm">Net amount:</h6>
                                                            </div>
                                                            <div class="col-xl-7 offset-xl-0 text-end align-self-center">
                                                                <div class="mb-1 form-group"><input class="form-control form-control-sm font-sm" type="text" disabled=""></div>
                                                            </div>
                                                            <div class="col-xl-5 offset-xl-0 align-self-center">
                                                                <h6 class="mb-0 font-sm">Payment mode:</h6>
                                                            </div>
                                                            <div class="col-xl-7 offset-xl-0 text-end align-self-center">
                                                                <div class="mb-1 form-group"><select class="form-select form-select-sm font-sm">
                                                                    <optgroup label="Payment mode">
                                                                        <option value="1" selected="">-- choose --</option>
                                                                        <option value="1">Cash</option>
                                                                        <option value="2">UPI</option>
                                                                        <option value="3">Swiggy</option>
                                                                    </optgroup>
                                                                </select></div>
                                                            </div>
                                                            <div class="col-xl-5 offset-xl-0 align-self-center">
                                                                <h6 class="mb-0 font-sm">Payment status:</h6>
                                                            </div>
                                                            <div class="col-xl-7 offset-xl-0 text-end align-self-center">
                                                                <div class="mb-1 form-group"><select class="form-select form-select-sm font-sm" id="payment_stat-2" onchange="fn3();">
                                                                    <option value="unpaid">Not Paid</option>
                                                                    <option value="paid">Paid</option>
                                                                </select></div>
                                                            </div>
                                                            <div class="col-xl-6 offset-xl-0 text-end"><a class="btn btn-info btn-sm d-block mt-3 mb-1 btn-smd w-100" role="button" id="inv_btn-1" target="_blank" href="https://mmpmanufacturer.bss.design/print-invoice.html"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-arrow-right">
                                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                                </svg><strong>Submit</strong><br></a></div>
                                                            <div class="col-xl-6 offset-xl-0 text-end"><button class="btn btn-danger btn-sm d-block mt-3 mb-1 btn-smd w-100" type="reset"><i class="fa fa-remove"></i><strong>&nbsp;Cancel</strong><br></button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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