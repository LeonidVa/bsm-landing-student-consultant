import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'components/config/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'components/config/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'components/config/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'components/config/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import LinksBlock from 'components/common/LinksBlock';
import links from 'components/config/linksBlock/diplom';

import Video from 'components/common/VideoBlock';
import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Где заказать дипломную работу – лучше заказать дипломную работу в компании «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Ищите, где заказать лучше дипломную работу на выгодных условиях? Конечно в BeSmarter! – это единственный ресурс, где можно заказать дипломную работу и быть уверенным в отличном качестве! Звоните Тел. +7 (495) 772-40-90.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

      <MetaTags>
        {/* <title></title> */}
        <meta name="keywords" content="где заказать дипломную работу купить лучше можно диплом"/>
      </MetaTags>

      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="/diplom-na-zakaz">
            <a>Дипломная работа</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Где заказать</a>
          </Link>
        </div>
      </section>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-service">
        <Link href="/diplom-na-zakaz/gde-zakazat-diplomnuyu-rabotu#form">
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
          <CardPopInfo
            url="/razrabotka-diplomnogo-proekta"
            title="Дипломный проект"
            text={[<p>от 21 000 руб.</p>]}
          />

          <CardPopInfo
            url="/dissertaciya-na-zakaz/magisterskaya"
            title="Магистерская диссертация"
            text={[<p>от 23 000 руб.</p>]}
          />

            <CardPopInfo
                url="/diplom-mba-na-zakaz"
                title="Диплом MBA"
                text={[<p>от 25 000 руб.</p>]}
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
              url="/razrabotka-diplomnogo-proekta"
              title="Пакет «Успешная Защита»"
              text={[<p>от 5 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Доклад"
              text={[<p>от 1 500 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Оригинальность текста"
              text={[<p>Во всех системах</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Ответы к защите"
              text={[<p>от 200 руб.</p>]}
            />

          </div>
          <div className="block-service__list list-5">
            <CardPopInfo
              url="/razrabotka-diplomnogo-proekta"
              title="Мини-диплом Раскладка"
              text={[<p>от 2 000 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Получение по главам"
              text={[<p>Гибкие условия</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Аннотация Отзыв Рецензия"
              text={[<p>от 1 200 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Слайды"
              text={[<p>от 350 руб.</p>]}
            />

            <CardPopInfo
              url="/dissertaciya-na-zakaz/magisterskaya"
              title="Распечатка Переплеты"
              text={[<p>от 1 200 руб.</p>]}
            />

          </div>
        </section>
      </section>

      <section className="block-text">
        <h1 className="block-text__title">
          Где заказать дипломную работу
        </h1>
        <p className="block-text__par">
          Где заказать дипломную работу? Каждый год данный вопрос ставят перед собой тысячи студентов вузов. И вовсе не потому, что в России низкий уровень образования – просто времени на подготовку диплома критически не хватает.
        </p>
        <p className="block-text__par">
          Ведь параллельно нужно ходить на пары, сдавать экзамены, проходить практику, а кто-то еще и подрабатывает. И при этом должно еще остаться время на личную жизнь.
        </p>
        <p className="block-text__par">
          С другой стороны, заказать диплом где угодно – это прямой путь к провалу на защите. Именно поэтому не стоит в целях ложной экономии пользоваться услугами многочисленных фрилансеров, предлагающих написать работу «за 3 копейки». Это почти гарантированно будет плагиат с рерайтом текстов из интернета, что всплывет на
          проверке.
        </p>
        <p className="block-text__par">
          В таком случае, назревает вопрос: где лучше заказать дипломную работу?
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/gde-zak-dip-rabotu.jpg')}/>

      <section className="block-text">
        <h2 className="block-text__title">
          Где заказать дипломную работу
        </h2>
        <p className="block-text__par">
          Наша компания занимается написанием научных трудов на профессиональной основе. Мы принципиально не сотрудничаем с фрилансерами и прочими копирайтерами, а исключительно с действующими преподавателями вузов, имеющими кандидатскую научную степень.
        </p>
        <p className="block-text__par">
          BeSmarter! – это единственный ресурс, где можно заказать дипломную работу и быть уверенным в отличном качестве!
        </p>
      </section>

      <section className="block-text">
        <h2 className="block-text__title">
          Наши преимущества:
        </h2>
        <ul>
          <li>
            качество – каждый диплом проходит двойную проверку в отделе контроля;
          </li>
          <li>
            оперативность – мы можем выполнить работу срочно от 1 дня (но при этом качественно);
          </li>
          <li>
            универсальность – любые специальности и темы, от гуманитарных до технических;
          </li>
          <li>
            конфиденциальность – все аспекты нашего сотрудничества останутся между нами;
          </li>
          <li>
            ответственность – мы сопровождаем и консультируем вас вплоть до успешной защиты;
          </li>
          <li>
            доступность – где купить дипломную работу высокого качества недорого? Ответ очевиден – в BeSmarter!
          </li>
        </ul>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <section className="block-text">
        <h2 className="block-text__title">
          Этапы сотрудничества
        </h2>
        <ol>
          <li>
            Заявка. Вы оформляете заявку на диплом под заказ одним из указанных ниже способов. Проводится собеседование, и мы заключаем с вами официальный договор.
          </li>
          <li>
            Выполнение. После 50% предоплаты наш автор пишет дипломную работу и по главам сдает ее вам на проверку. В случае необходимости вносятся бесплатные правки.
          </li>
          <li>
            Результат. В согласованные сроки вы получаете хороший, уникальный диплом. Автор поможет вам подготовиться к успешной защите.
          </li>
        </ol>
      </section>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <Video>
        <iframe src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview" frameBorder="0" allowfullscreen></iframe>
      </Video>

      <section className="block-text">
        <h2 className="block-text__title">
          Оформляем заявку (Москва и другие города России)
        </h2>
        <ul style={{listStyle: 'none'}}>
          <li>
            Поздравляем, вы уже нашли, где лучше заказать диплом. Осталось лишь выбрать удобный способ связи.
          </li>
          <li>
            сайт – заполните онлайн-форму и дождитесь ответа нашего менеджера;
          </li>
          <li>
            телефон – позвоните нам по телефону +7 495 772-4090;
          </li>
          <li>визит – наш адрес офиса в Москве – Большой Кисловский переулок, д. 1 стр. 2, офис 211.</li>
        </ul>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
