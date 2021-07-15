<template>
    <div class="main">

        <h1>Forgot Password</h1>
        <div class="container">
            <div class="sign-up-content">
                <form method="POST" class="signup-form">
                    <h2 class="form-title">Enter your registered email address</h2>

                    <div class="form-textbox">
                        <label for="forgot-pass-email">Email</label>
                        <input type="email" name="forgot-pass-email" id="forgot-pass-email" />
                    </div>

                    <div class="form-textbox">
                        <input type="submit" name="submit" id="submit" class="submit" value="Submit" />
                    </div>
                </form>

                <p class="footnote">
                    Please check your mail for password reset link.
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