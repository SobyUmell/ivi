'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './cards.module.scss'
import { Navigation } from 'swiper/modules';
import Label from '../label/label';

const Cards = (): JSX.Element => {

  return (
    <>
      <Label title='Тренды' />
      <div className={styles.cards}>
        <div className={styles.container}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              800: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              }
            }}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            className="cards-swiper"
          >
            <SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
    
  )
}

export default Cards;