<template>
    <div class="main">

        <h1>Register</h1>
        <div class="container">
            <div class="sign-up-content"> 
                
                <b-collapse v-model="registerDialog.step1">
                    <h2 class="form-title">Register as</h2>
                    <div class="text-center">
                      <b-button-group size="lg">
                        <b-button 
                          variant="success" 
                          v-on:click="openRegisterManufacturer">
                          Manufacturer
                        </b-button>
                        <b-button 
                          variant="warning"
                          v-on:click="openRegisterCustomer">
                          Customer
                        </b-button>
                      </b-button-group>
                    </div>
                </b-collapse>

                <b-collapse v-model="registerDialog.step2.customer">
                  <form @submit.prevent="registerCustomer">
                    <div class="form-textbox customer">
                        <label for="customer-organization">User Name</label>
                        <input type="text" name="customer-organization" id="customer-organization" v-model="customerData.username" required/>
                    </div>

                    <div class="form-textbox customer" >
                        <label for="customer-email">Email</label>
                        <input type="email" name="customer-email" id="customer-email" v-model="customerData.email" required/>
                    </div>

                    <div class="form-textbox customer" >
                        <label for="customer-pass">Password</label>
                        <input type="password" name="customer-pass" id="customer-pass" v-model="customerData.password" required/>
                    </div>

                    <div class="form-textbox customer" >
                        <label for="customer-mobile">Mobile No.</label>
                        <input type="text" name="customer-mobile" id="customer-mobile" v-model="customerData.mobile" required/>
                    </div>

                    <div class="form-textbox customer" >
                        <label for="customer-address">Address</label>
                        <input type="text" name="customer-address" id="customer-address" v-model="customerData.address" required/>
                    </div>

                    <!-- <div class="form-textbox customer" >
                        <label for="customer-gst">GST</label>
                        <input type="text" name="customer-gst" id="customer-gst" v-model="customerData.gst"/>
                    </div> -->

                    <div class="form-group">
                        <b-form-checkbox name="agree-term" v-model="customerData.agreeTerms" class="agree-term" >
                        I agree all statements in  <a href="#" class="term-service">Terms of service</a>
                        </b-form-checkbox>
                    </div>

                    <div class="form-textbox">
                        <input type="submit" name="submit" id="submit" class="submit" value="Create account" />
                    </div>

                  </form>
                </b-collapse>

                <b-collapse v-model="registerDialog.step2.manufacturer">
                  <form @submit.prevent="registerManufacturer">

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-company">Company</label>
                        <input type="text" name="manufacturer-company" id="manufacturer-company" v-model="manufacturerData.username" required/>
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-email">Email</label>
                        <input type="email" name="manufacturer-email" id="manufacturer-email"  v-model="manufacturerData.email" required/>
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-pass">Password</label>
                        <input type="password" name="manufacturer-pass" id="manufacturer-pass"  v-model="manufacturerData.password" required/>
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-mnp">Machines and <br>Processes</label>
                        <input type="text" name="manufacturer-mnp" id="manufacturer-mnp"  v-model="manufacturerData.description" required/>
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-gst">GST No</label>
                        <input type="text" name="manufacturer-gst" id="manufacturer-gst"  v-model="manufacturerData.gstno" required/>
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-address">Address</label>
                        <input type="text" name="manufacturer-address" id="manufacturer-address"  v-model="manufacturerData.address" required/>
                    </div>
                    <div class="form-group">
                        <b-form-checkbox name="agree-term" v-model="manufacturerData.agreeTerms" class="agree-term" >
                        I agree all statements in  <a href="#" class="term-service">Terms of service</a>
                        </b-form-checkbox>
                    </div>
                    <div class="form-textbox">
                        <input type="submit" name="submit" id="submit" class="submit" value="Create account" />
                    </div>
                  </form>
                </b-collapse>
                    
                <p class="footnote">
                    Already have an account ?<a href="login" class="footnote-link"> Log in</a>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    layout: 'auth',
    data(){
      return{
        showLoading: false,
        registerDialog:{
          step1:true,
          step2:{
            manufacturer:false,
            customer:false
          }
        },
        customerData:{
          username:'',
          email:'',
          password:'',
          role: 'customer',
          gst:'',
          address:'',
          mobile:'',
          agreeTerms: false
        },
        manufacturerData:{
          username:'',
          email:'',
          password:'',
          role: 'manufacturer',
          gstno:'',
          address:'',
          mobile:'',
          description:'',
          agreeTerms: false
        }
      }
    },
    methods:{
      openRegisterManufacturer(){
        this.registerDialog.step1 = false
        this.registerDialog.step2.manufacturer = true
      },
      openRegisterCustomer(){
        this.registerDialog.step1=false
        this.registerDialog.step2.customer = true
      },
      async registerCustomer(){
        try{
            if(this.customerData.agreeTerms===false){
              alert("Please agree to terms of service")
              return
            }
            this.showLoading = true;
            console.log("register prcoess started...");
        
            let response = await this.$strapi.register(this.customerData);

            console.log("RESPONSE:",response);
            console.log("USER:",this.$strapi.user);

            this.$router.push("/customer");
        }
        catch(e){
            console.log("err:",e);
            alert(e);
            this.showLoading=false;
        }
      },
      async registerManufacturer(){
        try{
          if(this.manufacturerData.agreeTerms===false){
              alert("Please agree to terms of service")
              return
            }
            this.showLoading = true;
            console.log("register prcoess started...");
        
            let response = await this.$strapi.register(this.manufacturerData);

            console.log("RESPONSE:",response);
            console.log("USER:",this.$strapi.user);

            this.$router.push("/manufacturer");
        }
        catch(e){
            console.log("err:",e);
            alert(e);
            this.showLoading=false;
        }
      }
    }
  };
</script>

<style>

</style>