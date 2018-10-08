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
import links from 'components/config/skoraya-pom-studentu'

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="«Cкорая помощь» студенту | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="С каждым годом все больше и больше студентов пользуются услугой диплом на заказ, и в этом нет ничего предосудительного. Возможно, кто-то будет возмущаться: «Ведь дипломная работа – это результат многолетней учебы!», но мы же живем в современном мире, а его реалии иногда бывают довольно суровы.">
    <div className="wrapper bg bg-c2 bg-img bg-img3">

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
          Диплом на заказ – «скорая помощь» студенту
        </h1>
        <p className="block-text__par">
          С каждым годом все больше и больше студентов пользуются услугой <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>, и в этом нет ничего предосудительного. Возможно, кто-то будет возмущаться: «Ведь дипломная работа – это результат многолетней учебы!», но мы же живем в современном мире, а его реалии иногда
          бывают довольно суровы.
        </p>
        <p className="block-text__par">
          Сложно найти студентов, которые никогда не работали за время учебы, а многие к последнему году обучения уже успевают найти хорошее место работы, где планируют остаться и после получения диплома. Большинство работодателей с большой неохотой отпускают своих сотрудников в учебный отпуск, а если и отпускают, то не всегда
          оплачивают. На новом месте работы каждый хочет проявить себя по максимуму, именно поэтому, многие студенты даже и не упоминают в своей компании, что им нужно несколько дней, чтобы посетить хотя бы несколько занятий в вузе. Оказавшись в такой ситуации, весьма проблематично заниматься написанием диплома, ведь это большая и
          сложная работа, требующая много времени и внимания.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/20.jpeg')}/>

      <section className="block-text">
        <p className="block-text__par">
          Может быть, писать диплом после работы – по ночам? Конечно, можно делать и так, но только возникает вопрос: а когда же спать? Современные технологии еще не дошли до такого уровня, чтобы человек мог бодрствовать целыми сутками и при этом оставаться в тонусе. Не забывайте еще и о том, что помимо самой работы за компьютером
          (то есть процесса непосредственной печати дипломной работы), нужно также регулярно ездить к научному руководителю, в библиотеки, собирать практический материал…
        </p>
        <p className="block-text__par">
          Все вышеперечисленные факторы в своей совокупности, вроде бы, ставят студента перед выбором: что важнее – работа и получение диплома? Работа, как говорится, не волк… Но кому хочется отказываться от хорошей работы и, тем более, зарплаты? Ведь после окончания вуза можно еще долгое время ходить по собеседованиям со своим уже
          полученным дипломом в поисках работы. Чтобы избежать такой неприятной ситуации, можно просто <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>
        </p>
        <p className="block-text__par">
          Наверняка, каждый слышал о предоставлении таких услуг, ведь интернет буквально пестрит объявлениями с подобными предложениями. Перед тем, как остановить свой выбор на той или иной фирме, почитайте отзывы клиентов на сайте фирмы, которые уже пользовались такими услугами, также стоит обратить внимание на то, сколько лет
          компания занимается данной деятельностью, есть ли у нее офис, куда можно приехать для заключения письменного договора. И будьте внимательны: многие фирмы предлагают купить уже готовый диплом или, что еще хуже, продают уже готовые корочки! Чтобы не попасть на удочку недобросовестных компаний, будьте предельно внимательны
          и, прежде чем оформлять свой заказ, выясните абсолютно все подробности работы у менеджеров фирмы.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

      <LinksBlock links={links}/>
    </div>
  </Wrapper>
);


export default page
