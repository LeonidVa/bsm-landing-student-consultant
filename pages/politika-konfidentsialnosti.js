import React from "react";
import Wrapper from 'bsm-shared/components/Wrapper';
import PageWrapper from 'bsm-shared/components/common/PageWrapper/index.js';
import TextBlock from 'bsm-shared/components/common/TextBlock/index.js';
import Title from 'bsm-shared/components/common/Title/index.js';
import Link from 'next/link';
import FormOrder from 'bsm-shared/components/common/forms/Big/Order';
import  {
  HeaderLi,
  HeaderUl,
  HeaderNavA,
} from '/bsm-shared/components/Header/style.js';

import ItemScope from "bsm-shared/components/common/schema.org/ItemScope"
import ItemListElement from "bsm-shared/components/common/schema.org/ItemListElement"

const page = () => (
  <Wrapper
    title="Согласие на обработку персональных данных Пользователей | Компания «BeSmarter!». Тел. +7 (495) 772-40-90."
    description="Согласие на обработку персональных данных пользователей компанией «BeSmarter!». Тел. +7 (495) 772-40-90."
    navButtons={false}
    showHamburger={false}
    headerNavButtons={
      <HeaderUl>
        <HeaderLi>
          <Link href="#about">
            <HeaderNavA>О нас</HeaderNavA>
          </Link>
        </HeaderLi>
        <HeaderLi>
          <Link href="#contacts">
            <HeaderNavA>Контакты</HeaderNavA>
          </Link>
        </HeaderLi>
      </HeaderUl>
    }
  >
    <PageWrapper className="bg bg-c2 bg-img bg-img4">
      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Политика конфиденциальности</a>
          </Link>
        </div>
      </section>

        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/politika-konfidentsialnosti" name="Политика конфиденциальности" position="2" />
        </ItemScope>



      <Title>Политика конфиденциальности</Title>
      <TextBlock>
        <div className="title">Согласие на обработку персональных данных Пользователей</div>
        <p className="par">
          Пользователь, оставляя заявку/запрос на обратный звонок/подписку на новости на интернет-сайте https://besmarter.ru, принимает настоящее Согласие на обработку персональных данных (далее – Согласие). Действуя свободно, своей волей и в своем интересе, а также подтверждая свою дееспособность, Пользователь дает свое
          согласие на обработку своих персональных данных со следующими условиями:
        </p>
        <p className="par">
          1. Данное Согласие дается на обработку персональных данных, как без использования средств автоматизации, так и с их использованием.
        </p>
        <p className="par">
          2. Согласие дается на обработку следующих моих персональных данных: 1) Персональные данные, не являющиеся специальными или биометрическими: номера контактных телефонов; адреса электронной почты; место работы и занимаемая должность; пользовательские данные (сведения о местоположении; тип и версия ОС; тип и версия
          Браузера; тип устройства и разрешение его экрана; источник откуда пришел на сайт пользователь; с какого сайта или по какой рекламе; язык ОС и Браузера; какие страницы открывает и на какие кнопки нажимает пользователь; ip-адрес.
        </p>
        <p className="par">
          3. Персональные данные не являются общедоступными.
        </p>
        <p className="par">
          4. Цель обработки персональных данных: обработка входящих запросов физических лиц с целью оказания консультирования; аналитики действий физического лица на веб-сайте и функционирования веб-сайта; проведение рекламных и новостных рассылок.
        </p>
        <p className="par">
          5. Основанием для обработки персональных данных является: ст. 24 Конституции Российской Федерации; ст.6 Федерального закона №152-ФЗ «О персональных данных»; настоящее согласие на обработку персональных данных.
        </p>
        <p className="par">
          6. В ходе обработки с персональными данными будут совершены следующие действия: сбор; запись; систематизация; накопление; хранение; уточнение (обновление, изменение); извлечение; использование; блокирование; удаление; уничтожение.
        </p>
        <p className="par">
          7. Персональные данные обрабатываются до отписки физического лица от рекламных и новостных рассылок. Также обработка персональных данных может быть прекращена по запросу субъекта персональных данных. Хранение персональных данных, зафиксированных на бумажных носителях осуществляется согласно Федеральному закону
          №125-ФЗ «Об архивном деле в Российской Федерации» и иным нормативно-правовым актам в области архивного дела и архивного хранения.
        </p>
        <p className="par">
          8. Согласие может быть отозвано субъектом персональных данных или его представителем путем направления письменного заявления на почту
        </p>
        <p className="par">
          9. Настоящее согласие действует все время до момента прекращения обработки персональных данных, указанных в п.7 и п.8 данного Согласия.
        </p>
      </TextBlock>

      <FormOrder/>

    </PageWrapper>
  </Wrapper>
);

export default page
