import Link from 'next/link';

export default function Page() {
  return (
    <div className="page-title">
        <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Информация</h1>
            <nav className="breadcrumbs">
                <ol>
                    <li><Link href="/">Главная</Link></li>
                    <li className="current">Информация</li>
                </ol>
            </nav>
        </div>
    </div>
  );
}
