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
            slidesPerView={3}
            spaceBetween={30}
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