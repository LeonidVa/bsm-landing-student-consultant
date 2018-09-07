import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Estimate';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/mba'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";


const page = () => (
    <Wrapper title="Диплом MBA (мва, мба) – заказать диплом MBA! Помощь в написании дипломной работы mba | Диплом mba на заказ в Москве – Besmarter!"
             description="Многие задаются вопросом: «Как успеть написать диплом МВА срочно и при этом уделить достаточно времени работе?» Оптимальным решением в такой ситуации становится диплом MBA на заказ в Москве от компании BeSmarter!: мы выполняем для Вас эту трудоёмкую работу на самом высоком уровне, а Вы в это время спокойно занимаетесь своим делом и зарабатываете деньги.">
        <div className="wrapper bg bg-c2 bg-img bg-img2">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="диплом mba в Москве дипломы мва на заказ заказать написание дипломной работы мба срочно кейсы мва"/>
            </MetaTags>

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/"><a>Главная</a></Link>
                    <span> / </span>
                    <Link href="/diplom-mba-na-zakaz"><a>Диплом MBA</a></Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link>
                    <a href="#form" className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/88.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Диплом MBA</span>
                            <p className="block-service__par">Решаем кейсы любой сложности</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 25 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Дипломный проект</span>
                            <p>от 21 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Магистерская диссертация</span>
                            <p>от 23 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/diplom-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Дипломная работа</span>
                            <p>от 14 000 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>


            <section className="block-service__dis">
            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/mat-dlya-zash.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Материалы для успешной защиты</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">Доступные цены</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-4">
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/zashitit">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>
            </section>


            <section className="block-text">
                <h1 className="block-text__title">
                    Диплом MBA на заказ
                </h1>
                <ul>
                    <li>
                        <b>Гарантия качества</b><br/>
                        Напишем диплом МБА в соответствии с вашими требованиями и оформим по правилам.
                    </li>
                    <li>
                        <b>Уникальность текста</b><br/>
                        Проверка работы осуществляется с помощью всех основных онлайн-сервисов антиплагиата (АП, АП.вуз, Etxt, Advego).
                    </li>
                    <li>
                        <b>Пунктуальность</b><br/>
                        Срок сдачи готового диплома фиксируется в официальном договоре и отслеживается вашим менеджером.
                    </li>
                    <li>
                        <b>Последовательность</b><br/>
                        Мы сопровождаем вас до успешной защиты, консультируя и помогая с подготовкой дополнительных материалов.
                    </li>
                    <li>
                        <b>Удобство</b><br/>
                        С помощью нашего сайта заказать диплом MBA можно не только в Москве, но и в любом регионе России.
                    </li>
                </ul>
            </section>

            <FormEstimate />

            <ImageBlock imageSrc={require('static/images/block/diplom MBA.jpg')}/>



            <section className="block-text">
                <h2 className="block-text__title">
                    Как мы работаем?
                </h2>
                <p className="block-text__par">
                    Вы оформляете заявку на помощь в написании дипломной работы MBA удобным для себя способом – онлайн, по телефону (<b>+7 495 772-40-90</b>) или в нашем <a href="/contacts">офисе</a> (Москва, пер. Большой Кисловский, д. 1, стр. 2, оф. 211).
                </p>
                <p className="block-text__par">
                    Мы проводим с вами собеседование и уточняем все детали заказа. Определяется стоимость услуги и согласовывается автор. По результатам переговоров подписывается официальный договор с указанием всех ваших требований и наших обязательств.
                </p>
                <p className="block-text__par">
                    Согласованный исполнитель пишет диплом МВА на заказ и сдает его в оговоренные сроки. При необходимости вы можете заказать бесплатные корректировки. Далее автор консультирует вас и помогает подготовиться к защите.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer />

            <section className="block-text">
                <h2 className="block-text__title">
                    Кто наши авторы?
                </h2>
                <p className="block-text__par">
                    Они – наша главная гордость! Компания BeSmarter! принципиально не пользуется услугами фрилансеров-копирайтеров и прочих ненадежных кадров. В нашем штате – исключительно действующие преподаватели вузов различных дисциплин, имеющие научную степень как минимум кандидата наук.
                </p>
                <p className="block-text__par">
                    Более того, мы предоставляем вам уникальную возможность предварительно удостовериться в компетентности потенциального исполнителя и переговорить с ним. Благодаря такому профессиональному подходу более 98% наших клиентов защищаются на «отлично»!
                </p>
            </section>

            <Video>
                <iframe src="https://www.youtube.com/embed/mzDkG6XRKuc" frameborder="0" allowfullscreen></iframe>
            </Video>



            <section className="block-text">
                <h2 className="block-text__title">
                    Как сэкономить при заказе диплома MBA?
                </h2>
                <p className="block-text__par">
                    Хотите <b>написать диплом MBA недорого</b>? Вот три простых способа экономии:
                </p>
                <ol>
                    <li>
                        Не теряйте времени. Заказать диплом МВА лучше заранее. Мы, конечно, можем написать работу срочно, даже за 1 день, но это обойдется вам значительно дороже.
                    </li>
                    <li>
                        Проконсультируйтесь с нами. Если есть возможность выбора темы, позвольте нам помочь найти оптимальный вариант.
                    </li>
                    <li>
                        Предложите свои наработки. Если вы уже приступили к написанию работы, принесите эти материалы, и мы снизим цену.
                    </li>
                </ol>
                <p className="block-text__par italic">
                    <b>Воспользуйтесь услугами специалистов BeSmarter!, и вы не пожалеете об этом!</b>
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="//drive.google.com/file/d/159HfczgLjy3uiVHfryJBAP9GLhN3RLHR/preview" frameBorder="0" allowFullScreen></iframe>
            </Video>

            <a name="form" id="form"/>
            <FormOrder />

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
