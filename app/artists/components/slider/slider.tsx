'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from'./slider.module.scss'
import { EffectCoverflow } from 'swiper/modules';
import Label from '../label/label';

const Slider = (): JSX.Element => {

  return (
    <div className={styles.slider}>
      <Label title='Лучшие художники XXI века' />
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
          className="artist-swiper"
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
          <SwiperSlide>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Slider;