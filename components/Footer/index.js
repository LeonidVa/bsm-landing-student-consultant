import Link from 'next/link';

import './index.scss';
import foxLogo from 'img/fox-logo.png'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands'

import BottomHelper from 'components/common/BottomHelper'

// const { faTwitter, faFacebookF, faTumblr } = brands

export default (props) => (
    <div>
        <BottomHelper/>

        <div className="footer">
            <div className="inner">
                <div className="footer__logo">
                    <img src={foxLogo} alt=""/>
                </div>

                <div className="footer__center">
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link href="/contacts">
                                    <a>Контакты</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a href="about">О нас</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing">
                                    <a>Услуги и Цены</a>
                                </Link>
                            </li>
                            <li><a href="#">Авторам</a></li>
                            <li>
                                <Link href="/guarantees">
                                    <a>Гарантии</a>
                                </Link>
                            </li>
                            <li><a href="#">Оплата</a></li>
                        </ul>
                    </nav>
                </div>

                {/* <div className="footer__socials">
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </Link>
                    <Link href="#"> 
                        <a>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faTumblr} />
                        </a>
                    </Link>
                </div> */}
            </div>
            <p className="copyright">

                <span>119019, Москва Большой Кисловский переулок, д. 1 стр. 2, офис 211 ИНН 7725765120 ОГРН 1127746632276</span>
                <span>м. Арбатская, м. Александровский сад, м. Библиотека им. Ленина, м. Боровицкая</span>
                <br/>
                <span>Уважаемые клиенты!</span>
                <span>Компания «БиСмартер», строго выполняя требования законодательства РФ, не продаёт дипломы, курсовые и другие готовые работы.</span>
                <span>Зато мы отлично подберём нужный свежий материал, структурируем его по определённому Вами плану.</span>
                <span>Мы подготовим Вас к успешной спокойной защите любой сложности!</span>
                <br/>
                <span>© 2004-{1900 + new Date().getYear()}</span>

            </p>
        </div>
    </div>
)