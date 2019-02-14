import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/kurs-na-zakaz-arch'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovayaNew';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import KursovayaRabota from "components/common/ServiceBlock/ready-made/KursovayaRabota";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";
import React from "react";


const page = () => (
  <Wrapper title="Заказать курсовую работу недорого онлайн – написание курсовой работы на заказ в Москве, цены под ключ, сколько стоит"
           description="Хотите качественно заказать курсовую работу в Москве? Только в BeSmarter! можно заказать курсовую работу онлайн, недорого и срочно, даже за 1 день. Не теряйте времени, оформляйте заказ курсовых работ прямо сейчас | Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'#', text:'Курсовая работа'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/kursovaya-rabota-na-zakaz" name="Курсовая работа" position="2" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <KursovayaRabota/>

<MatZashGirl/>

      <TextBlock>
        <h1>
            Написание курсовой на заказ
        </h1>
        <p className="par">
            Написание курсовой работы нередко выступает главной «страшилкой» для большинства студентов. Причины кроются в большом количестве времени, которое требует потратить на себя эта задача, а также в необходимости подогнать готовый проект под нормы ГОСТ и сделать его максимально оригинальным. Тем более, в каждую сессию нужно сделать несколько курсовых работ и рефератов. Далеко не у каждого учащегося находятся время и силы на написание работы столь больших объемов.
        </p>
        <p className="par">
            Отличным выходом станет обращение за помощью к авторам BeSmarter! У нас вы можете оформить заказ курсовой работы недорого, оперативно и без переплаты, не беспокоясь при этом о качестве готового проекта. Мы успешно выполняем работы по самым разным научным направлениям с индивидуальным подходом к каждому студенту. В компании трудятся авторы с большим опытом написания студенческих работ и отличным знанием своей специальности. Благодаря этому вы получаете максимально ответственное отношение нашего преподавателя к работе над вашим курсовым проектом.
        </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kur-rab-na-zakaz.jpg')} altText="Заказать курсовую работу"/>

        <TextBlock>
            <h2 className="title">
                Преимущества заказа курсовика в BeSmarter!
            </h2>
            <p className="par">
                Поручая нам написание курсовой работы, вы можете быть уверены в качестве
                готового материала, так как специалисты нашей компании гарантируют:
            </p>
            <ul>
                <li>
                    <b>Компетентность в своей сфере.</b> Написание работы в BeSmarter!
                    поручается специалисту в научном направлении, к которому относится
                    проект заказчика. Авторы внимательно подходят к каждому аспекту
                    курсового проекта, при необходимости выполняя нужные расчеты,
                    приводя практические примеры и т. д.
                </li>
                <li>
                    <b>Соблюдение сроков.</b> Нехватка времени является главной проблемой
                    большинства клиентов BeSmarter!, но лишь до момента обращения
                    к нам. Решив заказать курсовую работу срочно, вы можете быть
                    уверены, что получите готовый и отредактированный проект точно
                    к указанной дате. При этом наши авторы, при хорошей скорости
                    написания, создают очень качественные работы с высокой
                    степенью оригинальности текста.
                </li>
                <li>
                    <b>Отсутствие ограничений на специализацию работы.</b> Наш штат включает
                    дипломированных специалистов в многочисленных направлениях: от
                    гуманитарных, вроде журналистики, филологии и истории, до
                    узкотехнических – программистов, инженеров, физиков и т. д.
                    Таким образом, написание курсовых на заказ профессиональным
                    языком и с соблюдением всех ГОСТов возможно по большинству
                    специальностей, преподаваемых в ВУЗах на территории РФ.
                </li>
                <li>
                    <b>Профессионализм.</b> Авторы компании не только пишут теоретическую
                    часть, пользуясь проверенными источниками информации, но также
                    берут на себя выполнение практического раздела. Заказав курсовую
                    работу у BeSmarter!, вы получите проект, включающий в себя
                    подробное исследование темы, необходимые чертежи, программные коды,
                    таблицы и базы данных, схемы и многие другие дополнения
                    в зависимости от специализации.

                </li>
                <li>
                    <b>Приемлемую цену на услуги.</b> Все авторы BeSmarter! проходили
                    студенческую жизнь и понимают важность своего труда при умеренной
                    стоимости на него. При высочайшем качестве наших работ, требуемом
                    проценте оригинальности текста в любых системах, сотрудничество с
                    нами может позволить себе практически любой студент ВУЗа и колледжа.
                </li>
            </ul>
        </TextBlock>


        <TextBlock>
        <h2 className="title">
            Почему лучше заказать курсовую, а не купить готовую?
        </h2>
        <p className="par">
            Некоторые студенты предпочитают идти более простым и дешевым путем,
            отдавая предпочтение готовым работам вместо написания. Немало сайтов
            в интернете предлагают целые архивы курсовых проектов, состоящие из
            готовых работ, сданных или защищенных студентами в прошлые годы.
        </p>
        <p className="par">
            Главная проблема в этом случае заключается в отсутствии гарантий
            минимального качества, а также в распространенности одной и той же работы.
        </p>
        <p className="par">
            Такой материал может не подойти вашему ВУЗу, к требованиям методических указаний.
            Почему? Смотрите сами: каждый ВУЗ может по-своему подходить к вопросам написания
            курсовика, предъявляя уникальные требования к оформлению и содержимому проекта.
            Найти готовую работу, подходящую под все индивидуальные стандарты
            учебного заведения, может быть весьма непросто.
        </p>
        <p className="par">
            Услуга индивидуального написания курсовых на заказ включает в себя
            полное сопровождение готового проекта со стороны автора из BeSmarter!
            до момента его защиты. В течение этого времени вы можете обращаться
            к нам для редактирования работы.
        </p>
      </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

        <TextBlock>
            <h2 className="title">
                Финансовый вопрос, или как сэкономить.
            </h2>
            <p className="par">
                Учитывайте несколько ключевых факторов, от которых зависит цена курсовой работы на заказ:
            </p>
            <ul>
                <li>
                    <b>Срочность.</b> В среднем, чтобы написать курсовую на заказ, автору требуется две недели.
                    В случаях, когда клиент нуждается в готовом проекте в сжатые сроки, включая
                    сверхсрочные проекты в 2-5 часов, стоимость может вырасти.
                </li>
                <li>
                    <b>Закажите вместе с друзьями.</b> Когда вы приходите заказать курсовой проект
                    вместе с друзьями или по их рекомендации, вы получаете скидки.
                </li>
                <li>
                    <b>Закажите сразу несколько работ.</b> В сессию вам нужно сдать несколько
                    курсовых и рефератов, а также экзаменов и онлайн-тестов. При покупке
                    нескольких работ вы получаете скидки на все!
                </li>
            </ul>
        </TextBlock>
      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
            Как и где заказать работу?
        </h2>
        <ol>
          <li>
              Всем желающим предоставляется возможность заказать курсовую онлайн
              непосредственно на сайте компании BeSmarter!, заполнив специальную {" "}
              <b>
                  <a href="#form">онлайн-форму</a>
              </b>{" "}.
          </li>
          <li>
              Позвоните нам по телефону <b>8 (495) 772-40-90</b>.
          </li>
          <li>
              Посетите наш  {" "}
              <Link href="/contacts">
                  <b>
                      <a>офис</a>
                  </b>
              </Link>{" "} в Москве лично. Мы находимся по адресу: пер. Большой Кисловский, дом 1, стр. 2, офис 211.
          </li>
        </ol>
        <p className="par" style={{fontStyle: 'italic'}}>
          Закажите курсовую работу сегодня – это быстро и удобно!
        </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

        <Video>
            <iframe src="https://www.youtube.com/embed/CKfwwYuGk0o" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </Video>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </PageWrapper>
  </Wrapper>
);


export default page
