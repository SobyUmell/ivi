'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from'./top.module.scss'
import { EffectCoverflow } from 'swiper/modules';
import Label from '../label/label';

const Top = (): JSX.Element => {

  return (
    <div className={styles.top}>
      <Label title='Топ недели' />
      <div className={styles.container}>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="top-swiper"
        >
          <SwiperSlide>
            <h2>Name1</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Name1</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Name1</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Name1</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Name1</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Name1</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Name1</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>Name1</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Top;