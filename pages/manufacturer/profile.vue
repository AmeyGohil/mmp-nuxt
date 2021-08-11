<template>
  <div class="container-fluid">
    <h3 class="text-dark mb-4">Profile</h3>
    <div class="row mb-3">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" src="/assets/img/dogs/image2.jpeg" width="160" height="160">
                    <div class="mb-3"><button class="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                </div>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="text-primary fw-bold m-0">Projects</h6>
                </div>
                <div class="card-body">
                    <h4 class="small fw-bold">Server migration<span class="float-end">20%</span></h4>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"><span class="visually-hidden">20%</span></div>
                    </div>
                    <h4 class="small fw-bold">Sales tracking<span class="float-end">40%</span></h4>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;"><span class="visually-hidden">40%</span></div>
                    </div>
                    <h4 class="small fw-bold">Customer Database<span class="float-end">60%</span></h4>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="visually-hidden">60%</span></div>
                    </div>
                    <h4 class="small fw-bold">Payout Details<span class="float-end">80%</span></h4>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"><span class="visually-hidden">80%</span></div>
                    </div>
                    <h4 class="small fw-bold">Account setup<span class="float-end">Complete!</span></h4>
                    <div class="progress progress-sm mb-3">
                        <div class="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"><span class="visually-hidden">100%</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="row mb-3 d-none">
                <div class="col">
                    <div class="card textwhite bg-primary text-white shadow">
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col">
                                    <p class="m-0">Peformance</p>
                                    <p class="m-0"><strong>65.2%</strong></p>
                                </div>
                                <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                            </div>
                            <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card textwhite bg-success text-white shadow">
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col">
                                    <p class="m-0">Peformance</p>
                                    <p class="m-0"><strong>65.2%</strong></p>
                                </div>
                                <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                            </div>
                            <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card shadow mb-3">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">User Settings</p>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="saveUserSettings()">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="username"><strong>Company</strong></label><input v-model="userData.username" class="form-control" type="text" id="username" placeholder="Company" name="username"></div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="email"><strong>Email Address</strong></label><input v-model="userData.email" class="form-control" type="email" id="email" placeholder="Email" name="email"></div>
                                    </div>
                                </div>
                                <!-- <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="first_name"><strong>First Name</strong></label><input class="form-control" type="text" id="first_name" placeholder="John" name="first_name"></div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="last_name"><strong>Last Name</strong></label><input class="form-control" type="text" id="last_name" placeholder="Doe" name="last_name"></div>
                                    </div>
                                </div> -->
                                <div class="mb-3"><button class="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                            </form>
                        </div>
                    </div>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">Contact Settings</p>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="saveContactSettings()">
                                <div class="mb-3"><label class="form-label" for="address"><strong>Address</strong></label><input v-model="userData.address" class="form-control" type="text" id="address" placeholder="Address" name="address"></div>
                                <!-- <div class="row">
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="city"><strong>City</strong></label><input class="form-control" type="text" id="city" placeholder="Los Angeles" name="city"></div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="country"><strong>Country</strong></label><input class="form-control" type="text" id="country" placeholder="USA" name="country"></div>
                                    </div>
                                </div> -->
                                <!-- <div class="mb-3"></div> -->
                                <div class="mb-3"><label class="form-label" for="contact"><strong>Contact Number</strong></label><input v-model="userData.phone" class="form-control" type="tel" id="contact" placeholder="Mobile No." name="contact"></div>
                                <!-- <div class="mb-3"><label class="form-label" for="address"><strong>Pin Code</strong></label><input type="text" id="address-2" placeholder="Sunset Blvd, 38" name="address"></div> -->
                                <div class="mb-3"><button class="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card shadow mb-5">
        <div class="card-header py-3">
            <p class="text-primary m-0 fw-bold">Forum Settings</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <form>
                        <div class="mb-3"><label class="form-label" for="signature"><strong>Signature</strong><br></label><textarea class="form-control" id="signature" rows="4" name="signature"></textarea></div>
                        <div class="mb-3">
                            <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="formCheck-1"><label class="form-check-label" for="formCheck-1"><strong>Notify me about new replies</strong></label></div>
                        </div>
                        <div class="mb-3"><button class="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                    </form>
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
      id:'',
      userData:{
          username:'',
          email:'',
          password:'',
          role: 'manufacturer',
          gstNo:'',
          address:'',
          mobile:'',
          description:'',
          agreeTerms: true
        },
    }
  },
  async mounted(){
    //   console.log(this.$strapi.user)
      this.id = this.$strapi.user.id
      this.userData.username=this.$strapi.user.username
      this.userData.email=this.$strapi.user.email
      this.userData.address=this.$strapi.user.address
      this.userData.mobile=this.$strapi.user.mobile
  },
  methods:{
      async saveUserSettings(){
        try{
            this.showLoading = true;
            console.log("updating userData prcoess started...");
            console.log(this.userData);
        
            const user = await this.$strapi.$users.update('me', this.userData)

            this.$strapi.user = user

            console.log("USER:",this.$strapi.user);
        }
        catch(e){
            console.log("err:",e);
            alert(e);
            this.showLoading=false;
        }
      },
      async saveContactSettings(){
        try{
            this.showLoading = true;
            console.log("updating contactData prcoess started...");
        
            const user = await this.$strapi.$users.update('me', this.userData)

            this.$strapi.user = user

            console.log("USER:",this.$strapi.user);
        }
        catch(e){
            console.log("err:",e);
            alert(e);
            this.showLoading=false;
        }
      },
    }
  };
</script>

<style lang="css" scoped>
</style>