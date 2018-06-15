import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/magisterskaya'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'



const page = () => (
    <Wrapper title="Главная">
        <div className="wrapper bg bg-c2 bg-img bg-img4">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>Отчёт по практике</a>
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Отчет по практике</span>
                            <p>от 3 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Реферат</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Эссе Контрольная</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Экзамены Тесты</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
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
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Пакет «Успешная Защита»</span>
                            <p>от 5 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Доклад</span>
                            <p>от 1 500 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Оригинальность текста</span>
                            <p>Во всех системах</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Ответы к защите</span>
                            <p>от 200 руб.</p>
                        </a>
                    </Link>
                </div>
                <div className="block-service__list list-5">
                    <Link href="/zakazat-diplomnyj-proekt">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Мини-диплом Раскладка</span>
                            <p>от 2 000 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Получение по главам</span>
                            <p>Гибкие условия</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Аннотация Отзыв Рецензия</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Слайды</span>
                            <p>от 350 руб.</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaia">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Распечатка Переплеты</span>
                            <p>от 1 200 руб.</p>
                        </a>
                    </Link>
                </div>
            </section>

            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Заказать отчет по практике
                </h2>
                <p className="block-text__par">
                    В большинстве вузов, чтобы получить допуск к защите дипломной работы, необходимо пройти преддипломную практику и написать соответствующий отчет. Несмотря на формальность данного документа, подготовить его не так просто, поскольку потребуются навыки составления таблиц, построения графиков, выполнения расчетов и использования других сложных инструментов обобщения.
                </p>
                <p className="block-text__par">
                    Если вы не готовы выполнить данную работу самостоятельно, предлагаем квалифицированную помощь в написании отчета по практике. Специалисты компании BeSmarter! сделают все максимально быстро, качественно и недорого.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Наши преимущества
                </h2>
                <ul>
                    <li>
                        <b>Подтверждение. </b>У нас вы сможете заказать отчет по практике с печатью. Руководители требуют, чтобы работа была основана на реальных фактах. В отличие от скачанных в Интернете текстов, наши документы скреплены печатью конкретных организаций.
                    </li>
                    <li>
                        <b>Качество. </b>Составление отчета по учебной практике поручается вузовскому преподавателю с кандидатской степенью. Это гарантирует правильность всех расчетов и выводов. Каждый отчет по практике на заказ проходит проверку на качество и оригинальность в отделе контроля.
                    </li>
                    <li>
                        <b>Профессионализм. </b>Мы работаем по официальному договору, в котором прописаны сроки сдачи отчета и все требования к работе. За его соблюдением следит ваш личный менеджер. Вам нужно лишь оформить заказать отчет по производственной практике – об остальном мы позаботимся сами!
                    </li>
                </ul>
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
                    Сколько стоит отчет по практике?
                </h2>
                <p className="block-text__par">
                    Разумеется, любого студента интересует, сколько стоит отчет по практике. Ориентировочный диапазон цен представлен в нашем <Link href="/price"><a>прайс-листе</a></Link>. Точная стоимость услуги определяется в процессе предварительного собеседования и зависит от объективных факторов – объема текста, сложности темы, срочности и пр.
                </p>
                <p className="block-text__par">
                    Чтобы <b>недорого заказать отчет по практике</b>, постарайтесь оформить заявку как можно раньше. Если у вас уже есть собственные наработки – присылайте их нам, и мы снизим цену. Компания BeSmarter! стремится обеспечить клиентам самые выгодные условия, чтобы <b>купить отчет по практике</b> смог каждый студент. Воспользуетесь своим шансом!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Алгоритм сотрудничества
                </h2>
                <ul>
                    <li>
                        Шаг 1. Чтобы <b>купить преддипломную практику</b> вам, нужно оформить заявку одним из способов, перечисленных ниже. Мы рассмотрим ее и проведем с вами собеседование.
                    </li>
                    <li>
                        Шаг 2. По результатам собеседования мы выбираем и согласовываем с вами исполнителя и фиксируем все договоренности документально. Вы вносите 50%-ную предоплату.
                    </li>
                    <li>
                        Шаг 3. Согласованный автор оформляет отчет и сдает его вам на проверку в оговоренные сроки. В случае необходимости вносятся бесплатные правки.
                    </li>
                    <li>
                        Шаг 4. Автор отвечает на ваши вопросы и помогает подготовиться к сдаче ответа. Вы получаете хорошую оценку. Как видите, все очень просто – попробуйте сами!
                    </li>
                </ul>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Как купить отчет по практике?
                </h2>
                <p className="block-text__par">
                    Для наших клиентов нет никакой разницы, <b>где заказать отчет по практике</b> – в Москве или Владивостоке. В любом случае уровень сервиса будет одинаково высоким. Желаете оформить заявку на сайте – пожалуйста, по телефону – тоже никаких проблем <b>8 495 772-4090</b>
                </p>
                <p className="block-text__par">
                    Наконец, вы можете посетить наш <Link href="/contacts"><a>офис</a></Link> в центре Москвы (пер. Большой Кисловский, дом 1, стр. 2, оф. 211). Мы ждем вас!
                </p>
            </section>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page