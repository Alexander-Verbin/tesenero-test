import React from "react";

import style from "./MainBlock.module.scss"
import {MainBlockCard} from "./MainBlockCard/MainBlockCard";

import one from "../../assets/img/icons/icon1.svg"
import two from "../../assets/img/icons/icon2.svg"
import three from "../../assets/img/icons/icon3.svg"
import four from "../../assets/img/icons/icon4.svg"
import berry from "../../assets/img/berry.png"

export const MainBlock: React.FC = () => {
	return (
		<div className={style.MainBlock}>
			<div className={`${style.MainBlock__container} container`}>
				<h1 className={`${style.MainBlock__title} title`}>Lorem ipsum, dolor sit amet consectetur</h1>
				<div className={style.MainBlock__content}>
					<div className={`${style.MainBlock__block} ${style.MainBlock__block_first}`}>
						<div className={style.MainBlock__block_item}>
							<MainBlockCard img={one} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						</div>
						<div className={style.MainBlock__block_item}>
							<MainBlockCard img={two} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						</div>
					</div>
					<div className={`${style.MainBlock__block} ${style.MainBlock__block_second}`}>
						<div className={style.MainBlock__block_item}>
							<MainBlockCard img={three} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						</div>
						<div className={style.MainBlock__picture}>
							<img className={style.MainBlock__image} src={berry} alt="berry"/>
						</div>
						<div className={style.MainBlock__block_item}>
							<MainBlockCard img={four} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						</div>
					</div>
					<div className={`${style.MainBlock__block} ${style.MainBlock__block_third}`}>
						<div className={style.MainBlock__block_item}>
							<MainBlockCard img={one} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						</div>
						<div className={style.MainBlock__block_item}>
							<MainBlockCard img={two} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}