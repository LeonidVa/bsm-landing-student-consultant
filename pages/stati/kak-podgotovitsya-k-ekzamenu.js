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

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";


const page = () => (
  <Wrapper title="Как подготовиться к экзамену | «BeSmarter!». Тел. +7 (495) 772-40-90."
           description="Даже круглый отличник порой сомневается в своих силах и не может перебороть волнение, возникающее накануне экзамена. Ведь от того, сдашь или не сдашь предмет, зависит многое, а у молодых людей, порой, очень многое. Поэтому, перед чередой экзаменов, следует придерживаться некоторых правил, благодаря которым можно смело рассчитывать на успех.">
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
            <a>Как подготовиться к экзамену</a>
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

          <Link href="/diplom-mba-na-zakaz">
            <a className="block-service__list-item">
              <span className="block-service__list-title">Диплом MBA</span>
              <p>от <b>25 000</b> руб.</p>
            </a>
          </Link>
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
          Как подготовиться к экзамену
        </h1>
        <p className="block-text__par">
          Даже круглый отличник порой сомневается в своих силах и не может перебороть волнение, возникающее накануне экзамена. Ведь от того, сдашь или не сдашь предмет, зависит многое, а у молодых людей, порой, очень многое. Поэтому, перед чередой экзаменов, следует придерживаться некоторых правил, благодаря которым можно смело
          рассчитывать на успех.
        </p>
        <p className="block-text__par">
          В первую очередь, если Вы е успеваете написать диплом, а сдавать его уже вот-вот, то наши услуги специально для Вас. Вы можете смело прийти к нам – специалистам с большим преподавательским стажем, и мы выполним <Link href="/diplom-na-zakaz"><b><a>диплом на заказ</a></b></Link>, на заданную Вами тему. Теперь, когда о
          наличии диплома можно не переживать, следует заняться самовнушением, ведь если постоянно думать о том, что знаний нет и экзамен не сдать, а диплом не защитить, то так оно и будет, лишь от того, что Вы этого и хотели. Поэтому нужно поменять установку и думать только о том, что защитить диплом для Вас – плевое дело, с
          которым Вы, несомненно, справитесь.
        </p>
        <p className="block-text__par">
          После того, как процесс самовнушения вселил в Вас уверенность, стоит заглянуть в конспекты и начать учить нужный материал. Система запоминания должна быть сбалансирована и распределяться равномерно на все время, выделенное Вами для подготовки. Так, к примеру, 4 часа посвящаете учению, а 2 отдыху, затем повторяете в
          течение всего подобный график. Главное, не забывать отдыхать и правильно расставлять приоритеты. В первую очередь, обратите внимание на то, что Вы знаете в меньшей степени и за знание чего не можете ручаться. Выучив то, что не знали, можно повторить то, что не требует заучивания.
        </p>
      </section>

      <FormEstimate/>

      <ImageBlock imageSrc={require('static/images/block/kak-podg.jpg')}/>

      <section className="block-text">
        <p className="block-text__par">
          Учение учением, а о еде не стоит забывать. Полноценное питание только помогает усвоению материала. Но не стоит совмещать прием пищи и процесс подготовки. Мозг воспринимает информацию, и на экзамене Вы не сможете ничего вспомнить без бутерброда, если он присутствовал в момент учения. Поэтому разделяйте еду и знания, а так
          же прочие действия, которые будут отсутствовать на экзамене, например, музыка или работающий телевизор.
        </p>
        <p className="block-text__par">
          Еще один важный момент – это сон. Восьмичасовой отдых помогает Вам в усвоении заученной информации. Так сказать, во время сна Ваш мозг раскладывает всю полученную информацию по полочкам, и Вы наутро можете блистать знаниями, которых вчера было минимум.
        </p>
        <p className="block-text__par">
          Когда уже настал долгожданный день экзамена, то главным вопросом перед закрытой дверью стоит следующий: идти вперед или немного подождать. Тут же решать, конечно, Вам. Но помните, что за долгие годы преподавания у преподавателей сложились свои стереотипы. Один из стереотипов заключается в том, что в первых рядах идут на
          сдачу отличники и хорошисты, а в последних – двоечники и троечники. К концу экзамена преподаватель, как правило, устает и становится менее внимательным и придирчивым. Если Вы жаждете положительной отметки, но знания Ваши равны нулю или около единицы, то попробуйте прорваться в первые ряды и есть большая вероятность того,
          что удача улыбнется Вам и преподаватель сочтет Ваши незнания растерянностью и волнением.
        </p>
        <p className="block-text__par">
          И все-таки, не забудьте перед экзаменом <Link href="/diplom-na-zakaz"><b><a>заказать диплом</a></b></Link>, это будет еще одной гарантией Вашего успеха.
        </p>
      </section>

      <InfoBlock infoBlockConfig={infoBlockConfig}/>

      <ProfitsBlockSlider profitBlockConfig={dopy}/>

      <CurrentOffer/>

      <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

      <a name="form" id="form"/>
      <FormOrder/>

    </div>
  </Wrapper>
);


export default page
