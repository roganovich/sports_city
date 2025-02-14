import Link from 'next/link';

export default function Page() {
  return (
      <div>
        <div className="page-title">
            <div className="container d-lg-flex justify-content-between align-items-center">
                <h1 className="mb-2 mb-lg-0">Регистрация</h1>
                <nav className="breadcrumbs">
                    <ol>
                        <li><Link href="/">Главная</Link></li>
                        <li className="current">Регистрация</li>
                    </ol>
                </nav>
            </div>
        </div>
        <section id="registration-services" className="">
            <div className="contact container section-title">
                <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up"
                      data-aos-delay="200">
                    <div className="row gy-4">

                        <div className="col-md-6">
                            <label htmlFor="name-field" className="pb-2">Your Name</label>
                            <input type="text" name="name" id="name-field" className="form-control" required=""/>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="email-field" className="pb-2">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email-field" required=""/>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="subject-field" className="pb-2">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="message-field" className="pb-2">Message</label>
                            <textarea className="form-control" name="message" rows="10" id="message-field"
                                      required=""></textarea>
                        </div>

                        <div className="col-md-12 text-center">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>

                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
  );
}
