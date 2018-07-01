import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty';

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya';

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';


const page = () => (
    <Wrapper title="Написание рефератов | «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img5">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="Каждому студенту знакома такая ситуация: через пару дней уже начинается сессия, а рефераты, которые нужно было сделать в течение семестра, еще не готовы. Казалось бы, всего лишь какие-то рефераты могут стать препятствием на пути к сессии! Но, увы и ах, это так. Время летит так быстро, а работа, семья, друзья, естественно, требуют к себе внимания. Чтобы написание реферата не превратилось в препятствие к успешной сессии, наша компания BeSmarter! всегда готова протянуть свою руку помощи!" />
                <meta name="keywords" content="" />
            </MetaTags>
            
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/stati">
                        <a>Статьи</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Написание рефератов</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/i.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-black">
                            <span className="block-service__title">Курсовая работа</span>
                            <p className="block-service__par">Не парься сам – доверься нам!</p>
                            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                            <p className="block-service__par">От 4 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-5">
                    <Link href="/razrabotka-diplomnogo-proekta">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/diplom-mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Курсовой проект</span>
                            <p>от 8 000 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
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

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h1 className="block-text__title">
                    Написание рефератов
                </h1>
                <p className="block-text__par italic right">
                    "Важно не количество знаний, а качество их. Можно знать очень многое, не зная самого нужного."
                </p>
                <p className="block-text__par bold right">
                    Лев Николаевич Толстой
                </p>
                <p className="block-text__par">
                    Каждому студенту знакома такая ситуация: через пару дней уже начинается сессия, а рефераты, которые нужно было сделать в течение семестра, еще не готовы. Казалось бы, всего лишь какие-то рефераты могут стать препятствием на пути к сессии! Но, увы и ах, это так. Время летит так быстро, а работа, семья, друзья, естественно, требуют к себе внимания. Чтобы <b>написание реферата</b> не превратилось в препятствие к успешной сессии, наша компания BeSmarter! всегда готова протянуть свою руку помощи!
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Секрет успешной сессии несложен: главное – вовремя сдавать все работы в течение семестра, но ведь не у всех это получается, и причины этого могут быть совершенно разными. И если уж так сложилось, что Вы никак не успеваете закрыть все «хвосты», мы всегда поможем Вам преодолеть трудности!
                </p>
                <p className="block-text__par">
                    Представьте себе, что Вам больше не придется отпрашиваться у начальника домой, чтобы провести вечер наедине с компьютером и рефератом, больше не нужно выкраивать драгоценные часы на то, чтобы сходить в кафе с друзьями или съездить на пикник со своей семьей! Все это становится возможно с нашей помощью и поддержкой!
                </p>
                <p className="block-text__par">
                    Реферат – это работа, суть которой заключается в сборе информации определенной тематики, то есть, это, своего рода изложение различных точек зрения на некую проблему и подведение итогов. Реферат не является очень сложной работой, но при этом требует к себе довольно много времени и внимания, которое, если задуматься, можно потратить с куда большей пользой.
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

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    В нашей компании работают специалисты высочайшего уровня профессионализма – кандидаты и доктора наук, не понаслышке знакомые с выполнением не только рефератов, но и всех других видов студенческих работ – контрольных, эссе, курсовых, дипломов. Вы указываете тему и дисциплину, по которой нужно написать реферат, сроки, в которые должен уложиться наш автор, в <a href="#form">заявке</a> или по телефону <b>+7 495 772-4090</b> нашему менеджеру, а все остальное сделаем мы!
                </p>
                <p className="block-text__par">
                    В офисе компании BeSmarter! на Никитском бульваре мы ждем Вас в любое, удобное для Вас, время для заключения договора, где прописаны все наши обязательства перед Вами. А на нашем сайте Вы всегда можете почитать многочисленные отзывы клиентов компании, которым мы оказали <b>помощь в написании рефератов</b> (и не только рефератов!). Многие из них, кстати говоря, стали нашими постоянными клиентами.
                </p>
                <p className="block-text__par">
                    Мы не случайно в начале этой статьи привели цитату Льва Николаевича Толстого, чья мудрость прошла через годы и никогда не перестанет быть актуальной. Уделяйте время тем занятиям, которые любите, только тогда Вы сможете получить истинные знания. Отвлекайтесь только на самое важное, а все остальное возьмем на себя мы.
                </p>
                <p className="block-text__par">
                    Звоните прямо сейчас, мы Вас ждем!
                </p>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

        </div>
    </Wrapper>
);


export default page
