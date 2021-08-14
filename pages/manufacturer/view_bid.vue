<template>
  <div class="container-fluid">
    <h3 class="text-dark mb-4">name_of_selected_project</h3>
    <div class="card shadow">
        <div class="card-header py-3">
            <p class="text-primary m-0 fw-bold">Project Info</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 text-nowrap">
                    <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
                                <option value="10" selected="">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>&nbsp;</label></div>
                </div>
                <div class="col-md-6">
                    <div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"></label></div>
                </div>
            </div>
            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                <table class="table my-0" id="dataTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Quotation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img class="rounded-circle me-2" width="30" height="30" src="/assets/img/avatars/avatar1.jpeg">Airi Satou</td>
                            <td>Accountant</td>
                            <td>
                                <button class="btn btn-primary btn-sm mb-0" type="submit">View</button>
                                <button class="btn btn-primary btn-sm mb-0" type="submit">Confirm</button>
                            </td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle me-2" width="30" height="30" src="/assets/img/avatars/avatar1.jpeg">Airi Satou</td>
                            <td>Accountant</td>
                            <td>
                                <button class="btn btn-primary btn-sm mb-0" type="submit">View</button>
                                <button class="btn btn-primary btn-sm mb-0" type="submit">Confirm</button>
                            </td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle me-2" width="30" height="30" src="/assets/img/avatars/avatar1.jpeg">Airi Satou</td>
                            <td>Accountant</td>
                            <td>
                                <button class="btn btn-primary btn-sm mb-0" type="submit">View</button>
                                <button class="btn btn-primary btn-sm mb-0" type="submit">Confirm</button>
                            </td>
                        </tr>
                    </tbody>
                    <!-- <tfoot>
                        <tr>
                            <td><strong>Name</strong></td>
                            <td><strong>File</strong></td>
                            <td><strong>Date</strong></td>
                            <td><strong>Quotation</strong></td>
                        </tr>
                    </tfoot> -->
                </table>
            </div>
            <div class="row">
                <div class="col-md-6 align-self-center">
                    <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                </div>
                <div class="col-md-6">
                    <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                            <li class="page-item disabled"><a class="page-link" href="table.html#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                            <li class="page-item active"><a class="page-link" href="table.html#">1</a></li>
                            <li class="page-item"><a class="page-link" href="table.html#">2</a></li>
                            <li class="page-item"><a class="page-link" href="table.html#">3</a></li>
                            <li class="page-item"><a class="page-link" href="table.html#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                        </ul>
                    </nav>
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