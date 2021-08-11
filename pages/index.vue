<template>
  <main id="main">
    <home-hero-section />
    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <h5><b>We provide a wide range of services</b></h5>
        </div>

        <div id = "services-slider" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#services-slider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#services-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#services-slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card" style='background-image: url("assets/img/more-services-1.jpg");' data-aos="fade-up" data-aos-delay="100">
                <div class="card-body">
                  <h5 class="card-title"><a href="">Lobira Duno</a></h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                  <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card" style='background-image: url("assets/img/more-services-2.jpg");' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><a href="">Limere Radses</a></h5>
                  <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                  <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card" style='background-image: url("assets/img/more-services-3.jpg");' data-aos="fade-up" data-aos-delay="100">
                <div class="card-body">
                  <h5 class="card-title"><a href="">Nive Lodo</a></h5>
                  <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                  <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
                </div>
              </div>
            </div>
            <!--<div class="carousel-item">-->
            <!--  <img src="..." class="d-block w-100" alt="...">-->
            <!--</div>-->
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#services-slider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#services-slider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <!--<div class="row">-->
        <!--  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">-->
        <!--    <div class="icon-box" data-aos="fade-up" data-aos-delay="100">-->
        <!--      <div class="icon"><i class="bx bxl-dribbble"></i></div>-->
        <!--      <h4 class="title"><a href="">Lorem Ipsum</a></h4>-->
        <!--      <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>-->
        <!--    </div>-->
        <!--  </div>-->

        <!--  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">-->
        <!--    <div class="icon-box" data-aos="fade-up" data-aos-delay="200">-->
        <!--      <div class="icon"><i class="bx bx-file"></i></div>-->
        <!--      <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>-->
        <!--      <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>-->
        <!--    </div>-->
        <!--  </div>-->

        <!--  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">-->
        <!--    <div class="icon-box" data-aos="fade-up" data-aos-delay="300">-->
        <!--      <div class="icon"><i class="bx bx-tachometer"></i></div>-->
        <!--      <h4 class="title"><a href="">Magni Dolores</a></h4>-->
        <!--      <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>-->
        <!--    </div>-->
        <!--  </div>-->

        <!--  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">-->
        <!--    <div class="icon-box" data-aos="fade-up" data-aos-delay="400">-->
        <!--      <div class="icon"><i class="bx bx-world"></i></div>-->
        <!--      <h4 class="title"><a href="">Nemo Enim</a></h4>-->
        <!--      <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>-->
        <!--    </div>-->
        <!--  </div>-->

        <!--</div>-->

        <div class="row">
          <div class="col-md-12 col-lg-12 d-flex align-items-center justify-content-center mt-lg-5">
            <div data-aos="fade-up" data-aos-delay="0">
              <a href="login.html" class="btn-get-a-quote">Get A Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->


    <!-- ======= Process Flow Section ======= -->
    <section id="process" class="process clients">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Process Flow</h2>
        </div>

        <div class="content">
          <div class="template-wrap">

            <div class="ep-flowchart" id="ep-flowchart">
              <div class="ep-svg-wrap">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 540">
                  <g id="Page-1" fill="none" fill-rule="evenodd">
                    <g id="Course-Template">
                      <g id="arrows" transform="translate(163 98)">
                        <g id="arrows/arrow-1.2" transform="rotate(90 69.5 70)">
                          <g id="arrow-1.2">
                            <path id="Line" stroke="#89969F" stroke-linecap="square" d="M.336 2.5h38.46"/>
                            <polygon id="Triangle" fill="#89969F" points="37 5 37 0 40 2.5"/>
                          </g>
                        </g>
                        <g id="arrows/arrow-1.2-copy" transform="rotate(90 16.5 123)">
                          <g id="arrow-1.2">
                            <path id="Line" stroke="#89969F" stroke-linecap="square" d="M.336 2.5h38.46"/>
                            <polygon id="Triangle" fill="#89969F" points="37 5 37 0 40 2.5"/>
                          </g>
                        </g>
                        <g id="arrows/arrow-4" transform="rotate(90 -37.5 176)">
                          <g id="arrow-4">
                            <path id="Line" stroke="#89969F" stroke-linecap="square" d="M.336 2.5h38.46"/>
                            <polygon id="Triangle" fill="#89969F" points="37 5 37 0 40 2.5"/>
                          </g>
                        </g>
                        <g id="arrows/arrow-4" transform="rotate(90 -79.5 218)">
                          <g id="arrow-4">
                            <path id="Line" stroke="#89969F" stroke-linecap="square" d="M.336 2.5h38.46"/>
                            <polygon id="Triangle" fill="#89969F" points="37 5 37 0 40 2.5"/>
                          </g>
                        </g>
                      </g>
                      <g id="ep-content" class="ep-svg-block"
                         transform="translate(35 56)">
                        <rect id="Rectangle" width="520" height="40" fill="#8BE5AD" rx="20"/>
                        <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                          <tspan x="27.022" y="25">Upload the CAD/PDF of the required part on the website</tspan>
                        </text>
                      </g>
                      <g id="ep-form" transform="translate(88 140)"
                         class="ep-svg-block">
                        <rect id="Rectangle" width="425" height="63" fill="#8BE5AD" rx="33"></rect>
                        <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                          <tspan x="33.022" y="25">Get bids on your project from manufactures</tspan>
                          <tspan x="78" y="50">(approx. cost and time required)</tspan>
                        </text>
                      </g>
                      <g id="ep-media" class="ep-svg-block"
                         transform="translate(88 246)">
                        <rect id="Rectangle" width="425" height="63" fill="#8BE5AD" rx="33"></rect>
                        <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                          <tspan x="33.022" y="25">Select the bid which suits you the most and</tspan>
                          <tspan x="78" y="50">confirm the order(advance payment)</tspan>
                        </text>
                      </g>
                      <g id="ep-elements" class="ep-svg-block"
                         transform="translate(90 353)">
                        <rect id="Rectangle" width="420" height="40" fill="#8BE5AD" rx="20"/>
                        <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                          <tspan x="27.022" y="25">Get quality control data and product pictures</tspan>
                        </text>
                      </g>
                      <g id="ep-unity" class="ep-svg-block"
                         transform="translate(120 437)">
                        <rect id="Rectangle" width="355" height="40" fill="#8BE5AD" rx="20"/>
                        <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                          <tspan x="27.022" y="25">Product is delivered to your doorstep</tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                </svg>

              </div>
              <!-- <transition name="pop-details">
                <div class="ep-detail-wrap" v-show="selected != ''"
                     @click="{{selected = ''}}">

                  <div class="ep-detail" v-show="selected == 'ep-content'">
                    <h3>Content</h3>
                    <p>The Message. What we are trying to say.</p>
                  </div>
                  <div class="ep-detail" v-show="selected == 'ep-form'">
                    <h3>Form</h3>
                    <p>How you will express the message.</p>
                  </div>
                  <div class="ep-detail" v-show="selected == 'ep-media'">
                    <h3>Media</h3>
                    <p>The tools and materials you use to convey the message</p>
                  </div>
                  <div class="ep-detail" v-show="selected == 'ep-elements'">
                    <h3>Elements of Design</h3>
                    <p>Line, Shape, Value, Texture, Color, Illusion of Depth, Illusion of Movement</p>
                  </div>
                  <div class="ep-detail" v-show="selected == 'ep-principles'">
                    <h3>Principles of Organization</h3>
                    <p>Balance, Movement, Emphasis/Dpminance/Focal Point, Rhythm (through repetition), Economy, Variety</p>
                  </div>
                  <div class="ep-detail" v-show="selected == 'ep-unity'">
                    <h3>Unity</h3>
                    <p>Both a guiding principle and the end-result of a well-considered design.</p>
                  </div>


                </div>
              </transition> -->

            </div>

          </div>
        </div>

      </div>
    </section>
    <!-- End About Us Section -->

    <!-- ======= Counts Section ======= -->
    <!--<section id="counts" class="counts">-->
    <!--  <div class="container">-->

    <!--    <div class="row">-->
    <!--      <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">-->
    <!--        <img src="assets/img/counts-img.svg" alt="" class="img-fluid">-->
    <!--      </div>-->

    <!--      <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">-->
    <!--        <div class="content d-flex flex-column justify-content-center">-->
    <!--          <div class="row">-->
    <!--            <div class="col-md-6 d-md-flex align-items-md-stretch">-->
    <!--              <div class="count-box">-->
    <!--                <i class="bi bi-emoji-smile"></i>-->
    <!--                <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" class="purecounter"></span>-->
    <!--                <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>-->
    <!--              </div>-->
    <!--            </div>-->

    <!--            <div class="col-md-6 d-md-flex align-items-md-stretch">-->
    <!--              <div class="count-box">-->
    <!--                <i class="bi bi-journal-richtext"></i>-->
    <!--                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>-->
    <!--                <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>-->
    <!--              </div>-->
    <!--            </div>-->

    <!--            <div class="col-md-6 d-md-flex align-items-md-stretch">-->
    <!--              <div class="count-box">-->
    <!--                <i class="bi bi-clock"></i>-->
    <!--                <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter"></span>-->
    <!--                <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>-->
    <!--              </div>-->
    <!--            </div>-->

    <!--            <div class="col-md-6 d-md-flex align-items-md-stretch">-->
    <!--              <div class="count-box">-->
    <!--                <i class="bi bi-award"></i>-->
    <!--                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>-->
    <!--                <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>&lt;!&ndash; End .content&ndash;&gt;-->
    <!--      </div>-->
    <!--    </div>-->

    <!--  </div>-->
    <!--</section>-->
    <!-- End Counts Section -->


    <!-- ======= More Services Section ======= -->
    <!--<section id="more-services" class="more-services">-->
    <!--  <div class="container">-->

    <!--    <div class="row">-->
    <!--      <div class="col-md-6 d-flex align-items-stretch">-->
    <!--        <div class="card" style='background-image: url("assets/img/more-services-1.jpg");' data-aos="fade-up" data-aos-delay="100">-->
    <!--          <div class="card-body">-->
    <!--            <h5 class="card-title"><a href="">Lobira Duno</a></h5>-->
    <!--            <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>-->
    <!--            <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">-->
    <!--        <div class="card" style='background-image: url("assets/img/more-services-2.jpg");' data-aos="fade-up" data-aos-delay="200">-->
    <!--          <div class="card-body">-->
    <!--            <h5 class="card-title"><a href="">Limere Radses</a></h5>-->
    <!--            <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>-->
    <!--            <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--      <div class="col-md-6 d-flex align-items-stretch mt-4">-->
    <!--        <div class="card" style='background-image: url("assets/img/more-services-3.jpg");' data-aos="fade-up" data-aos-delay="100">-->
    <!--          <div class="card-body">-->
    <!--            <h5 class="card-title"><a href="">Nive Lodo</a></h5>-->
    <!--            <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>-->
    <!--            <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-md-6 d-flex align-items-stretch mt-4">-->
    <!--        <div class="card" style='background-image: url("assets/img/more-services-4.jpg");' data-aos="fade-up" data-aos-delay="200">-->
    <!--          <div class="card-body">-->
    <!--            <h5 class="card-title"><a href="">Pale Treda</a></h5>-->
    <!--            <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>-->
    <!--            <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--  </div>-->
    <!--</section>-->
    <!-- End More Services Section -->

    <!-- ======= Features Section ======= -->
    <!--<section id="features" class="features">-->
    <!--  <div class="container">-->

    <!--    <div class="section-title" data-aos="fade-up">-->
    <!--      <h2>Features</h2>-->
    <!--      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>-->
    <!--    </div>-->

    <!--    <div class="row" data-aos="fade-up" data-aos-delay="300">-->
    <!--      <div class="col-lg-3 col-md-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-store-line" style="color: #ffbb2c;"></i>-->
    <!--          <h3><a href="">Lorem Ipsum</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-bar-chart-box-line" style="color: #5578ff;"></i>-->
    <!--          <h3><a href="">Dolor Sitema</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-calendar-todo-line" style="color: #e80368;"></i>-->
    <!--          <h3><a href="">Sed perspiciatis</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-paint-brush-line" style="color: #e361ff;"></i>-->
    <!--          <h3><a href="">Magni Dolores</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-database-2-line" style="color: #47aeff;"></i>-->
    <!--          <h3><a href="">Nemo Enim</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-gradienter-line" style="color: #ffa76e;"></i>-->
    <!--          <h3><a href="">Eiusmod Tempor</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-file-list-3-line" style="color: #11dbcf;"></i>-->
    <!--          <h3><a href="">Midela Teren</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-price-tag-2-line" style="color: #4233ff;"></i>-->
    <!--          <h3><a href="">Pira Neve</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-anchor-line" style="color: #b2904f;"></i>-->
    <!--          <h3><a href="">Dirada Pack</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-disc-line" style="color: #b20969;"></i>-->
    <!--          <h3><a href="">Moton Ideal</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-base-station-line" style="color: #ff5828;"></i>-->
    <!--          <h3><a href="">Verdo Park</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-lg-3 col-md-4 mt-4">-->
    <!--        <div class="icon-box">-->
    <!--          <i class="ri-fingerprint-line" style="color: #29cc61;"></i>-->
    <!--          <h3><a href="">Flavor Nivelanda</a></h3>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--  </div>-->
    <!--</section>-->
    <!-- End Features Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <!-- <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p> -->
        </div>

        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <!-- <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> -->
                  <h3>Arindrajit Chowdhary</h3>
                  <h4>Professor IITB</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    I have used their services and have been extremely satisfied with the quality of the product and their professionalism. I have recommended them to all my Phd and masters students for their projects as well.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <!-- <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> -->
                  <h3>Gaurav Desale</h3>
                  <h4>Lab associate at IITB</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Makemypart has really made manufacturing easy for me, allowing me to focus my time solely on designing while making sure that the parts I designed are perfectly manufactured. I really recommend their services.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <!-- <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> -->
                  <h3>Prathik Reddy</h3>
                  <h4>System engineer at IITB Racing</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    They have really reduced the workload that I used to face as a first-year, giving me more freedom to learn the basics of car design and explore more institute activities. Their wide range of partners allows me to choose the manufacturer as per my requirements. Do give them a try.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
    <!-- End Testimonials Section -->

    <!-- ======= Portfolio Section ======= -->
    <!--<section id="portfolio" class="portfolio">-->
    <!--  <div class="container">-->

    <!--    <div class="section-title" data-aos="fade-up">-->
    <!--      <h2>Portfolio</h2>-->
    <!--      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>-->
    <!--    </div>-->

    <!--    <div class="row" data-aos="fade-up" data-aos-delay="200">-->
    <!--      <div class="col-lg-12 d-flex justify-content-center">-->
    <!--        <ul id="portfolio-flters">-->
    <!--          <li data-filter="*" class="filter-active">All</li>-->
    <!--          <li data-filter=".filter-app">App</li>-->
    <!--          <li data-filter=".filter-card">Card</li>-->
    <!--          <li data-filter=".filter-web">Web</li>-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="400">-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-app">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>App 1</h4>-->
    <!--            <p>App</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-web">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>Web 3</h4>-->
    <!--            <p>Web</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-app">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>App 2</h4>-->
    <!--            <p>App</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-card">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>Card 2</h4>-->
    <!--            <p>Card</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-web">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>Web 2</h4>-->
    <!--            <p>Web</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-app">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>App 3</h4>-->
    <!--            <p>App</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-card">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>Card 1</h4>-->
    <!--            <p>Card</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-card">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>Card 3</h4>-->
    <!--            <p>Card</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 portfolio-item filter-web">-->
    <!--        <div class="portfolio-wrap">-->
    <!--          <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="">-->
    <!--          <div class="portfolio-info">-->
    <!--            <h4>Web 3</h4>-->
    <!--            <p>Web</p>-->
    <!--            <div class="portfolio-links">-->
    <!--              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>-->
    <!--              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--    </div>-->

    <!--  </div>-->
    <!--</section>-->
    <!-- End Portfolio Section -->

    <!-- ======= Team Section ======= -->
    <!--<section id="team" class="team section-bg">-->
    <!--  <div class="container">-->

    <!--    <div class="section-title" data-aos="fade-up">-->
    <!--      <h2>Team</h2>-->
    <!--      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>-->
    <!--    </div>-->

    <!--    <div class="row">-->

    <!--      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">-->
    <!--        <div class="member" data-aos="fade-up" data-aos-delay="100">-->
    <!--          <div class="member-img">-->
    <!--            <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">-->
    <!--            <div class="social">-->
    <!--              <a href=""><i class="bi bi-twitter"></i></a>-->
    <!--              <a href=""><i class="bi bi-facebook"></i></a>-->
    <!--              <a href=""><i class="bi bi-instagram"></i></a>-->
    <!--              <a href=""><i class="bi bi-linkedin"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="member-info">-->
    <!--            <h4>Walter White</h4>-->
    <!--            <span>Chief Executive Officer</span>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">-->
    <!--        <div class="member" data-aos="fade-up" data-aos-delay="200">-->
    <!--          <div class="member-img">-->
    <!--            <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="">-->
    <!--            <div class="social">-->
    <!--              <a href=""><i class="bi bi-twitter"></i></a>-->
    <!--              <a href=""><i class="bi bi-facebook"></i></a>-->
    <!--              <a href=""><i class="bi bi-instagram"></i></a>-->
    <!--              <a href=""><i class="bi bi-linkedin"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="member-info">-->
    <!--            <h4>Sarah Jhonson</h4>-->
    <!--            <span>Product Manager</span>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">-->
    <!--        <div class="member" data-aos="fade-up" data-aos-delay="300">-->
    <!--          <div class="member-img">-->
    <!--            <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="">-->
    <!--            <div class="social">-->
    <!--              <a href=""><i class="bi bi-twitter"></i></a>-->
    <!--              <a href=""><i class="bi bi-facebook"></i></a>-->
    <!--              <a href=""><i class="bi bi-instagram"></i></a>-->
    <!--              <a href=""><i class="bi bi-linkedin"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="member-info">-->
    <!--            <h4>William Anderson</h4>-->
    <!--            <span>CTO</span>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">-->
    <!--        <div class="member" data-aos="fade-up" data-aos-delay="400">-->
    <!--          <div class="member-img">-->
    <!--            <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="">-->
    <!--            <div class="social">-->
    <!--              <a href=""><i class="bi bi-twitter"></i></a>-->
    <!--              <a href=""><i class="bi bi-facebook"></i></a>-->
    <!--              <a href=""><i class="bi bi-instagram"></i></a>-->
    <!--              <a href=""><i class="bi bi-linkedin"></i></a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="member-info">-->
    <!--            <h4>Amanda Jepson</h4>-->
    <!--            <span>Accountant</span>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--    </div>-->

    <!--  </div>-->
    <!--</section>-->
    <!-- End Team Section -->

    <!-- ======= Pricing Section ======= -->
    <!--<section id="pricing" class="pricing">-->
    <!--  <div class="container">-->

    <!--    <div class="section-title">-->
    <!--      <h2>Pricing</h2>-->
    <!--      <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>-->
    <!--    </div>-->

    <!--    <div class="row">-->

    <!--      <div class="col-lg-4 col-md-6">-->
    <!--        <div class="box" data-aos="zoom-in-right" data-aos-delay="200">-->
    <!--          <h3>Free</h3>-->
    <!--          <h4><sup>$</sup>0<span> / month</span></h4>-->
    <!--          <ul>-->
    <!--            <li>Aida dere</li>-->
    <!--            <li>Nec feugiat nisl</li>-->
    <!--            <li>Nulla at volutpat dola</li>-->
    <!--            <li class="na">Pharetra massa</li>-->
    <!--            <li class="na">Massa ultricies mi</li>-->
    <!--          </ul>-->
    <!--          <div class="btn-wrap">-->
    <!--            <a href="#" class="btn-buy">Buy Now</a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 mt-4 mt-md-0">-->
    <!--        <div class="box recommended" data-aos="zoom-in" data-aos-delay="100">-->
    <!--          <h3>Business</h3>-->
    <!--          <h4><sup>$</sup>19<span> / month</span></h4>-->
    <!--          <ul>-->
    <!--            <li>Aida dere</li>-->
    <!--            <li>Nec feugiat nisl</li>-->
    <!--            <li>Nulla at volutpat dola</li>-->
    <!--            <li>Pharetra massa</li>-->
    <!--            <li class="na">Massa ultricies mi</li>-->
    <!--          </ul>-->
    <!--          <div class="btn-wrap">-->
    <!--            <a href="#" class="btn-buy">Buy Now</a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">-->
    <!--        <div class="box" data-aos="zoom-in-left" data-aos-delay="200">-->
    <!--          <h3>Developer</h3>-->
    <!--          <h4><sup>$</sup>29<span> / month</span></h4>-->
    <!--          <ul>-->
    <!--            <li>Aida dere</li>-->
    <!--            <li>Nec feugiat nisl</li>-->
    <!--            <li>Nulla at volutpat dola</li>-->
    <!--            <li>Pharetra massa</li>-->
    <!--            <li>Massa ultricies mi</li>-->
    <!--          </ul>-->
    <!--          <div class="btn-wrap">-->
    <!--            <a href="#" class="btn-buy">Buy Now</a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--    </div>-->

    <!--  </div>-->
    <!--</section>-->
    <!-- End Pricing Section -->

    <!-- ======= F.A.Q Section ======= -->
    <!--<section id="faq" class="faq">-->
    <!--  <div class="container">-->

    <!--    <div class="section-title" data-aos="fade-up">-->
    <!--      <h2>Frequently Asked Questions</h2>-->
    <!--    </div>-->

    <!--    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">-->
    <!--      <div class="col-lg-5">-->
    <!--        <i class="ri-question-line"></i>-->
    <!--        <h4>Non consectetur a erat nam at lectus urna duis?</h4>-->
    <!--      </div>-->
    <!--      <div class="col-lg-7">-->
    <!--        <p>-->
    <!--          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>&lt;!&ndash; End F.A.Q Item&ndash;&gt;-->

    <!--    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">-->
    <!--      <div class="col-lg-5">-->
    <!--        <i class="ri-question-line"></i>-->
    <!--        <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>-->
    <!--      </div>-->
    <!--      <div class="col-lg-7">-->
    <!--        <p>-->
    <!--          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>&lt;!&ndash; End F.A.Q Item&ndash;&gt;-->

    <!--    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">-->
    <!--      <div class="col-lg-5">-->
    <!--        <i class="ri-question-line"></i>-->
    <!--        <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>-->
    <!--      </div>-->
    <!--      <div class="col-lg-7">-->
    <!--        <p>-->
    <!--          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>&lt;!&ndash; End F.A.Q Item&ndash;&gt;-->

    <!--    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">-->
    <!--      <div class="col-lg-5">-->
    <!--        <i class="ri-question-line"></i>-->
    <!--        <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>-->
    <!--      </div>-->
    <!--      <div class="col-lg-7">-->
    <!--        <p>-->
    <!--          Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>&lt;!&ndash; End F.A.Q Item&ndash;&gt;-->

    <!--    <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="500">-->
    <!--      <div class="col-lg-5">-->
    <!--        <i class="ri-question-line"></i>-->
    <!--        <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>-->
    <!--      </div>-->
    <!--      <div class="col-lg-7">-->
    <!--        <p>-->
    <!--          Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </div>&lt;!&ndash; End F.A.Q Item&ndash;&gt;-->

    <!--  </div>-->
    <!--</section>-->
    <!-- End F.A.Q Section -->

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

</style>