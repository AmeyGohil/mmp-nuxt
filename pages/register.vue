<template>
    <div class="main">

        <h1>Register</h1>
        <div class="container">
            <div class="sign-up-content">
                <form method="POST" class="signup-form">
                    <h2 class="form-title">Register as</h2>
                    <div class="form-radio">
                        <input type="radio" name="user_type" value="manufacturer" id="manufacturer" checked="checked" />
                        <label for="manufacturer">Manufacturer</label>

                        <input type="radio" name="user_type" value="customer" id="customer" />
                        <label for="customer">Customer</label>
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-name">Name</label>
                        <input type="text" name="customer-name" id="customer-name" />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-organization">Organization</label>
                        <input type="text" name="customer-organization" id="customer-organization" />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-email">Email</label>
                        <input type="email" name="customer-email" id="customer-email" />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-pass">Password</label>
                        <input type="password" name="customer-pass" id="customer-pass" />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-mobile">Mobile No.</label>
                        <input type="text" name="customer-mobile" id="customer-mobile" />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-address">Address</label>
                        <input type="text" name="customer-address" id="customer-address" />
                    </div>

                    <div class="form-textbox customer" style="display: none;">
                        <label for="customer-gst">GST</label>
                        <input type="text" name="customer-gst" id="customer-gst" />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-company">Company</label>
                        <input type="text" name="manufacturer-company" id="manufacturer-company" />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-email">Email</label>
                        <input type="email" name="manufacturer-email" id="manufacturer-email" />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-pass">Password</label>
                        <input type="password" name="manufacturer-pass" id="manufacturer-pass" />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-mnp">Machines and <br>Processes</label>
                        <input type="text" name="manufacturer-mnp" id="manufacturer-mnp" />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-gst">GST</label>
                        <input type="text" name="manufacturer-gst" id="manufacturer-gst" />
                    </div>

                    <div class="form-textbox manufacturer">
                        <label for="manufacturer-address">Address</label>
                        <input type="text" name="manufacturer-address" id="manufacturer-address" />
                    </div>

                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>

                    <div class="form-textbox">
                        <input type="submit" name="submit" id="submit" class="submit" value="Create account" />
                    </div>
                </form>

                <p class="footnote">
                    Already have an account ?<a href="login.html" class="footnote-link"> Log in</a>
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