import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/referat';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";


const page = () => (
  <Wrapper title="Написание рефератов | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Каждому студенту знакома такая ситуация: через пару дней уже начинается сессия, а рефераты, которые нужно было сделать в течение семестра, еще не готовы. Казалось бы, всего лишь какие-то рефераты могут стать препятствием на пути к сессии! Но, увы и ах, это так. Время летит так быстро, а работа, семья, друзья, естественно, требуют к себе внимания. Чтобы написание реферата не превратилось в препятствие к успешной сессии, наша компания BeSmarter! всегда готова протянуть свою руку помощи!">
    <div className="wrapper bg bg-c2 bg-img bg-img5">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content=""/>
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
        <Link href="#form">
          <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/ref1.jpg') + ")",}}>
            <div className="block-service__text gradient-l-black">
              <span className="block-service__title">Реферат</span>
              <p className="block-service__par">Не парься сам – доверься нам!</p>
              <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
              <p className="block-service__par">От 1 500 руб.</p>
              <p className="block-service__par">Срочно от 2 часов</p>
            </div>
          </a>
        </Link>
        <div className="block-service__list list-5">
          <CardPopInfo
            url="/zakazat-otchet-po-praktike"
            title="Отчет по практике"
            text={[<p>от 3 000 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovaya-rabota-na-zakaz"
            title="Курсовая работа"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/kontrolnaya-na-zakaz"
            title="Эссе Контрольная"
            text={[<p>от 1 500 руб.</p>]}
          />

          <CardPopInfo
            url="/stati/kak-podgotovitsya-k-ekzamenu"
            title="Экзамены Тесты"
            text={[<p>от 200 руб.</p>]}
          />

          <CardPopInfo
            url="/kursovoj-proekt-na-zakaz"
            title="Курсовой проект"
            text={[<p>от 8 000 руб.</p>]}
          />

        </div>
      </section>

      <section className="block-service__dis">
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
<CardPopInfo
title={servicecards["Пакет «Успешная Защита»"].title}
text={servicecards["Пакет «Успешная Защита»"].text}
description={servicecards["Пакет «Успешная Защита»"].description}
/>
<CardPopInfo
title={servicecards["Доклад"].title}
text={servicecards["Доклад"].text}
description={servicecards["Доклад"].description}
/>
<CardPopInfo
title={servicecards["Оригинальность текста"].title}
text={servicecards["Оригинальность текста"].text}
description={servicecards["Оригинальность текста"].description}
/>
<CardPopInfo
title={servicecards["Ответы к защите"].title}
text={servicecards["Ответы к защите"].text}
description={servicecards["Ответы к защите"].description}
/>

          </div>
          <div className="block-service__list list-5">
<CardPopInfo
title={servicecards["Мини-диплом Раскладка"].title}
text={servicecards["Мини-диплом Раскладка"].text}
description={servicecards["Мини-диплом Раскладка"].description}
/>
<CardPopInfo
title={servicecards["Получение по главам"].title}
text={servicecards["Получение по главам"].text}
description={servicecards["Получение по главам"].description}
/>
<CardPopInfo
title={servicecards["Аннотация Отзыв Рецензия"].title}
text={servicecards["Аннотация Отзыв Рецензия"].text}
description={servicecards["Аннотация Отзыв Рецензия"].description}
/>
<CardPopInfo
title={servicecards["Слайды"].title}
text={servicecards["Слайды"].text}
description={servicecards["Слайды"].description}
/>
<CardPopInfo
title={servicecards["Распечатка Переплеты"].title}
text={servicecards["Распечатка Переплеты"].text}
description={servicecards["Распечатка Переплеты"].description}
/>

          </div>
        </section>
      </section>

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
          Каждому студенту знакома такая ситуация: через пару дней уже начинается сессия, а рефераты, которые нужно было сделать в течение семестра, еще не готовы. Казалось бы, всего лишь какие-то рефераты могут стать препятствием на пути к сессии! Но, увы и ах, это так. Время летит так быстро, а работа, семья, друзья, естественно,
          требуют к себе внимания. Чтобы <b>написание реферата</b> не превратилось в препятствие к успешной сессии, наша компания BeSmarter! всегда готова протянуть свою руку помощи!
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/19(9).jpg')}/>

      <section className="block-text">
        <p className="block-text__par">
          Помните, чтобы успешно сдать сессию нужно как следует высыпаться. Доктора советуют отводить на сон не менее восьми часов, именно это время необходимо, чтобы организм полностью отдохнул и набрал сил. Не стоит забывать об этой рекомендации даже тогда, когда накопилась масса неотложных дел, Ваше здоровье прежде всего! Но как
          же быть, если до сдачи курсовой всего несколько дней, а Вы к ней еще даже и не приступали? Конечно, обратиться за помощью к нам!
        </p>
        <p className="block-text__par">
          Вы сами указываете нужные сроки выполнения работы, ровно в которые и получаете уже готовую курсовую. Наши авторы – профессионалы с многолетним стажем работы, кандидаты и доктора наук, которые качественно и грамотно выполнят курсовую любого уровня сложности и абсолютно любой тематики.
        </p>
      </section>

      <section className="block-text">
        <p className="block-text__par">
          Секрет успешной сессии несложен: главное – вовремя сдавать все работы в течение семестра, но ведь не у всех это получается, и причины этого могут быть совершенно разными. И если уж так сложилось, что Вы никак не успеваете закрыть все «хвосты», мы всегда поможем Вам преодолеть трудности!
        </p>
        <p className="block-text__par">
          Представьте себе, что Вам больше не придется отпрашиваться у начальника домой, чтобы провести вечер наедине с компьютером и рефератом, больше не нужно выкраивать драгоценные часы на то, чтобы сходить в кафе с друзьями или съездить на пикник со своей семьей! Все это становится возможно с нашей помощью и поддержкой!
        </p>
        <p className="block-text__par">
          Реферат – это работа, суть которой заключается в сборе информации определенной тематики, то есть, это, своего рода изложение различных точек зрения на некую проблему и подведение итогов. Реферат не является очень сложной работой, но при этом требует к себе довольно много времени и внимания, которое, если задуматься, можно
          потратить с куда большей пользой.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <p className="block-text__par">
          В нашей компании работают специалисты высочайшего уровня профессионализма – кандидаты и доктора наук, не понаслышке знакомые с выполнением не только рефератов, но и всех других видов студенческих работ – контрольных, эссе, курсовых, дипломов. Вы указываете тему и дисциплину, по которой нужно написать реферат, сроки, в
          которые должен уложиться наш автор, в <a href="#form">заявке</a> или по телефону <b>+7 495 772-4090</b> нашему менеджеру, а все остальное сделаем мы!
        </p>
        <p className="block-text__par">
          В офисе компании BeSmarter! на Никитском бульваре мы ждем Вас в любое, удобное для Вас, время для заключения договора, где прописаны все наши обязательства перед Вами. А на нашем сайте Вы всегда можете почитать многочисленные отзывы клиентов компании, которым мы оказали <b>помощь в написании рефератов</b> (и не только
          рефератов!). Многие из них, кстати говоря, стали нашими постоянными клиентами.
        </p>
        <p className="block-text__par">
          Мы не случайно в начале этой статьи привели цитату Льва Николаевича Толстого, чья мудрость прошла через годы и никогда не перестанет быть актуальной. Уделяйте время тем занятиям, которые любите, только тогда Вы сможете получить истинные знания. Отвлекайтесь только на самое важное, а все остальное возьмем на себя мы.
        </p>
        <p className="block-text__par">
          Звоните прямо сейчас, мы Вас ждем!
        </p>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

    </div>
  </Wrapper>
);


export default page
