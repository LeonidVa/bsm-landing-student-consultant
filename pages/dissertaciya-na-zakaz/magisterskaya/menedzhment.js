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
    <Wrapper title="Магистерская диссертация по менеджменту на заказ в Москве и РФ – цены, сроки написания под ключ">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная </a>
                    </Link>
                    <span> / </span>
                    <Link href="/dissertaciya-na-zakaz">
                        <a>Диссертация</a>
                    </Link>
                    <span> / </span>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a>Магистерская</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>По менеджменту</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/dissertaciya-na-zakaz/magisterskaya">
                    <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Магистерская диссертация</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 23 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <Link href="/dissertaciya-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Диссертация<br/>под ключ</span>
                            <p>Берем заботы на себя</p>
                        </a>
                    </Link>
                    <Link href="/mba-na-zakaz">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Консультация автора</span>
                            <p>Прямая связь</p>
                        </a>
                    </Link>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                        <a className="block-service__list-item">
                            <span className="block-service__list-title">Сопровождение<br/>до защиты</span>
                            <p>Надежно, спокойно</p>
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
                    <Link href="/zakazat-diplomnyj-proekt">
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
                <h2 className="block-text__title">
                    Магистерская диссертация по менеджменту на заказ
                </h2>
                <p className="block-text__par">
                    Эффективное управление – это умение грамотно распределять имеющиеся ресурсы. Кроме того, хороший менеджер – специалист, который постоянно приобретает новые навыки, знает все актуальные нормативы и, конечно же, непрерывно совершенствуется. Одно из условий для работы по данной специальности – написание магистерской диссертации по менеджменту.
                </p>
                <p className="block-text__par">
                    Однако реалии студенческой жизни таковы, что выкроить время для написания диссертационной работы непросто. Тем более, что требования к ней значительно строже, чем к традиционной дипломной работе или проекту. Решение этой проблемы – написание магистерской диссертации на заказ. Специалисты компании BeSmarter! предлагают подготовку диссертационных работ в сжатые сроки по умеренным ценам.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>
            
            <section className="block-text">
                <h2 className="block-text__title">
                    Преимущества написания под ключ
                </h2>
                <p className="block-text__par">
                    Обратившись в нашу компанию, вы получите работу с высоким уровнем уникальности, при этом тема будет раскрыта исчерпывающе. Теоретическая, практическая и аналитическая части будут четко структурированы и оформлены в соответствии с вузовскими требованиями. Это даст вам возможность хорошо подготовиться к защите. Достоинства заказа написания магистерской диссертации следующие:
                </p>
                <ul>
                    <li>
                        Качественная проработка магистерской диссертации по менеджменту, поскольку ее выполняют профессионалы, имеющие значительный опыт и отличное знание предмета.
                    </li>
                    <li>
                        Сопровождение задания до защиты. В процессе подготовки могут возникать правки и дополнения. Мы вносим их бесплатно.
                    </li>
                    <li>
                        Неразглашение данных клиента. Гарантия конфиденциальности — одна из профессиональных черт компании BeSmarter!
                    </li>
                    <li>
                        Консультации по выполненному заказу.
                    </li>
                    <li>
                        Умеренные цены.
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
                    Готовая диссертация или сделанная на заказ?
                </h2>
                <p className="block-text__par">
                    Написание диссертации на соискание степени магистра — это постоянное сотрудничество с научным руководителем. Как правило, студент после согласования плана написания работы выполняет задание поэтапно и по мере необходимости вносит дополнения или изменения в уже готовый текст. В интернете можно найти готовую магистерскую диссертацию по специальности «Менеджмент», но ее использование связано с определенными рисками:
                </p>
                <ul>
                    <li>
                        Ошибки в расчетах и текстах.
                    </li>
                    <li>
                        Несоответствие готовой диссертации требованиям по оформлению.
                    </li>
                    <li>
                        Работа, купленная или скачанная в интернете, не уникальна. Приобретение готового проекта оправдано лишь в одном случае: если вы работаете над заданием самостоятельно. Тогда такая диссертация может быть использована как основа.
                    </li>
                </ul>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    От чего зависит стоимость
                </h2>
                <p className="block-text__par">
                    Цена написания зависит от объема задания и сложности темы. Бывает так, что выполнить заказ нужно срочно. Естественно, что срочная магистерская диссертация по менеджменту стоит дороже.
                </p>
            </section>

            <section className="block-text">
                <h2 className="block-text__title">
                    Можно ли немного сэкономить?
                </h2>
                <p className="block-text__par">
                    Многие клиенты задают вопрос: возможно ли удешевление заказа? Вот несколько способов реально сэкономить:
                </p>
                <ul>
                    <li>
                        Заказ не на всю работу, а на ее часть: теоретическую, практическую или аналитические расчеты.
                    </li>
                    <li>
                        Заказ нескольких заданий одновременно. Срабатывает принцип «оптом — дешевле».
                    </li>
                    <li>
                        Акции и специальные предложения. Это отличная возможность для получения по-настоящему недорогой работы. 
                    </li>
                </ul>
            </section>

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Этапы сотрудничества с нами
                </h2>
                <p className="block-text__par">
                    Первый этап работы над магистерским проектом – согласование темы и плана написания диссертации. Далее вы оформляете заказ в нашей компании и действуете в таком порядке:
                </p>
                <ul>
                    <li>
                        После внесения аванса автор компании BeSmarter! начинает выполнение заказа.
                    </li>
                    <li>
                        После выполнения задания вы оплачиваете полную стоимость работы, и готовая диссертация отправляется на ваш электронный адрес.
                    </li>
                </ul>
                <p className="block-text__par">
                    В течении гарантированного срока все изменения и дополнения вносятся бесплатно. Оформите заказ, и защита вашей магистерской диссертации по менеджменту пройдет на отлично!
                </p>
            </section>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page