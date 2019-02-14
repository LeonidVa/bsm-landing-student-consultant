import Link from 'next/link';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty';

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main';

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/esse';

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig';
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'data/linksBlock/kursovaya';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';

import ImageBlock from 'components/common/ImageBlock';
import CardPopInfo from "components/common/ServiceBlock/CardPopInfo";
import ServiceBlock from "components/common/ServiceBlock";

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Esse from "components/common/ServiceBlock/ready-made/Esse"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import React from "react";
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
  <Wrapper
      title="Заказать эссе срочно, недорого – написание эссе на заказ по философии в Москве и РФ – цена и сроки под ключ"
      description="Заказать эссе. Напишем эссе на заказ недорого в Москве. Срочная помощь в написании эссе от надежных профессионалов в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
    <PageWrapper className="bg bg-c2 bg-img bg-img1">


        <Breadcrumbs links={[
            {url:'/', text:'Главная'},
            {url:'#', text:'Эссе'},
        ]}/>


        <ItemScope type="http://schema.org/BreadcrumbList">
            <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
            <ItemListElement url="https://besmarter.ru/zakazat-esse" name="Эссе" position="2" />
        </ItemScope>



      <BlockNav>
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </BlockNav>
            <MessBlock/>

        <Esse/>

<MatZashGirl/>

      <TextBlock>
        <h1>
            Написание эссе на заказ
        </h1>

          <p className="par">
              Студентам нередко поручают писать эссе – работу, выполнение которой требует творческого подхода и умения делать аналитические выкладки. Учащийся должен умело осветить вопрос, высказать свое мнение по какому-то поводу, подвести итог. Если не хватает времени, вы можете заказать эссе недорого у авторов компании BeSmarter!, которые напишут работу и, если это необходимо, внесут в нее корректировки.
          </p>
          <p className="par">
              Чаще всего студенты обращаются к нам в ситуациях, когда:
          </p>
          <ul>
              <li>
                  банально нет времени на написание материала;
              </li>
              <li>
                  нет вдохновения и понимания, о чем писать, как освещать ту или иную тематику.
              </li>
          </ul>
          <p className="par">
            Очень часто обращаются с просьбой заказать эссе срочно, ведь бывает и так, что студент хотел выполнить работу самостоятельно, но подвели обстоятельства. Мы охотно идем навстречу в таких случаях.
          </p>
      </TextBlock>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/zakazat-esse.jpg')} altText="Заказать эссе"/>

      <TextBlock>
        <h2 className="title">
            Преимущества заказа эссе в BeSmarter!
        </h2>
        <ol>
          <li>
              Авторы пишут именно по той теме, которую попросил заказчик. Неоднократно были
              случаи, когда требовалось подготовить эссе на сложную, неоднозначную тему.
              И каждый раз наши авторы (а значит, и клиенты!) справлялись с задачей на «отлично»!
          </li>
          <li>
              Заказчик получает не только работу, но и рекомендации по ее защите.
              Например, если вы не понимаете какой-то вопрос, но уверены, что просто
              так отдать эссе преподавателю и уйти – не получится, мы подготовим материалы
              к защите. Мы объясним, как лучше освещать тематику и защитить работу.
          </li>
          <li>
              Уникальность материалов высокая и составляет от 80%-90% и выше. По этой
              причине студенты не боятся выбирать эссе под заказ в нашей компании.
              Даже если ваш преподаватель захочет проверить уникальность сданного
              текста, он убедится, что все в полном порядке!
          </li>
          <li>
            Можно приятно удивить своего научного руководителя. Поскольку наши
              авторы постоянно пишут работы по университетским предметам, в компании
              накоплен большой опыт подачи информации. Например, тему по философии
              иногда нужно попробовать осветить не совсем обычно, чтобы получить
              высокую оценку за эссе и заработать уважение преподавателя.
          </li>
          <li>
            Работа может быть написана в течение 2-х часов. Если это необходимо
              и «горят» сроки сдачи, обращайтесь – мы точно что-нибудь придумаем,
              предложив самый быстрый вариант.
          </li>
        </ol>
      </TextBlock>

        <TextBlock>
            <h2 className="title">
                Почему лучше заказать эссе, а не купить готовое?
            </h2>
            <ol>
                <li>
                    Готовое эссе, скорее всего, уже видел в интернете ваш преподаватель. Ведь он интересуется, какие готовые работы есть в продаже.
                </li>
                <li>
                    В уже готовом тексте могут быть ошибки, которые «мигрируют» каждый раз, когда материал немного изменяется. Предъявить претензии продавцу в этом случае нет возможности. Работа на заказ вычитывается автором, а потому ошибок в ней нет.
                </li>
                <li>
                    При покупке эссе в интернете нет возможности попросить внести коррективы. Если хотите, вы сможете вносить правки сами, но продавец этого делать точно не будет.
                </li>
                <li>
                    Цена купленной работы не такая уж и маленькая, одновременно с этим качество оставляет желать лучшего.
                </li>
            </ol>
        </TextBlock>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <TextBlock>
        <h2 className="title">
            Как можно сэкономить?
        </h2>
        <p className="par">
            Эссе на любую тематику удобно заказать в нашей компании, предварительно узнав цену услуги. Стоимость написания может быть ниже, если:
        </p>
        <ul>
            <li>
                тема не слишком тяжелая;
            </li>
            <li>
                работу требуется писать на русском языке, а не на иностранном;
            </li>
            <li>
                эссе не нужно сдавать срочно;
            </li>
            <li>
                объем не слишком большой.
            </li>
        </ul>
      </TextBlock>

      <TextBlock>
        <h2 className="title">
            Этапы сотрудничества
        </h2>
          <p className="par">
          Если вы хотите заказать эссе по философии или любому другому предмету,
          оставляйте заявку на сайте или звоните нам по телефону. Затем менеджер
          уточняет все детали. Автор пишет работу, отдает ее вам и сопровождает
          вас до защиты, отвечая на вопросы и, при вашем желании, внося изменения.
          </p>
      </TextBlock>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <ImageBlock imageSrc={require('static/images/block/zakazar-esse2.jpg')} altText="эссе на заказ"/>

      <TextBlock>
        <h2 className="title">
            Как и где заказать работу
        </h2>
        <p className="par">
            Вы можете получить эссе на заказ срочно, если как можно скорее:
        </p>
        <ul>
            <li>
                {" "}
                <b>
                    <a href="#form">оставите заявку</a>
                </b>{" "} со своими контактными данными на сайте;
            </li>
            <li>
                позвоните нам по телефону <b>8 (495) 772-40-90</b>;
            </li>
            <li>
                посетите наш  {" "}
                <Link href="/contacts">
                    <b>
                        <a>офис</a>
                    </b>
                </Link>{" "} в Москве по адресу: пер. Большой Кисловский, дом 1, стр. 2, офис 211.
            </li>
        </ul>
      </TextBlock>

      <a name="form" id="form"/>
      <FormOrder/>

    </PageWrapper>
  </Wrapper>
);


export default page
