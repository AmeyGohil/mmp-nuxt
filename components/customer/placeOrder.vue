<template>
    <div class="mx-5">
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 class="text-dark mb-0">Upload a new design</h3><a class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="index.html#"><i class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a>
        </div>
        <form @submit.prevent="placeOrder">
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="files color form-group mb-3">
                           <input 
                            type="file" 
                            id="file" 
                            name="image" 
                            ref="file" 
                            v-on:change="handleImageUpload"
                            required/>
                        </div>
                    </div>
                </div>
                <div class="row"></div>
            </div>

            <!-- <div class="container">
                <div class="row">
                    <div class="col-md-12 offset-md-4"><a class="btn btn-light btn-icon-split" role="button"></a></div>
                </div>
            </div> -->
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <input 
                            type="text" 
                            class="form-control" 
                            name="name" 
                            v-model="orderData.name" 
                            placeholder="Name of part"
                            required/>
                        <textarea 
                            name="description" 
                            class="form-control" 
                            rows="5" 
                            cols="10" 
                            v-model="orderData.description" 
                            placeholder="Description..."
                            required>
                        </textarea>
                    </div>
                    <div class="col-md-6 mr-3">
                        <input 
                            type="text" 
                            class="form-control" 
                            v-model="orderData.tolerance" 
                            placeholder="Specify tolerance limit" 
                            required/>                  
                    </div>
                    <div class="col-md-6 ">
                        <input 
                            type="text" 
                            class="form-control" 
                            v-model="orderData.quantity" 
                            placeholder="Specify Quantity" 
                            required/>
                    </div>
                    <div class="col-12">
                        <button type="submit" value="Place order" class="btn btn-primary">Place order</button>
                        <button type="reset" value="Clear" class="btn btn-secondary">Reset</button>
                    </div>         
                </div>
            </div>
            <!-- <div class="container">
                <div class="row">
                    <div class="col-md-6"><input class="form-control-plaintext" type="text" value="Process" readonly=""></div>
                    <div class="col-md-6">
                        <div class="dropdown"><button class="btn btn-primary dropdown-toggle d-table" aria-expanded="false" data-bs-toggle="dropdown" type="button">Dropdown </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="index.html#">Laser Cutting</a><a class="dropdown-item" href="index.html#">Milling</a><a class="dropdown-item" href="index.html#">Heat Treatment</a><a class="dropdown-item" href="index.html#">Shaping</a><span class="dropdown-item-text">Text Item</span></div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="row gx-5">
                
            </div>
        </form>
  </div>
</template>

<script>
export default {

  name: 'placeOrder',

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
  			// console.log(this.$strapi.getToken());
	  		const request= new XMLHttpRequest();
	  		const formData = new FormData();
	  		const data = this.orderData;
	  		formData.append(`files.image_url`,this.image_file,this.orderData.name);
	  		formData.append('data',JSON.stringify(this.orderData));
	  		request.open('POST',`${process.env.STRAPI_URL}/orders`);
	  		request.setRequestHeader('Authorization',`Bearer ${this.$strapi.getToken()}`);
	  		// request.setRequestHeader('Content-Type','multipart/form-data');
	  		request.send(formData);
            console.log("LOG: Order placed request sent");
              
  		}
  		catch(err){
  			console.log(err);
  			alert("An error Occured");
        }
        finally{
            this.$router.push("/customer/projects")
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