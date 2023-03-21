import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {MainBlockCard} from "../MainBlock/MainBlockCard/MainBlockCard";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


import one from "../../assets/img/icons/icon1.svg";
import two from "../../assets/img/icons/icon2.svg";
import three from "../../assets/img/icons/icon3.svg";
import four from "../../assets/img/icons/icon4.svg";



export const Slider:React.FC = () => {
  return(
		<>
			<Swiper slidesPerView={1}
							navigation={{
								prevEl: '.prev',
								nextEl: '.next',
							}}
							pagination={{ clickable: true }}
							modules={[Navigation, Pagination,]}>
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
				<div className="next">
				</div>
			</Swiper>
		</>
	)
}