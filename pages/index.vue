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
            <button type="button" data-bs-target="#services-slider" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#services-slider" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#services-slider" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#services-slider" data-bs-slide-to="6" aria-label="Slide 7"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card" style='background-image: url(/assets/img/services/industry-technology-machine-machining-machinery-industrial.jpg);' data-aos="fade-up" data-aos-delay="100">
                <div class="card-body">
                  <h5 class="card-title"><nuxt-link to="services">CNC Milling</nuxt-link></h5>
                  <!-- <p class="card-text">
                        Milling is the process of machining using rotary cutters to remove material by advancing a cutter into a workpiece. We provide cutting-edge milling services offered by our partners to deliver products according to your requirements. 
                        <br>
                        Milling is best applied as a secondary process to an already machined workpiece. It helps to define features and serves as a “finishing coat”. Use milling as a secondary process to add features such as holes, slots, pockets, and contours.
                  </p>
                  <br> -->
                  <!-- <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div> -->
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card" style='background-image: url(/assets/img/services/cnc%20turning.jpg);' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><nuxt-link to="services">CNC Turning</nuxt-link></h5>
                  <!-- <p class="card-text">
                    Turning involves rotation of the work piece while the cutting tool moves in a linear motion. This results in a cylindrical shape. A lathe is the machine of choice for all turning operations.
                    <br>
                        Our partners have industry-standard lathe machines for all your turning requirements. We offer both CNC and manual lathes depending on your needs and budget.
                    <br>
                        The benefits of turning are - good tolerance, short lead times, and a wide range of materials that can be used.
                  </p>
                  <br> -->
                  <!-- <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div> -->
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card" style='background-image: url(/assets/img/services/laser%20cutting.jpg);' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><nuxt-link to="services">Laser Cutting</nuxt-link></h5>
                  <!-- <p class="card-text">
                        Laser cutting is a technology that uses a laser to vaporize materials, resulting in a cut edge. Our partners have different laser cutting machines which can give you parts with thickness ranging from 0.5mm to as much as 20mm with high accuracy.
                  </p>
                  <br> -->
                  <!-- <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div> -->
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card" style='background-image: url(/assets/img/services/Retro_Systems_Waterjet.jpg);' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><nuxt-link to="services">Waterjet cutting</nuxt-link></h5>
                  <!-- <p class="card-text">
                  A water jet cutter is an industrial tool capable of cutting a wide variety of materials using an extremely high-pressure jet of water, or a mixture of water and an abrasive substance.
                <br>
                    It is used to cut materials that are sensitive to heat like aluminum and even softer materials like wood and rubber. Our partners have cutting-edge water jet cutters according to your requirements.
                </p>
                  <br> -->
                  <!-- <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div> -->
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card" style='background-image: url(/assets/img/services/finish%20grinding.jpg);' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><nuxt-link to="services">Finishing/Grinding</nuxt-link></h5>
                  <!-- <p class="card-text">
                    Surface grinding is the most common of the grinding operations. It is a finishing process that uses a rotating abrasive wheel to smooth the flat surface of metallic or nonmetallic materials to give them a more refined look by removing the oxide layer and impurities on workpiece surfaces.
                <br>
                    Our partners have wide experience and industry-standard grinding machines to provide a smooth and required finish to your workpiece.
                  </p>
                  <br> -->
                  <!-- <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div> -->
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card" style='background-image: url(/assets/img/services/metal%20fabrication.jpg);' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><nuxt-link to="services">CNC Bending</nuxt-link></h5>
                  <!-- <p class="card-text">
                    Computer numerically controlled (CNC) bending is a manufacturing process that is carried out by CNC press brakes (. These machines can bend sheet metal work from just a few mm across to sections many meters long. 
                <br>
                    Our partners have a wide range of bending machines ranging from pipe bending to sheet bending to meet your requirements. 
                <br>
                    Our partners have wide experience and industry-standard grinding machines to provide a smooth and required finish to your workpiece.
                  </p> -->
                  <!-- <br> -->
                  <!-- <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div> -->
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card" style='background-image: url(/assets/img/services/metals.jpg);' data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title"><nuxt-link to="services">Material Procurement</nuxt-link></h5>
                  <!-- <p class="card-text">
                    Getting high-quality materials at the right rates has always been difficult, ever so much more when you don’t have the right contacts!
                <br>
                    Our partners offer you the best quality materials at the right rates so you can always worry-free focus on your design and leave the material procurement to us.
                  </p>
                  <br> -->
                  <!-- <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div> -->
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

        <div class="row">
          <div class="col-md-12 col-lg-12 d-flex align-items-center justify-content-center mt-lg-5">
            <div data-aos="fade-up" data-aos-delay="0">
              <nuxt-link to="login" class="btn-get-a-quote">Get A Quote</nuxt-link>
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

        <div class="content" data-aos="fade-up">
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
    <!--        <img src="/assets/img/counts-img.svg" alt="" class="img-fluid">-->
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
    <!--        <div class="card" style='background-image: url("/assets/img/more-services-1.jpg");' data-aos="fade-up" data-aos-delay="100">-->
    <!--          <div class="card-body">-->
    <!--            <h5 class="card-title"><a href="">Lobira Duno</a></h5>-->
    <!--            <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>-->
    <!--            <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">-->
    <!--        <div class="card" style='background-image: url("/assets/img/more-services-2.jpg");' data-aos="fade-up" data-aos-delay="200">-->
    <!--          <div class="card-body">-->
    <!--            <h5 class="card-title"><a href="">Limere Radses</a></h5>-->
    <!--            <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>-->
    <!--            <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--      <div class="col-md-6 d-flex align-items-stretch mt-4">-->
    <!--        <div class="card" style='background-image: url("/assets/img/more-services-3.jpg");' data-aos="fade-up" data-aos-delay="100">-->
    <!--          <div class="card-body">-->
    <!--            <h5 class="card-title"><a href="">Nive Lodo</a></h5>-->
    <!--            <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>-->
    <!--            <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="col-md-6 d-flex align-items-stretch mt-4">-->
    <!--        <div class="card" style='background-image: url("/assets/img/more-services-4.jpg");' data-aos="fade-up" data-aos-delay="200">-->
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

        <div id="testimonials-slider" class="carousel slide" data-bs-ride="carousel" data-interval="1000">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#testimonials-slider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#testimonials-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <!-- <button type="button" data-bs-target="#testimonials-slider" data-bs-slide-to="2" aria-label="Slide 3"></button> -->
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <!-- <div class="testimonial-wrap"> -->
                <!-- <div class="testimonial-item"> -->
                  <!-- <img src="/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> -->
                  <!-- <h3>Arindrajit Chowdhary</h3> -->
                  <!-- <h4>Professor IITB</h4> -->
                  <!-- <p> -->
                    <!-- <i class="bx bxs-quote-alt-left quote-icon-left"></i> -->
                    <!-- I have used their services and have been extremely satisfied with the quality of the product and their professionalism. I have recommended them to all my Phd and masters students for their projects as well. -->
                    <!-- <i class="bx bxs-quote-alt-right quote-icon-right"></i> -->
                  <!-- </p> -->
                <!-- </div> -->
              <!-- </div> -->
            <!-- </div> -->
            <!-- <div class="carousel-item"> -->
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <!-- <img src="/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> -->
                  <h3>Gaurav Desale</h3>
                  <h4>Lab associate at IITB</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Makemypart has really made manufacturing easy for me, allowing me to focus my time solely on designing while making sure that the parts I designed are perfectly manufactured. I really recommend their services.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <!-- <img src="/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> -->
                  <h3>Prathik Reddy</h3>
                  <h4>System engineer at IITB Racing</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    They have really reduced the workload that I used to face as a first-year, giving me more freedom to learn the basics of car design and explore more institute activities. Their wide range of partners allows me to choose the manufacturer as per my requirements. Do give them a try.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <!--<div class="carousel-item">-->
            <!--  <img src="..." class="d-block w-100" alt="...">-->
            <!--</div>-->
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#testimonials-slider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonials-slider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </section>
    <!-- End Testimonials Section -->


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
  .carousel-control-next, .carousel-control-prev{
    height: fit-content;
    color: black;
    margin: auto;
  }
  .carousel-control-next-icon, .carousel-control-prev-icon{
    background: white;
    border-radius: 50%;
    background-size: 69%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px;
  }
  .carousel-control-next-icon{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }
  .carousel-control-prev-icon{
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
  }
  #testimonials .carousel-control-next{
    right: -50px!important;
  }
  #testimonials .carousel-control-prev{
    left: 0px!important;
  }
  #testimonials .carousel-indicators{
    bottom: 15px;
  }
  .carousel-indicators{
    bottom: -50px;
  }
  .carousel-indicators [data-bs-target]{
    background-color: #000;
  }
  .more-services .card-title, .services .card-title{
    margin-bottom: 0;
  }
  .more-services .card-body, .services .card-body{
    width: fit-content;
  }
  .more-services .card-body, .services .card-body{
    margin: auto;
  }
  .more-services .card-body, .services .card-body{
    background: rgba(255, 255, 255, 0.5);
  }
  .more-services .card:hover .card-body, .services .card:hover .card-body{
    background: rgba(255, 255, 255, 0.9);
  }
  .more-services .card:hover .read-more a, .more-services .card:hover .card-title, .more-services .card:hover .card-title a, .more-services .card:hover .card-text, .services .card:hover .read-more a, .services .card:hover .card-title, .services .card:hover .card-title a, .services .card:hover .card-text{
    color: black;
  }
  .more-services .card, .services .card{
    padding: 400px 20px 20px 20px;
  }
</style>