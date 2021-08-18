<template>
<div class="container-fluid">
  <v-data-table
    :headers="columns"
    :items="computedOrdersForTable"
    class="elevation-3"
    @click:row="openOrderDetails"
  >
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
          text:'Description',
          value:'description',
          sortable: false
        },
        {
          text:'Image',
          value:'image_url_logo',
          sortable: false
        },
        {
          text:'Last Updated',
          value:'updated_at',
          sortable: false
        },
        {
          text:'Status',
          value:'status',
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
            username: i.users_permissions_user.username
        }))
      }
    },

    created () {
      this.fetchOrders()
    },

    methods: {    
      async fetchOrders(){
        this.orders = await this.$strapi.find(
          'orders',
          {
            'users_permissions_user.id':[this.$strapi.user.id]
          }
        )
      },
      openOrderDetails(val){
        this.$router.push({
          name: 'customer-projects-id',
          params: {
            id: val.id,
            orderDetails: val
          }
        })
      }  
    },
  }
</script>