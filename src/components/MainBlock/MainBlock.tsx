import React from "react";

import style from "./MainBlock.module.scss"
import {MainBlockCard} from "./MainBlockCard/MainBlockCard";

import one from "./MainBlockCard/icons/icon1.svg"
import two from "./MainBlockCard/icons/icon2.svg"
import three from "./MainBlockCard/icons/icon3.svg"
import four from "./MainBlockCard/icons/icon4.svg"

export const MainBlock: React.FC = () => {
	return (
		<div className={style.MainBlock}>
			<div className={`${style.MainBlock__container} container`}>
				<h2 className={`${style.MainBlock__title} title`}>Lorem ipsum, dolor sit amet consectetur</h2>
				<div className={style.MainBlock__content}>
					<div className={`${style.MainBlock__block} ${style.MainBlock__block_first}`}>
						<MainBlockCard img={one} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						<MainBlockCard img={two} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
					</div>
					<div className={`${style.MainBlock__block} ${style.MainBlock__block_second}`}>
						<MainBlockCard img={three} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						<MainBlockCard img={four} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
					</div>
					<div className={`${style.MainBlock__block} ${style.MainBlock__block_third}`}>
						<MainBlockCard img={one} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						<MainBlockCard img={two} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
					</div>
				</div>
			</div>
		</div>
	)
}