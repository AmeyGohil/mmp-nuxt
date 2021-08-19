<template>
  <div class="container-fluid">
    <h3 class="text-dark mb-4">Profile</h3>
    <div class="row mb-3">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" :src="defaultAvatar" width="160" height="160">
                    <div class="mb-3">
                        <button class="btn btn-primary btn-sm disabled" type="button">
                            Change Photo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">

               
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
                                        <div class="mb-3"><label class="form-label" for="username"><strong>Name</strong></label><input v-model="userData.username" class="form-control" type="text" id="username" placeholder="Name" name="username" readonly=""></div>
                                    </div>
                                    <div class="col">
                                        <div class="mb-3"><label class="form-label" for="email"><strong>Email Address</strong></label><input v-model="userData.email" class="form-control" type="email" id="email" placeholder="Email" name="email" readonly=""></div>
                                    </div>
                                </div>
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
                               
                                <div class="mb-3"><label class="form-label" for="contact"><strong>Contact Number</strong></label><input v-model="userData.phone" class="form-control" type="tel" id="contact" placeholder="phone No." name="contact"></div>
                                <!-- <div class="mb-3"><label class="form-label" for="address"><strong>Pin Code</strong></label><input type="text" id="address-2" placeholder="Sunset Blvd, 38" name="address"></div> -->
                                <div class="mb-3"><button class="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id:'',
      userData:{
          // username:'',
          // email:'',
          // password:'',
          // role: 'customer',
          // gstNo:'',
          address:'',
          phone:'',
          // description:'',
          // agreeTerms: true
        },
    }
  },
  async mounted(){
    //   console.log(this.$strapi.user)
      this.id = this.$strapi.user.id
      this.userData.username=this.$strapi.user.username
      this.userData.email=this.$strapi.user.email
      this.userData.address=this.$strapi.user.address
      this.userData.phone=this.$strapi.user.phone
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
            let user_id = this.$strapi.user.id
            const user = await this.$strapi.$users.update(user_id, this.userData)

            this.$strapi.user = user

            console.log("USER:",this.$strapi.user);
        }
        catch(e){
            console.log("err:",e);
            alert(e);
            this.showLoading=false;
        }
      },
    },
    computed:{
        defaultAvatar(){
            return `${process.env.baseUrl}/default-avatar.jpg`
        }
    }
  };
</script>

<style lang="css" scoped>
</style>