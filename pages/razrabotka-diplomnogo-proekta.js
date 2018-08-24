import Link from 'next/link';
import Wrapper from 'components/Wrapper';


import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplomnyproekt'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlock/diplom';

import VideoBlock from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Разработка и написание дипломного проекта в Москве и РФ – цены, сроки написания под ключ" description="Разработка и написание дипломного проекта. Быстро, недорого и профессионально – компания BeSmarter! Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content="заказать дипломный проект купить цена стоимость" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a>Дипломный проект</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link>
                    <a href="#form" className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/111.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Дипломный проект</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 21 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/diplom-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Дипломная работа</span>
                            <p>от 14 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Магистерская диссертация</span>
                            <p>от 23 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диплом MBA</span>
                            <p>от <b>25 000</b> руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>


            <section className="block-service">
                <Link href="/zashitit">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
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
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" fields={fields}/>

            <section className="block-text">
                <h1 className="block-text__title">Разработка и написание дипломного проекта</h1>
                <p className="block-text__par">
                    Вы можете заказать дипломный проект в BeSmarter!, чтобы сэкономить время и нервы, и, конечно же, успешно защититься. К нам обращаются в таких ситуациях:
                </p>
                <ul>
                    <li>
                        нет возможности структурировать имеющуюся информацию из-за нехватки времени;
                    </li>
                    <li>
                        работа написана лишь частично;
                    </li>
                    <li>
                        нет возможности завершить проект из-за болезни, декрета, беременности;
                    </li>
                    <li>
                        не получается посвятить время исследованиям и практической части.
                    </li>
                </ul>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества выполнения под заказ
                </h2>
                <p className="block-text__par">
                    Поскольку разработка дипломного проекта всегда начинается с подготовки плана, то при сотрудничестве с BeSmarter! под ключ вы получите действительно уникальный материал, а не частично скопированный из сети. Есть и другие преимущества:
                </p>
                <ol>
                    <li>
                        Вы можете указать те источники, которые необходимо исследовать более тщательно. Например, если на них как раз указал ваш научный руководитель.
                    </li>
                    <li>
                        Гарантирована научная новизна. Наши авторы используют только проверенные и актуальные данные. С вами не случится ситуация, когда во время защиты члены комиссии укажут на неуникальность работы.
                    </li>
                    <li>
                        Структурированная и понятная форма подачи материала. Вам не потребуется слишком много времени для того, чтобы все изучить, поэтому и защититься на «отлично» более чем реально.
                    </li>
                </ol>
                <p className="block-text__par">
                    Почему лучше заказывать написание, а не совершать покупку готового материала? Мы гарантируем вам уникальность и актуальность подготовленного проекта. Кроме того, есть возможность договориться о внесении бесплатных правок и уточнений.
                </p>
            </section>

            <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
                <h2 className="block-form-timer__title">
                    <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
                    Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
                </h2>
                <CallMeFormWithTimer timerDuration={155555}>
                    <p>при одновременном заказе вместе с работой</p>
                </CallMeFormWithTimer>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Факторы, от которых зависит цена
                </h2>
                <p className="block-text__par">
                    Стоимость зависит от:
                </p>
                <ol>
                    <li>
                        Срочности заказа.
                    </li>
                    <li>
                        Необходимой глубины исследований, которые должны присутствовать в материале.
                    </li>
                    <li>
                        Сложности и обширности тематики вопроса.
                    </li>
                    <li>
                        Объема.
                    </li>
                </ol>
                <p className="block-text__par">
                    Также нужно понимать, что технический дипломный проект, как правило, будет стоить дороже, ведь в нем обязательно должны быть чертежи и схемы.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Что входит в стоимость
                </h2>
                <p className="block-text__par">
                    Цена обговаривается индивидуально по каждому заказу, однако типичный набор услуг включает в себя:
                </p>
                <ul>
                    <li>
                       Проработку источников.
                    </li>
                    <li>
                       Написание материала по главам, структурирование контента.
                    </li>
                    <li>
                       Вычитка и внесение правок.
                    </li>
                    <li>
                       Оформление и верстка по критериям ГОСТа.
                    </li>
                    <li>
                       Проверка системой «Антиплагиат».
                    </li>
                    <li>
                       Сдача в оговоренный срок.
                    </li>
                </ul>
                <p className="block-text__par">
                    Если есть необходимость, то техническая документация для дипломной работы прорабатывается отдельно.
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Хотите сэкономить?
                </h2>
                <ul>
                    <li>
                       Вы можете оплатить только практическую или теоретическую часть, а также какую-то отдельную (непроработанную) главу / раздел.
                    </li>
                    <li>
                       Если дедлайны не горят, то цена на выполнение дипломного проекта будет не такой высокой.
                    </li>
                    <li>
                       Исследования по гуманитарным направлениям всегда стоят дешевле, чем заказы по техническим дисциплинам (а также по информатике, лингвистике).
                    </li>
                </ul>
            </section>

            <VideoBlock>
                <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameborder="0" allowfullscreen></iframe>
            </VideoBlock>

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества
                </h2>
                <ul>
                    <li>
                        Позвоните по телефону +7 (495) 772-40-90, +7 (495) 772-90-40 или заполните заявку на сайте.
                    </li>
                    <li>
                        С вами будут согласованы все детали и нюансы, включая стоимость дипломного проекта. Вы можете заказать написание целиком или по главам. Мы рекомендуем первый вариант, ведь когда на руках имеется вся работа полностью, можно без проблем и переживаний отвечать на любые вопросы научного руководителя.
                    </li>
                    <li>
                        Внесите предоплату, чтобы задание поступило в работу авторам BeSmarter!
                    </li>
                </ul>
            </section>

            <a name="form" id="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Заказать" fields={fields}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
