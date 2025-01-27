import React, { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { TYears } from "../../services/types";
import { EventUI } from "../event-ui/event-ui";

import styles from "./karousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";


type KarouselProps = {
  yearsData: TYears;
  isMobile: boolean;
};

export const Karousel: React.FC<KarouselProps> = ({ yearsData, isMobile }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

  return (
    <>
      {!isMobile ? (
        <div className={styles.karouselWrapper}>
          <button
            ref={prevRef}
            className={styles.customPrev}
            style={{ visibility: isPrevDisabled ? "hidden" : "visible" }}
          />
          <Swiper
            className={styles.swiper}
            slidesPerView={3}
            spaceBetween={80}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              const navigation = swiper.params.navigation as NavigationOptions;

              if (navigation) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
            }}
            onSlideChange={(swiper) => {
              setIsPrevDisabled(swiper.isBeginning);
              setIsNextDisabled(swiper.isEnd);
            }}
          >
            {yearsData.section.events.map((event) => (
              <SwiperSlide className={styles.swiperSlide} key={event.id}>
                <EventUI key={event.id} event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={nextRef}
            className={styles.customNext}
            style={{ visibility: isNextDisabled ? "hidden" : "visible" }}
          />
        </div>
      ) : (
        <div className={styles.karouselWrapper}>
          <Swiper
            className={styles.swiper}
            slidesPerView={1.5}
            spaceBetween={25}
          >
            {yearsData.section.events.map((event) => (
              <SwiperSlide className={styles.swiperSlide} key={event.id}>
                <EventUI key={event.id} event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};
