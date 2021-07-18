<template>
	<div class="form-container">
        <h1> 
            Upload a new Design
        </h1>
	<form @submit.prevent="placeOrder">
		<input type="text" name="name" v-model="orderData.name" placeholder="Name of part"/>
		<br>
		<textarea name="description" rows="5" cols="10" v-model="orderData.description" placeholder="Description..."></textarea>
		<br>
        <input type="text" v-model="orderData.tolerance" placeholder="Specify tolerance limit" />
        <input type="text" v-model="orderData.quantity" placeholder="Specify Quantity" />
		<input type="file" id="file" name="image" ref="file" v-on:change="handleImageUpload"/>
		<br>

		<label for="services">Choose some keywords to define your project</label>
		<select multiple="multiple" name="services">
			<option v-for="service in services" v-bind:key="service.key">
				{{service.services}}
			</option>
		</select>
		<span>
			<input type="submit" value="Place order" class="btn btn-primary"/>
			<input type="reset" value="Clear" class="btn btn-secondary"/>
		</span>

	</form>
	</div>
</template>

<script>
export default {

  name: 'placeOrderComponent',

  data () {
    return {
    	orderData:{
    		name:'',
    		description:'',
            users_permissions_user: this.$strapi.user.id,
            tolerance:'',
            quantity:null
    	},
    	image_file:'',
    	services:null
    }
  },
  async mounted(){
  	let services = await this.$strapi.find('services');
  	this.services = services;
  	console.log("services:",services);
  },
  methods:{
  	placeOrder(){
  		try{
  			console.log(this.$strapi.getToken());
	  		const request= new XMLHttpRequest();
	  		const formData = new FormData();
	  		const data = this.orderData;
	  		formData.append(`files.image_url`,this.image_file,this.orderData.name);
	  		formData.append('data',JSON.stringify(this.orderData));
	  		request.open('POST',`${process.env.STRAPI_URL}/orders`);
	  		request.setRequestHeader('Authorization',`Bearer ${this.$strapi.getToken()}`);
	  		// request.setRequestHeader('Content-Type','multipart/form-data');
	  		request.send(formData);
	  		alert("Order placed");
  		}
  		catch(err){
  			console.log(err);
  			alert("An error Occured");
  		}
  	},
  	handleImageUpload(){
  		this.image_file = this.$refs.file.files[0];
  	}
  }
}
</script>

<style lang="css" scoped>
.form-container{
	max-width: 700px;
	width: 100%;
}
form{
	width: 100%;
}
input, textarea, select{
	width: 100%;
	margin: 10px 10px;
	padding: 10px;
}
</style>