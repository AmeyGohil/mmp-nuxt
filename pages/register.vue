<template>
    <div class="main">

        <h1>Register</h1>
        <div class="container">
            <div class="sign-up-content">
                <div class="signup-form">
                    <h2 class="form-title">Register as</h2>
                    <div class="form-radio">
                        <input v-model="userType" type="radio" name="user_type" value="manufacturer" id="manufacturer" checked="checked" />
                        <label for="manufacturer">Manufacturer</label>

                        <input v-model="userType" type="radio" name="user_type" value="customer" id="customer" />
                        <label for="customer">Customer</label>
                    </div>
                    <form form @submit.prevent="submitForm">
                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-name">Name</label>
                        <input v-model="customerData.username" type="text" name="customer-name" id="customer-name" required/>
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-organization">Organization</label>
                        <input v-model="customerData.organization" type="text" name="customer-organization" id="customer-organization" required />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-email">Email</label>
                        <input v-model="customerData.email" type="email" name="customer-email" id="customer-email" required />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-pass">Password</label>
                        <input v-model="customerData.password" type="password" name="customer-pass" id="customer-pass" autocomplete="off" required />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-mobile">Mobile No.</label>
                        <input v-model="customerData.mobile" type="text" name="customer-mobile" id="customer-mobile" required />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-address">Address</label>
                        <input v-model="customerData.address" type="text" name="customer-address" id="customer-address" required />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-gst">GST</label>
                        <input v-model="customerData.gstNo" type="text" name="customer-gst" id="customer-gst" required />
                    </div>
                    <!-- <div class="form-group customer" style="display: none;">
                        <input type="checkbox" name="agree" id="agree"/>
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div> -->

                    <div class="form-textbox customer" style="display: none;">
                        <input type="submit" name="submit" id="submit-customer" class="submit" value="Create account" />
                    </div>
                    </form>

                    <form form @submit.prevent="submitForm">
                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-company">Company</label>
                        <input v-model="manufacturerData.username" type="text" name="manufacturer-company" id="manufacturer-company" required />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-email">Email</label>
                        <input v-model="manufacturerData.email" type="email" name="manufacturer-email" id="manufacturer-email" required />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-pass">Password</label>
                        <input v-model="manufacturerData.password" type="password" name="manufacturer-pass" id="manufacturer-pass" autocomplete="off" required />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-mnp">Machines and <br>Processes</label>
                        <input v-model="manufacturerData.description" type="text" name="manufacturer-mnp" id="manufacturer-mnp" required />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-gst">GST</label>
                        <input v-model="manufacturerData.gstNo" type="text" name="manufacturer-gst" id="manufacturer-gst" required />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-address">Address</label>
                        <input v-model="manufacturerData.address" type="text" name="manufacturer-address" id="manufacturer-address" required />
                    </div>

                    <div class="form-group manufacturer">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" required />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>

                    <div class="form-textbox manufacturer">
                        <input type="submit" name="submit" id="submit-manufacturer" class="submit" value="Create account" />
                    </div>
                    </form>
                </div>

                <p class="footnote">
                    Already have an account ?<nuxt-link to="login" class="footnote-link"> Log in</nuxt-link>
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
        userType:'manufacturer',
        customerData:{
          username:'',
          organization:'',
          email:'',
          password:'',
          role: 'customer',
          gstNo:'',
          address:'',
          mobile:'',
          agreeTerms: true
        },
        manufacturerData:{
          username:'',
          email:'',
          password:'',
          role: 'manufacturer',
          gstNo:'',
          address:'',
          mobile:'',
          description:'',
          agreeTerms: true
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
      },
      submitForm(){
         console.log("isUserTypeManufacturer", this.userType) 
         if(this.userType==='customer'){
            this.registerCustomer()
         }
         else{
             this.registerManufacturer()
         }
      }
    }
  };
</script>

<style>

</style>