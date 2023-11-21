'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from './types.module.scss';
import Label from '../label/label';

const Types = (): JSX.Element => {

  return (
    <div className={styles.types}>
      <Label title='Популярные жанры  сейчас' />
      <Swiper navigation={true} modules={[Navigation]} className="types-swiper">
        <SwiperSlide>
          <div className={styles.fig} id={styles.fig1}></div>
          <div className={styles.block}>
            <div className={styles.content} id={styles.col1}>
              <h3>Абстрактное искусство</h3>
              <p>
                Абстракция – художественный стиль в живописи, который не пытается изобразить реальность, окружающую нас. Инструментами абстрактного искусства являются необычные формы, яркие цвета и знаки, отображающие восприятие самого художника. Глядя на абстрактную картину, зритель наверняка испытает самые неожиданные эмоции и чувства. На первый взгляд может показаться, что это хаотичное нагромождение линий, цветов и фигур, однако при внимательном изучении вы точно заметите целостную композицию.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.fig} id={styles.fig2}></div>
          <div className={styles.block}>
            <div className={styles.content} id={styles.col2}>
              <h3>Модернизм</h3>
              <p>
                Модернизм – это художественный стиль, вмещающий в себе несколько направлений: кубизм, футуризм и сюрреализм. Для них характерны индивидуальность, вызов классическим канонам и свобода, и поэтому художники стремились изображать свои чувства и эмоции в моменте.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.fig} id={styles.fig3}></div>
          <div className={styles.block}>
            <div className={styles.content} id={styles.col3}>
              <h3>Поп-арт</h3>
              <p>
                Стиль, который зародился совсем недавно, около середины прошлого столетия. Такие полотна отличаются яркими красками и смелыми деталями. Художники поп-арта изображали людей, животных, а также повседневные предметы, с которыми знаком каждый человек (например, товары из супермаркетов и рекламные афиши). Поп-арт отрицает рутину и дает зрителю взглянуть на нее через призму веселой и беззаботной жизни. Это был способ выразить свое желание перемен и отреагировать на текущее положение вещей.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.fig} id={styles.fig4}></div>
          <div className={styles.block}>
            <div className={styles.content} id={styles.col4}>
              <h3>Стрит-арт</h3>
              <p>
                Стрит-арт популярен изображениями граффити, скульптур и отдельных уличных объектов, и эти холсты часто наполнены яркими и черными красками, которые резко выделяются на общем фоне.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.fig} id={styles.fig5}></div>
          <div className={styles.block}>
            <div className={styles.content} id={styles.col5}>
              <h3>Минимализм</h3>
              <p>
                Минимализм – это стремление к простоте, монохромной палитре и лаконичности. На первый взгляд такие картины могут показаться скучными, однако, они наполнены глубоким смыслом и дают богатую пищу для размышлений. Художники этого направления выделяют на своих холстах чистую красоту и геометрию, вытесняя привычную реальность.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Types;