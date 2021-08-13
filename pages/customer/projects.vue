<template>
  <div class="container-fluid">
    <h3 class="text-dark mb-4">My Projects</h3>
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
                            <th v-for="(col,i) in orders.columns" v-bind:key="i">
                              {{col.title}}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row,i) in processedOrdersForTable" v-bind:key="i">
                            <td v-for="(col,j) in orders.columns" v-bind:key="j" v-html="row[col.slug]">
                            
                            </td>
                        </tr>
                       
                      
                    </tbody>
                    <!-- <tfoot>
                        <tr>
                            <td><strong>Name</strong></td>
                            <td><strong>Position</strong></td>
                            <td><strong>Office</strong></td>
                            <td><strong>Age</strong></td>
                            <td><strong>Start date</strong></td>
                            <td><strong>Salary</strong></td>
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
  layout: 'dashboard-customer',
  components:{},
  data () {
    return {
      orders:{
          data:[],
          columns:[
              {
                title:'Name',
                slug:'name'
              },
              {
                title:'Description',
                slug:'description'
              },
              {
                title:'Image',
                slug:'image_url_logo'
              },
              {
                title:'Last Updated',
                slug:'updated_at'
              },
              {
                title:"Status",
                slug:'status'
              }
          ]
      }
    }
  },
  async fetch(){
      this.orders.data = await this.$strapi.find('orders',{'users_permissions_user.id':[this.$strapi.user.id]})
      console.log("LOG: orders:",this.orders.data)
  },
  computed:{
    processedOrdersForTable(){
      console.log("DEBUG: processedOrders",this.orders.data)
      return this.orders.data.map( i =>(
        {
          ...i,
          updated_at: i.updated_at.slice(0,10),
          image_url_logo: i.image_url.url,
          username: i.users_permissions_user.username
      }))
    }
  }
}
</script>

<style lang="css" scoped>
</style>