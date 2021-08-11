<template>
    <Nuxt />
</template>

<script>
	export default {
		data() {
			return {
				title: "Make My Part",
			};
		},
		head() {
			return {
				title: this.title,
				meta: [
					{ charset: "utf-8" },
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0",
					},
					{
						hid: "description",
						name: "description",
						content: "my website description",
					},
					{
                        "http-equiv": "X-UA-Compatible",
						content: "ie=edge",
					},
				],
				link: [
					{
						rel: "apple-touch-icon",
						href: `${process.env.baseUrl}/assets/img/apple-touch-icon.png`
					},
					{
						rel: "stylesheet",
						href: `${process.env.baseUrl}/assets/fonts/material-icon/css/material-design-iconic-font.min.css`,
					},
					{ 
						rel: "stylesheet", 
						href: `${process.env.baseUrl}/assets/vendor/aos/aos.css`
					},
					{
						rel: "stylesheet",
						href: `${process.env.baseUrl}/assets/css/auth/style.css`,
					},
				],
				script: [
					{
						src: `${process.env.baseUrl}/assets/vendor/jquery/jquery.min.js`,
						body: true,
					},
					{
						src: `${process.env.baseUrl}/assets/js/auth/main.js`,
						body: true,
					},
				],
			};
		},
	};
</script>

<style>
    h1{
        margin-top: 0.66em;
        line-height: 1.8em;
    }
</style>