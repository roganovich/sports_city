import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="footer" className="footer page-title">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" className="d-flex align-items-center">
                            <span className="sitename">Спортивный город</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>Санкт-Петербург</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+7 999 999 99 99</span></p>
                            <p><strong>Email:</strong> <span>info@example.com</span></p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Полезные ссылки</h4>
                        <ul>
                            <li><Link href="/">Главная</Link></li>
                            <li><Link href="/fields">Площадки</Link></li>
                            <li><Link href="/teams">Команды</Link></li>
                            <li><Link href="/informations">Информация</Link></li>
                            <li><Link href="/contacts">Контакты</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Наши сервисы</h4>
                        <ul>
                            <li><Link href="/">Главная</Link></li>
                            <li><Link href="/fields">Площадки</Link></li>
                            <li><Link href="/teams">Команды</Link></li>
                            <li><Link href="/informations">Информация</Link></li>
                            <li><Link href="/contacts">Контакты</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <h4>Мы в социальных сетях</h4>
                        <p>Следите за нами в социальных сетях</p>
                        <div className="social-links d-flex">
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span></p>
                <div className="credits">
                    Спортивный город
                </div>
            </div>
        </footer>
    );
}
