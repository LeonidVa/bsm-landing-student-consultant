import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import OrderForm from 'components/common/OrderForm';
import formConfig from 'components/config/formConfig'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlockConfig'

import MetaTags from 'react-meta-tags';



const page = () => (
    <Wrapper title="«Cкорая помощь» студенту | «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img3">

            <MetaTags>
                {/* <title></title> */}
                <meta name="description" content="С каждым годом все больше и больше студентов пользуются услугой диплом на заказ, и в этом нет ничего предосудительного. Возможно, кто-то будет возмущаться: «Ведь дипломная работа – это результат многолетней учебы!», но мы же живем в современном мире, а его реалии иногда бывают довольно суровы." />
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
                        <a>«Cкорая помощь» студенту</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Дипломная работа</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 14 000 руб.</p>
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
                    Диплом на заказ – «скорая помощь» студенту
                </h1>
                <p className="block-text__par">
                    С каждым годом все больше и больше студентов пользуются услугой <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>, и в этом нет ничего предосудительного. Возможно, кто-то будет возмущаться: «Ведь дипломная работа – это результат многолетней учебы!», но мы же живем в современном мире, а его реалии иногда бывают довольно суровы.
                </p>
                <p className="block-text__par">
                    Сложно найти студентов, которые никогда не работали за время учебы, а многие к последнему году обучения уже успевают найти хорошее место работы, где планируют остаться и после получения диплома. Большинство работодателей с большой неохотой отпускают своих сотрудников в учебный отпуск, а если и отпускают, то не всегда оплачивают. На новом месте работы каждый хочет проявить себя по максимуму, именно поэтому, многие студенты даже и не упоминают в своей компании, что им нужно несколько дней, чтобы посетить хотя бы несколько занятий в вузе. Оказавшись в такой ситуации, весьма проблематично заниматься написанием диплома, ведь это большая и сложная работа, требующая много времени и внимания.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <section className="block-text">
                <p className="block-text__par">
                    Может быть, писать диплом после работы – по ночам? Конечно, можно делать и так, но только возникает вопрос: а когда же спать? Современные технологии еще не дошли до такого уровня, чтобы человек мог бодрствовать целыми сутками и при этом оставаться в тонусе. Не забывайте еще и о том, что помимо самой работы за компьютером (то есть процесса непосредственной печати дипломной работы), нужно также регулярно ездить к научному руководителю, в библиотеки, собирать практический материал…
                </p>
                <p className="block-text__par">
                    Все вышеперечисленные факторы в своей совокупности, вроде бы, ставят студента перед выбором: что важнее – работа и получение диплома? Работа, как говорится, не волк…  Но кому хочется отказываться от хорошей работы и, тем более, зарплаты? Ведь после окончания вуза можно еще долгое время ходить по собеседованиям со своим уже полученным дипломом в поисках работы. Чтобы избежать такой неприятной ситуации, можно просто <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>
                </p>
                <p className="block-text__par">
                    Наверняка, каждый слышал о предоставлении таких услуг, ведь интернет буквально пестрит объявлениями с подобными предложениями. Перед тем, как остановить свой выбор на той или иной фирме, почитайте отзывы клиентов на сайте фирмы, которые уже пользовались такими услугами, также стоит обратить внимание на то, сколько лет компания занимается данной деятельностью, есть ли у нее офис, куда можно приехать для заключения письменного договора. И будьте внимательны: многие фирмы предлагают купить уже готовый диплом или, что еще хуже, продают уже готовые корочки! Чтобы не попасть на удочку недобросовестных компаний, будьте предельно внимательны и, прежде чем оформлять свой заказ, выясните абсолютно все подробности работы у менеджеров фирмы.
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

            <a name="form"/>
            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Оценить" formConfig={formConfig}/>

            <LinksBlock links={links}/>
        </div>
    </Wrapper>
);


export default page
