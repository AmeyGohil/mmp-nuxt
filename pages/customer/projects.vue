<template>
	<div>
		<h1>
      Order History
    </h1>
    <ul>
      <li v-for="order in orderHistory" v-bind:key="order.id">
        <p>Name: {{order.name}}</p>
        <p>Description: {{order.description}}</p>
        <p>Status: {{order.status}}</p>
        <img :src="order.image_url.formats.small.url" alt="image"/>
      </li>
    </ul>
	</div>
</template>

<script>
export default {
  layout:'customer',
  data () {
    return {
      orderHistory:null
    }
  },
  async mounted(){
    let data = await this.$strapi.find('orders',{users_permissions_user: this.$strapi.user.id});
    console.log("DEBUG:",data);
    this.orderHistory = data;
  }
}
</script>

<style lang="css" scoped>
</style>