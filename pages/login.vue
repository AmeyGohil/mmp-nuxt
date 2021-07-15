<template>
    <div class="main">

        <h1>Login</h1>
        <div class="container">
            <div class="sign-up-content">
                <form method="POST" class="signup-form">
                    <h2 class="form-title">Login</h2>

                    <div class="form-textbox">
                        <label for="login-email">Email</label>
                        <input type="email" name="login-email" id="login-email" />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="login-pass">Password</label>
                        <input type="password" name="login-pass" id="login-pass" />
                    </div>

                    <div class="form-textbox">
                        <input type="submit" name="submit" id="submit" class="submit" value="Login" />
                    </div>
                </form>

                <p class="footnote">
                    Don't have an account ?<a href="register.html" class="footnote-link"> Register</a>
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
  };
</script>

<style>

</style>