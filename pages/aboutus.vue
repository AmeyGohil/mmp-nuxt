<template>
    <main id="main">
        <home-hero-section />
        <!-- ======= Services Section ======= -->
        <section id="about" class="about">
            <div class="container">

            <div class="section-title" data-aos="fade-up">
                <h2>About Us</h2>
            </div>

            <div class="content" data-aos="fade-up" data-aos-delay="150">
                <p>
                We are a group of students trying to solve the problem of clustered manufacturing, during our stay in IIT, in place of research, a considerable amount of time and effort had to be spent on procuring the materials and getting the parts made which were not mass-produced.
                </p>
                <p>
                This work which is usually handled by sophies could be made simpler and their time could be saved. Also as we have a limited number of manufacturers to choose from and no one provides a specific manufacturing cost structure beforehand - it gets very complicated to know the true market price of an operation.
                </p>
                <p>
                Keeping the above problems in mind we developed a platform that acts as Amazon or Flipkart of the manufacturing world, where people can upload their designs and get timely quotations and the quality parts delivered at their location.
                </p>
            </div>

            </div>
        </section>
        <!-- End About Us Section -->

        <!-- ======= Team Section ======= -->
        <section id="team" class="team section-bg">
            <div class="container">

            <div class="section-title" data-aos="fade-up">
                <h2>Team</h2>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                    <div class="member-img">
                    <img src="/assets/img/team/ak.jpeg" class="img-fluid" alt="">
                    <!-- <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div> -->
                    </div>
                    <div class="member-info">
                    <h4>Aniket Kale</h4>
                    <!-- <span>Chief Executive Officer</span> -->
                    </div>
                </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="200">
                    <div class="member-img">
                    <img src="/assets/img/team/bk.jpg" class="img-fluid" alt="">
                    <!-- <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div> -->
                    </div>
                    <div class="member-info">
                    <h4>Bhaskar Kumar</h4>
                    <!-- <span>Product Manager</span> -->
                    </div>
                </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="300">
                    <div class="member-img">
                    <img src="/assets/img/team/ag.jpeg" class="img-fluid" alt="">
                    <!-- <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div> -->
                    </div>
                    <div class="member-info">
                    <h4>Amey Gohil</h4>
                    <!-- <span>CTO</span> -->
                    </div>
                </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div class="member" data-aos="fade-up" data-aos-delay="400">
                    <div class="member-img">
                    <img src="/assets/img/team/gd.jpeg" class="img-fluid" alt="">
                    <!-- <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div> -->
                    </div>
                    <div class="member-info">
                    <h4>Gaurav Desale</h4>
                    <!-- <span>Accountant</span> -->
                    </div>
                </div>
                </div>

            </div>

            </div>
        </section>
        <!-- End Team Section -->
        <contact-us-footer />

        </main>
</template>

<script>
import ContactUsFooter from '../components/ContactUsFooter.vue';
import HomeHeroSection from '../components/HomeHeroSection.vue';
  export default {
	components: { ContactUsFooter, HomeHeroSection },
    layout: 'homepage',
  };
</script>

<style>
    .team .member{
        width: 100%;
    }
    .team .member .member-img {
        position: relative;
        height: 300px;
        /* width: auto; */
        display: flex;
        /* overflow: hidden; */
    }
    .team .member .member-img>img {
        max-height: 100%;
        max-width: 100%;
        margin: auto;
    }
</style>