<template>
	<div>
		<home-nav-bar />
		<Nuxt />
		<home-back-to-top />
		<home-footer />
	</div>
</template>

<script>
	import HomeBackToTop from "../components/HomeBackToTop.vue";
	import HomeFooter from "../components/HomeFooter.vue";
	import HomeNavBar from "../components/HomeNavBar.vue";
	export default {
		components: { HomeNavBar, HomeFooter, HomeBackToTop },
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
				],
				link: [
					{
						rel: "apple-touch-icon",
						href: "assets/img/apple-touch-icon.png",
					},
					{
						rel: "stylesheet",
						href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i",
					},
					{ rel: "stylesheet", href: "assets/vendor/aos/aos.css" },
					{
						rel: "stylesheet",
						href: "assets/vendor/bootstrap/css/bootstrap.min.css",
					},
					{
						rel: "stylesheet",
						href: "assets/vendor/bootstrap-icons/bootstrap-icons.css",
					},
					{
						rel: "stylesheet",
						href: "assets/vendor/boxicons/css/boxicons.min.css",
					},
					{
						rel: "stylesheet",
						href: "assets/vendor/glightbox/css/glightbox.min.css",
					},
					{
						rel: "stylesheet",
						href: "assets/vendor/remixicon/remixicon.css",
					},
					{
						rel: "stylesheet",
						href: "assets/vendor/swiper/swiper-bundle.min.css",
					},
					{
						rel: "stylesheet",
						href: "https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|PT+Sans|Raleway",
					},
					{ rel: "stylesheet", href: "assets/css/style.css" },
					{
						rel: "icon",
						type: "image/x-icon",
						href: "assets/img/favicon.png",
					},
				],
				script: [
					{
						src: "assets/vendor/aos/aos.js",
						body: true,
					},
					{
						src: "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
						body: true,
					},
					{
						src: "assets/vendor/glightbox/js/glightbox.min.js",
						body: true,
					},
					{
						src: "assets/vendor/isotope-layout/isotope.pkgd.min.js",
						body: true,
					},
					{
						src: "assets/vendor/php-email-form/validate.js",
						body: true,
					},
					{
						src: "assets/vendor/purecounter/purecounter.js",
						body: true,
					},
					{
						src: "assets/vendor/swiper/swiper-bundle.min.js",
						body: true,
					},
					{
						src: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.min.js",
						body: true,
					},
					{
						src: "assets/js/main.js",
						body: true,
					},
				],
			};
		},
	};
</script>

<style>
</style>