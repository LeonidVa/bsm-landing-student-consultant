import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "components/common/ImageBlock";
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import React from "react";
import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"

const page = () => (
  <Wrapper title="Разные статьи о том, как подготовиться студенту!" description="Полезные статьи в помощь студентам и аспирантам, читайте на сайте BeSmarter!">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">



      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Статьи</a>
          </Link>
        </div>
      </section>

        <span style={{visibility:"hidden", height:0, width:0}} itemScope itemType = "http://schema.org/BreadcrumbList">
            <span style={{visibility:"hidden", height:0, width:0}} itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span style={{visibility:"hidden", height:0, width:0}} itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span style={{visibility:"hidden", height:0, width:0}} itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/stati">
                    <span style={{visibility:"hidden", height:0, width:0}} itemProp = "name">Статьи</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

      <Diplom/>

<MatZashGirl/>

      <section className="block-text">
        <h1 className="block-text__title">
          Разные статьи о том, как подготовиться студенту!
        </h1>
        <ul style={{listStyle: 'none'}}>
          <li>
            <Link href="/stati/skoraya-pomoshch-studentu">
              <a>Скорая помощь студенту!</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/idealnyj-student-i-idealnyj-aspirant-kak-imi-stat">
              <a>Идеальный студент и идеальный аспирант. Как ими стать?</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/kak-naladit-otnosheniya-s-nauchnym-rukovoditelem">
              <a>Как наладить отношения с научным руководителем</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
              <a>Как подготовиться и поступить в аспирантуру</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/kak-podgotovitsya-k-ekzamenu">
              <a>Как подготвоиться к экзамену</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/kak-pravilno-zakazat-diplom">
              <a>Как правильно заказать диплом</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/kak-uspeshno-zashhitit-diplomnuyu-rabotu">
              <a>Как успешно защитить дипломную работу</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/napisanie-diploma">
              <a>Написание диплома</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/napisanie-kursovyh-rabot">
              <a>Написание курсовых работ</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/napisanie-referatov">
              <a>Написание рефератов</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/neskolko-pravil-uspeshnoj-zashhity">
              <a>Несколько правил успешной защиты</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/pochemu-studenty-vybirayut-uslugu-diplom-na-zakaz">
              <a>Почему студенты выбирают услуги диплом на заказ</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/samodisciplina-zalog-otlichnoj-ucheby">
              <a>Самодисциплина - залог отличной учебы</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/sovmestit-rabotu-i-uchebu-realno">
              <a>Совместить работу и учебу реально!</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/stan-luchshim-studentom-v-vuze">
              <a>Стань лучшим студентом в ВУЗе!</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/vybiraem-vuz-svoej-mechty">
              <a>Выбираем вуз своей мечты</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/kak-sostavit-plan-diplomnoj-raboty">
              <a>Как составить план дипломной работы</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/zakluchenie-k-diplomnoj-rabote">
              <a>Как написать заключение к дипломной работе (образец)</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/gipoteza-v-diplomnoj-rabote">
              <a>Гипотеза в дипломной работе</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/recenziya-na-diplomnuyu-rabotu">
              <a>Рецензия на дипломную работу</a>
            </Link>
          </li>
          <li>
            <Link href="/stati/rech-k-diplomnoj-rabote">
              <a>Речь к дипломной работе</a>
            </Link>
          </li>
        </ul>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/stat_.jpg')} altText="Разные статьи о том, как подготовиться студенту!"/>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

    </PageWrapper>
  </Wrapper>
);


export default page
