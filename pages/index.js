import Head from 'next/head'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContactLottie from '../components/ContactLottie';
import { MdEmail, MdPhone } from 'react-icons/md';
import  { ShowBox }  from '../components/ShowBox.jsx'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Nymphs Regen Pvt. Ltd.</title>
        <meta name="description" content="Official website of NymphsRegen Pvt. Ltd" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <div>
          <main className="screen-1">
          <section className="main-section">
            <div className="header">
              <a className="home" href="https://www.handoff.design">
                <img className="image" src="/nymphsRegenLogo.svg"/>
              </a>
              <div className="nav">
              <a
                href="https://wa.me/9743149354"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="custom-btn btn-11">Let&apos;s Talk</button>
              </a>
              </div>
            </div>
            <div className="main-container">
              <section className="hero-section">
                <div className="hero-tagline">
                  <h1 className="heading-1">Let&apos;s go <span>Green</span> together.</h1>
                  <p className="paragraph">
                    We provide eco-friendly solutions across multiple industries!
                  </p>
                  <p className="paragraph-2">
                    Join us at NymphsRegen and together we&apos;ll do our part in the
                    Green Revolution
                  </p>
                  <div ontouchstart="">
                    <div className="nymphsButton">
                      <a href="#about">Know More</a>
                    </div>
                  </div>
                </div>
                <div className="hero-image-container">
                <img className="image-2" src="/hero-illustration.png"/>
                </div>
              </section>
              <section className="about-section" id="about">
                <div className="about-heading"><h1 className="heading-5">About</h1></div>
                <div className="about-container">
                  <div className="nymphsregenbox">
                  <ShowBox />
                  </div>
                  <div className="about-content">
                    <p className="paragraph-3">
                      With decades of experience with us and a clear mission to
                      achieve a better and more enviromentally friendly and
                      sustainable future for all now more than ever, we provide
                      pioneering and innovative green solutions across multiple
                      sectors.
                    </p>
                    <ul className="values">
                      <li className="screen-1__list-item">
                        <div className="screen-1__value-container">
                          <i className="material-icons screen-1__icon">face</i>
                          <div className="screen-1__value-content">
                            <div className="screen-1__value-title">
                              Trusted &amp; Reliable
                            </div>
                            <p className="screen-1__paragraph-4">
                              With immense industrial knowledge and experience on
                              the multiple sectors we have gained trust and is known
                              to be reliable and our brand is a hallmark of quality.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="screen-1__list-item">
                        <div className="screen-1__value-container">
                          <i className="material-icons screen-1__icon">face</i>
                          <div className="screen-1__value-content">
                            <div className="screen-1__value-title">
                              Philosophy
                            </div>
                            <p className="screen-1__paragraph-4">
                            The core philosophy of our ventures is to provide green, renewable and sustainable products and solutions and we also make sure all company actions and directions are in line with this!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="screen-1__list-item">
                        <div className="screen-1__value-container">
                          <i className="material-icons screen-1__icon">face</i>
                          <div className="screen-1__value-content">
                            <div className="screen-1__value-title">
                              Growth
                            </div>
                            <p className="screen-1__paragraph-4">
                            Our strategy and experiences have enabled us to show great growth across many sectors.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="awards-section">
                <div className="awards-title"><h1 className="heading-3">Awards</h1></div>
                <div className="carousel-container">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                  >
                    <SwiperSlide><img className="image-3" src="/firstCertificate.jpeg"/></SwiperSlide>
                    <SwiperSlide><img className="image-3" src="/secondCertificate.jpg"/></SwiperSlide>
                  </Swiper>
                </div>
              </section>
              <section className="ventures-section" id="ventures">
                <div className="ventures-title">
                  <h1 className="heading-4">Our Ventures</h1>
                </div>
                <div className="venture-container">
                  <div className="venture-1st-tier-container">
                    <div className="venture-1-container">
                    <img className="packaging" src="/venture1.png"/>
                      <h1 className="nymphspackaging">Nymphs Renewable Packaging</h1>
                      <div className="v1-desc">
                        Supply of renewable packaging materials to meet all your necessary
                        requirements
                      </div>
                    </div>
                    <div className="venture-2-container">
                    <img className="image-7" src="/venture2.png"/>
                      <h1 className="heading-7">Nymphs Infrastructure &amp; Design</h1>
                      <div className="v2-desc">
                        Environment conscious design that enables sustainable
                        infrastructure.
                      </div>
                    </div>
                  </div>
                  <div className="venture-2nd-tier-container">
                    <div className="venture-3-container">
                    <img className="foods" src="/venture3.png"/>
                      <h1 className="nymphsfood">Nymphs Foods</h1>
                      <div className="v3-desc">
                        Organic, Traditional and Tasty foods.
                      </div>
                    </div>
                    <div className="venture-4-container">
                    <img className="energy" src="/venture4.png"/>
                      <h1 className="nymphsenergy">Nymphs Energy</h1>
                      <div className="v4-desc">Sustainable energy solutions</div>
                    </div>
                  </div>
                  <div className="venture-3rd-tier-container">
                    <div className="venture-5-container">
                    <img className="skcapital" src="/venture5.png" />
                      <h1 className="capital">Nymphs SK Capital</h1>
                      <div className="v5-desc">
                        Investments Management and Capital Management.
                      </div>
                    </div>
                    <div className="venture-6-container">
                    <img className="ayurveda" src="/venture6.png" />
                      <h1 className="ayur">Nymphs Ayur</h1>
                      <div className="v6-desc">
                        Ayurvedic medicines and herbal products.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="contact-section">
                <div className="contact-title">
                  <h1 className="contact">Contact</h1>
                  <div className="text">We&apos;d Love to hear from you</div>
                </div>
                <div className="contact-details-container">
                  <div className="contact-section-container">
                    <div className="email-container">
                      <h1 className="heading-6">Email</h1>
                      <div className="emailInfo">
                      <MdEmail className="emailicon"/>
                      <div className="text-2"><a href="mailto:business@nymphsregen.com?subject=Mail from Our Site">business@nymphsregen.com</a></div>
                      </div>
                    </div>
                    <div className="email-container-2">
                      <h1 className="heading-8">Phone</h1>
                      <div className="phoneInfo">
                      <MdPhone className="phoneicon"/>
                      <div className="text-4"><a href="tel:9743149354">+91 9743149354</a></div>
                      </div>
                    </div>
                    <div className="email-container-4">
                      <h1 className="heading-9">Address</h1>
                      <div className="text-5">
                        <address>
                        Novel Business park, #57 Vibgyor Net Connections, 13th
                        cross, Salarpuria Triton, Anepalya, Koramangala Bangalore-
                        560047, India.
                        </address>
                      </div>
                    </div>
                  </div>
                  <div className="map-container">
                    <ContactLottie />
                  </div>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>

  )
}
