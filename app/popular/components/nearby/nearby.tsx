'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './nearby.module.scss'
import { Navigation } from 'swiper/modules';
import Label from '../label/label';

const Nearby = (): JSX.Element => {

  return (
    <>
      <Label title='Ближайшие выставки' />
      <div className={styles.nearby}>
        <div className={styles.container}>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="nearby-swiper"
          >
            <SwiperSlide>
              <div className='desc'>
                <h1>ВЫСТАВКА</h1>
                <p>ОПИСАНИЕ</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='desc'>
                <h1>ВЫСТАВКА</h1>
                <p>ОПИСАНИЕ</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='desc'>
                <h1>ВЫСТАВКА</h1>
                <p>ОПИСАНИЕ</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='desc'>
                <h1>ВЫСТАВКА</h1>
                <p>ОПИСАНИЕ</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='desc'>
                <h1>ВЫСТАВКА</h1>
                <p>ОПИСАНИЕ</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='desc'>
                <h1>ВЫСТАВКА</h1>
                <p>ОПИСАНИЕ</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='desc'>
                <h1>ВЫСТАВКА</h1>
                <p>ОПИСАНИЕ</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='desc'>
                <h1>ВЫСТАВКА</h1>
                <p>ОПИСАНИЕ</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
    
  )
}

export default Nearby;