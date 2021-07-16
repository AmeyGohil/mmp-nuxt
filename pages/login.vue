<template>
    <div class="main">

        <h1>Login</h1>
        <div class="container">  
            <div class="sign-up-content">
                <form @submit.prevent="userLogin()" class="signup-form">
                    <h2 class="form-title">Login</h2>

                    <div class="form-textbox">
                        <label for="login-email">Email</label>
                        <input type="email" name="login-email" id="login-email" v-model="loginData.identifier"/>
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="login-pass">Password</label>
                        <input type="password" name="login-pass" id="login-pass" v-model="loginData.password"/>
                    </div>

                    <div class="form-textbox">
                        <input type="submit" name="submit" id="submit" class="submit" value="Login" />
                    </div>
                </form>

                <p class="footnote">
                    Don't have an account ?<a href="register" class="footnote-link"> Register</a>
                    <br>
                    <a href="forgot_password.html" class="footnote-link"> Forgot Password?</a>
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
          loginData:{
            identifier:'',
            password:''
          },
          showLoading: false,
        }
    },
    methods:{
        async userLogin(){
          try{
            this.showLoading = true;

            console.log("Login prcoess started...");

            let response =await this.$strapi.login( this.loginData );
            
            console.log("RESPONSE:",response);
            console.log("RESPONSE(user):",this.$strapi.user);
      
            this.$router.push("/customer");
          }
          catch(e){
            console.log("err:",e);
            alert(e);
          }
        },
    }
  };
</script>

<style>

</style>