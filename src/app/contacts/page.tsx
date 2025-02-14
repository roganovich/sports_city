import Link from 'next/link';

export default function Page() {
  return (
      <div>
          <div className="page-title">
              <div className="container d-lg-flex justify-content-between align-items-center">
                  <h1 className="mb-2 mb-lg-0">Контакты</h1>
                  <nav className="breadcrumbs">
                      <ol>
                          <li><Link href="/">Главная</Link></li>
                          <li className="current">Контактная информация</li>
                      </ol>
                  </nav>
              </div>
          </div>

          <section id="contact" className="contact section">
              <div className="container section-title" data-aos="fade-up">
                  <span>Section Title</span>
                  <h2>Contact</h2>
                  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
              </div>
              <div className="container" data-aos="fade-up" data-aos-delay="100">
                  <div className="row gy-4">
                      <div className="col-lg-12">
                          <div className="info-wrap">
                              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                                  <div>
                                      <h3>Address</h3>
                                      <p>A108 Adam Street, New York, NY 535022</p>
                                  </div>
                              </div>
                              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                  <i className="bi bi-telephone flex-shrink-0"></i>
                                  <div>
                                      <h3>Call Us</h3>
                                      <p>+1 5589 55488 55</p>
                                  </div>
                              </div>
                              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                  <i className="bi bi-envelope flex-shrink-0"></i>
                                  <div>
                                      <h3>Email Us</h3>
                                      <p>info@example.com</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>

  );
}
