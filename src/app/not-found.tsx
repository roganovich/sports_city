import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <section id="featured-services" className="featured-services section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
                         data-aos="fade-up">
                        <h1>404 - Страница не найдена</h1>
                        <p>К сожалению, страница, которую вы ищете, не существует.</p>
                        <div className="d-flex">
                            <Link className="btn-getstarted" href="/">Назад</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="100">
                        <Image
                            src="/4042.webp"
                            className="img-fluid"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}