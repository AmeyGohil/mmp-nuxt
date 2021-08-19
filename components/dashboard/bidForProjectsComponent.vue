<template>
<div class="container-fluid">
  <v-data-table
    :headers="columns"
    :items="computedOrdersForTable"
    class="elevation-3"
  >
   <template v-slot:item.quotation="{ item }">
        <button class="btn btn-primary btn-sm mb-0" type="submit" @click="openOrderDetails(item)">Submit</button>

    </template>
  </v-data-table>
</div>
</template>
<script>
  export default {
    data: () => ({
      columns:[
        {
          text:'Name',
          value:'name',
          sortable: false,
          align: 'start'
        },
        {
          text:'File',
          value:'image_url_logo',
          sortable: false
        },
        {
          text:'Last Updated',
          value:'updated_at',
          sortable: false
        },
        {
          text:'Quotation',
          value:'quotation',
          sortable: false
        }
      ],
      orders: [],
      editedIndex: -1,
      editedItem: {
       
      },
    }),

    computed:{
      computedOrdersForTable(){
        return this.orders.map( i =>(
          {
            ...i,
            updated_at: i.updated_at.slice(0,10),
            image_url_logo: i.image_url.url,
            username: i.users_permissions_user.username,
            quotation: i
        }))
      }
    },

    created () {
      this.fetchOrders()
    },

    methods: {    
      async fetchOrders(){
        this.orders = await this.$strapi.find('orders')
        // console.log(this.orders)
      },
      openOrderDetails(val){
        this.$router.push({
          name: 'manufacturer-upload_quotation',
          params: {
            id: val.id,
            order: val
          }
        })
      }  
    },
  }
</script>