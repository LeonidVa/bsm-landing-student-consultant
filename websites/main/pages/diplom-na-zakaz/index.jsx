import React from "react";
import Link from "next/link";
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from "components/common/MessBlock";

import ProfitsBlockSlider from "components/common/ProfitsBlockSlider";
import dopy from "data/dopraboty";

import FormOrder from "components/common/forms/Big/Order";
import FormEstimate from "components/common/forms/Big/Estimate";

import InfoBlock from "components/common/InfoBlock";
import infoBlockConfig from "data/infoBlock/diplom";

import CurrentOffer from "components/content/offers/CurrentOffer";

import reviewBlockConfig from "data/reviewBlockConfig";
import ReviewBlockSlider from "components/common/ReviewBlockSlider";

import LinksBlock from "components/common/LinksBlock";
import links from "data/linksBlock/diplom";

import Video from "components/common/VideoBlock";
import ImageBlock from "components/common/ImageBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";

const page = () => (
    <Wrapper
        title="Диплом на заказ – где заказать дипломную работу в Москве срочно, помощь в написании диплома, сопровождение до защиты"
        description="Написание диплома на заказ! Быстрая, недорогая и профессиональная помощь в подготовке дипломной работы – компания BeSmarter. Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40."
    >
        <PageWrapper className="wrapper bg bg-c2 bg-img bg-img3">



            <Breadcrumbs links={[
                {url:'/', text:'Главная'},
                {url:'#', text:'Дипломная работа'},
            ]}/>

            <ItemScope type="http://schema.org/BreadcrumbList">
                <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
                <ItemListElement url="https://besmarter.ru/diplom-na-zakaz" name="Дипломная работа" position="2" />
            </ItemScope>




            <BlockNav>
                <NavRow
                    url="#form"
                    scroll={false}
                    title="Заказать работу"
                    description="Узнай цену твоей работы"
                />
            </BlockNav>
 <MessBlock/>

            <Diplom/>

            <MatZashGirl/>

            <TextBlock>
                <h1>Написание диплома на заказ</h1>
                <p className="par">
                    Написание дипломной работы отнимает много времени. Понятно, что современному
                    студенту приходится много работать. Часто к последнему курсу учебы студенты
                    уже имеют семью. Вот почему, к сожалению, не у каждого учащегося есть возможность
                    заниматься сложной работой самостоятельно – для этого нужны силы и немало времени.
                </p>
                <p className="par">
                    В таком случае на помощь вам всегда готовы прийти авторы BeSmarter!
                </p>
                <p className="par">
                    Наша компания предоставляет возможность оформить заказ на диплом,
                    выполненный в соответствии со всеми требованиями вашего научного руководителя.
                </p>
                <p className="par">
                    У нас трудятся признанные специалисты своего дела, работающие с любыми
                    проектами: от отдельных разделов и глав до сложных комплексных проектов.
                </p>
                <p className="par">
                    Мы работаем с гуманитарными, экономическими, техническими, естественными
                    дисциплинами, а также в военной, спортивной, религиоведческой и других сферах.
                </p>
                <p className="par">
                    Кроме того, за плечами у наших авторов – годы плодотворной работы и богатый
                    опыт, что позволяет им выполнить и оформить готовый проект таким образом,
                    чтобы у вашего научного руководителя не возникло никаких претензий.
                </p>
                <p className="par">
                    Однако даже в случае появления новых требований со стороны научного руководителя,
                    авторы быстро скорректируют готовый проект под изменившиеся условия.
                </p>
            </TextBlock>

            <FormEstimate/>

            <ImageBlock imageSrc={require("static/images/block/dip-na-zakaz.jpg")} altText="Диплом на заказ"/>

            <TextBlock>
                <h2 className="title">
                    Преимущества заказа диплома в BeSmarter!
                </h2>
                <ul>
                    <li>
                        <b>Компетентность.</b> Решив заказать диплом в BeSmarter!, вы можете
                        не беспокоиться по поводу образованности и компетентности авторов компании.
                        В нашей команде работают признанные специалисты из различных научных
                        направлений и квалифицированные преподаватели престижных российских ВУЗов.
                        Дипломный проект их авторства будет содержать в себе все необходимые
                        сложные расчеты, дополнения и другие тонкости выбранной тематики.
                    </li>
                    <li>
                        <b>Срочность.</b> Мы с пониманием относимся к волнению тех клиентов, кто желает
                        оформить заказ диплома срочно, так как прекрасно понимаем  пунктуальность ВУЗов
                        в этом вопросе. Авторы BeSmarter! напишут проект не только в соответствии с задачей,
                        но и с учетом всех сроков, которые  поставил вам научный руководитель.
                        Вам достаточно оставить заказ на диплом, а все остальные заботы возьмут на себя авторы компании.
                    </li>
                    <li>
                        <b>Универсальность.</b> Не стоит волноваться и по поводу узкой специализации или тематики
                        дипломного проекта. В штате компании присутствуют опытные специалисты различных направлений,
                        включая многочисленные технические специальности, медицину, юриспруденцию и т. д. Даже самая
                        сложная дипломная работа на заказ будет написана профессиональным языком, с применением
                        специализированной терминологии и проверенных исследований в конкретной теме.
                    </li>
                    <li>
                        <b>Профессионализм.</b> Заказать дипломную работу у нас – означает получить полностью
                        готовый проект, оформленный в соответствии с ГОСТом, а также содержащий в себе любые
                        тематические дополнения (чертежи, схемы, формулы, программный код и т. д.).
                    </li>
                    <li>
                        <b>Экономия.</b> Все авторы BeSmarter! сами работают со студентами и хорошо
                        понимают актуальность финансового вопроса для клиентов. Поэтому написание диплома
                        на заказ происходит по умеренной цене, доступной большинству учащихся ВУЗов.
                    </li>
                </ul>
            </TextBlock>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <TextBlock>
                <h2 className="title">
                    Почему лучше заказать диплом, а не купить готовый?
                </h2>
                <p className="par">
                    Помимо написания индивидуальной дипломной работы, некоторыми компаниями
                    предлагается продажа готовых дипломов на выбранную тематику. Многочисленные
                    сервисы в интернете содержат в себе целые базы данных из таких проектов,
                    загруженных туда как различными авторами, так и выпускниками высших
                    учебных заведений. Эти работы были защищены или написаны в прошлые годы.
                </p>
                <p className="par">
                    Многие студенты уже отлично знакомы с тем, что чужая работа, пусть
                    даже по аналогичной теме, может доставить массу проблем. Нет никаких
                    гарантий, что готовый проект соответствует строгим ГОСТам и, главное,
                    уже не был прочитан научным руководителем.
                </p>
                <p className="par">
                    Таким образом, покупка диплома не только приведет к тому, что придется
                    самостоятельно переделывать работу, но также не гарантирует и хорошее
                    отношение преподавателя к попавшемуся со скаченной работой студенту.
                </p>
                <p className="par">
                    BeSmarter! предоставляет своим клиентам услуги по написанию и
                    полноценное сопровождение выполненного проекта до самой его защиты.
                    Помощь в написании диплома включает в себя своевременное внесение
                    правок по требованию научного руководителя, редактирование целых
                    разделов проекта с добавлением какой-либо новой информации и многое другое.
                </p>
            </TextBlock>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer/>

            <TextBlock>
                <h2 className="title">
                    Финансовая составляющая, или можно ли сэкономить
                </h2>
                <p className="par">
                    Чтобы не переплачивать лишние деньги, доверив написание дипломной
                    на заказ, рекомендуем учесть некоторые важные факторы в этом процессе:
                </p>
                <ul>
                    <li>
                        <b>Тема проекта.</b> Работа узкой направленности
                        требует более досконального знания темы, что влияет на цену.
                    </li>
                    <li>
                        <b>Срок выполнения.</b> На то, чтобы написать отличный
                        индивидуальный диплом на заказ и оформить его по требованиям
                        ВУЗа клиента, у авторов BeSmarter! уходит около месяца.
                        Если работа требуется вам раньше, автор напишет ее,
                        в зависимости от сложности, в срок от двух часов до двух недель.
                        В особо экстренных случаях мы создаем команду из двух
                        авторов и старшего менеджера для координации такого проекта.
                    </li>
                    <li>
                        <b>Закажите вместе с друзьями.</b> Когда вы приходите заказать
                        диплом вместе с друзьями или по их рекомендации, вы получаете скидки.
                    </li>
                </ul>
            </TextBlock>

            <Video>
                <iframe src="https://www.youtube.com/embed/aOWtDx1wAHY" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Video>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Video>

            <TextBlock>
                <h2 className="title">
                    Как и где заказать работу?
                </h2>
                <p className="par">
                    У вас возник вопрос о том, где заказать диплом? Это можно сделать просто и конфиденциально:
                </p>
                <ol className="fitted">
                    <li>
                        Оформите онлайн-заказ в любое время суток, просто указав в {" "}
                        <b>
                            <a href="#form">форме заявки</a>
                        </b>{" "} на сайте свои контактные данные. Мы свяжемся с вами.
                    </li>
                    <li>
                        Позвоните нам по телефону <b>8 (495) 772-40-90</b>.
                    </li>
                    <li>
                        Приходите в наш {" "}
                        <Link href="/contacts">
                            <b>
                                <a>офис</a>
                            </b>
                        </Link>{" "} в Москве: пер. Большой Кисловский, дом 1, стр. 2, офис 211.
                    </li>
                </ol>
                <p className="par">
                    Общение с нашими менеджерами вызовет у вас только приятные эмоции! Обращайтесь, BeSmarter! – это грамотная дипломная работа на заказ в Москве на самых выгодных условиях.
                </p>
            </TextBlock>

            <Video>
                <iframe
                    src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview"
                    frameBorder="0"
                    allowfullscreen
                />
            </Video>

            <a name="form" id="form"/>
            <FormOrder/>

            <LinksBlock links={links}/>
        </PageWrapper>
    </Wrapper>
);

export default page;
