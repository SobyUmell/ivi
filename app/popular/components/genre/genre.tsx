'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './genre.module.scss';
import { Navigation } from 'swiper/modules';
import Label from '../label/label';

const Genre = (): JSX.Element => {
  return (
    <>
      <Label title='Самые просматриваемые жанры'/>
      <div className={styles.genre}>
        <Swiper 
          navigation={true} 
          modules={[Navigation]} 
          className="genre-swiper" 
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className={styles.wrapper}>
              <div className={styles.img} id={styles.img1}></div>
              <div className={styles.text}>
                <h2>Абстракционизм</h2>
                <p>
                  Абстракционизм — это художественное направление, которое принципиально отказывается от представления объективной реальности и вместо этого стремится к выражению идеи или эмоций через абстрактные формы, линии, цвета и текстуры.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.wrapper}>
              <div className={styles.img} id={styles.img2}></div>
              <div className={styles.text}>
                <h2>Марина</h2>
                <p>
                  Марина — это художественный жанр, в котором изображается морская или речная тематика. Он позволяет художнику передать атмосферу моря, плавание судов, природу и людей, связанных с водным пространством.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.wrapper}>
              <div className={styles.img} id={styles.img3}></div>
              <div className={styles.text}>
                <h2>Портрет</h2>
                <p>
                  Портрет – это изображение лица или фигуры человека, ориентированное на передачу его внешности, выражения, характера и чувств. Портреты могут быть выполнены в различных стилях и могут включать в себя различные элементы, такие как фон, освещение, поза и детали одежды.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Genre;