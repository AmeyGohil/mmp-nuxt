<template>
    <div id="wrapper">
        <dashboard-side-menu role='customer'/>
		<div class="d-flex flex-column" id="content-wrapper">
			<div id="content">
				<dashboard-header />
				<Nuxt />
			</div>
			<dashboard-footer />
		</div>
		<dashboard-back-to-top />
	</div>
</template>

<script>
import DashboardBackToTop from '../components/DashboardBackToTop.vue';
import DashboardFooter from '../components/DashboardFooter.vue';
import DashboardHeader from '../components/DashboardHeader.vue';
import DashboardSideMenu from '../components/DashboardSideMenu.vue';
	export default {
		middleware: 'authCustomer',
		components: {DashboardSideMenu, DashboardFooter, DashboardHeader, DashboardBackToTop},
		data() {
			return {
				title: "Dashboard - Make My Part",
			};
		},
		head() {
			return {
				title: this.title,
				bodyAttrs: {
					id: 'page-top'
				},
				meta: [
					{ charset: "utf-8" },
					{
						name: "viewport",
						content: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
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
						href: `${process.env.baseUrl}/assets/img/apple-touch-icon.png`
					},
					{
						rel: "stylesheet",
						href: "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",
					},
					{ 
						rel: "stylesheet", 
						href: "https://use.fontawesome.com/releases/v5.12.0/css/all.css" 
					},
					{ 
						rel: "stylesheet", 
						href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
					},
					{
						rel: "stylesheet",
						href: `${process.env.baseUrl}/assets/bootstrap/css/bootstrap.min.css`
					},
					{
						rel: "stylesheet",
						href: `${process.env.baseUrl}/assets/vendor/bootstrap-icons/bootstrap-icons.css`
					},
					{
						rel: "stylesheet",
						href: `${process.env.baseUrl}/assets/fonts/fontawesome5-overrides.min.css`
					},
					{ 
						rel: "stylesheet", 
						href: `${process.env.baseUrl}/assets/css/dashboard/styles.min.css`
					},
					{
						rel: "icon",
						type: "image/x-icon",
						href: "/assets/img/favicon.png",
					},
				],
				script: [
					{
						src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",
						body: true,
					},
					{
						src: "https://code.jquery.com/jquery-3.5.1.min.js",
						body: true,
					},
					// {
					// 	src: `${process.env.baseUrl}/assets/js/dashboard/script.min.js`,
					// 	body: true,
					// },
				],
			};
		},
	};
</script>

<style>
/* @import "~/assets/bootstrap/css/bootstrap.min.css";
@import "~/assets/vendor/bootstrap-icons/bootstrap-icons.css";
@import "~/assets/fonts/fontawesome5-overrides.min.css";
@import "~/assets/css/dashboard/styles.min.css"; */
</style>