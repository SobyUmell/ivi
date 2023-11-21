'use client'

import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-cards";
import styles from './cards.module.scss';

const Cards = (): JSX.Element => {
  return (
    <div className={styles.cardbox}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={
          {
            delay: 2000
          }
        }
        modules={[EffectCards, Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className='special'>
          <div className={styles.card} id={styles.card1}>
            <p className={styles.label}>
              Начни изучать жанры прямо сейчас
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card} id={styles.card2}>
            <p className={styles.label}>
              Откройте сокровища творческой души
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card} id={styles.card3}>
            <p className={styles.label}>
              Не пропусти интересные выставки
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Cards;