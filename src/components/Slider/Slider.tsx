import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {MainBlockCard} from "../MainBlock/MainBlockCard/MainBlockCard";
import { HandySvg } from "handy-svg";

import style from "./Slider.module.scss"

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


import one from "../../assets/img/icons/icon1.svg";
import two from "../../assets/img/icons/icon2.svg";
import three from "../../assets/img/icons/icon3.svg";
import four from "../../assets/img/icons/icon4.svg";
import arrow from "../../assets/img/svg/arrow.svg"


export const Slider:React.FC = () => {

  return(
		<div className={style.Slider}>
			<Swiper slidesPerView={1}
							navigation={{
								nextEl: ".next",
								prevEl: ".prev"
							}}
							pagination={{
								el: `.${style.Slider__pagination}`,
								clickable: true,
								renderBullet: () => {
									return `<span class="${style.Slider__bullet} swiper-pagination-bullet"></span>`;
								},
						}}
							modules={[Navigation,Pagination]}>
				<SwiperSlide>
					<MainBlockCard img={one} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
				</SwiperSlide>
				<SwiperSlide>
					<MainBlockCard img={two} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
				</SwiperSlide>
				<SwiperSlide>
					<MainBlockCard img={three} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
				</SwiperSlide>
				<SwiperSlide>
					<MainBlockCard img={four} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
				</SwiperSlide>
				{/* <div>
					<div>pagination</div>
					<div >prev</div>
					<div onClick={() => swiper.nextSilde()}>next</div>
				</div> */}
				<div className={style.Slider__controls}>
					<button type="button" className={`${style.Slider__button} prev`}>
							<HandySvg className={style.Slider__icon_prev} src={arrow} />
					</button>
					<div className={style.Slider__pagination}></div>
					<button type="button" className={`${style.Slider__button} next`}>
							<HandySvg className={style.Slider__icon_next} src={arrow} />
					</button>
				</div>
			</Swiper>
		</div>
	)
}