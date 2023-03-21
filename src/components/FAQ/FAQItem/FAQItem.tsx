import React, {useState} from "react";

import style from "./FAQItem.module.scss"

import {HandySvg} from "handy-svg";

import arrow from "../../../assets/img/svg/arrow.svg"


type PropsType = {
	id: number
	image: string
	title: string
	text: string
}
export const FAQItem = ({image, title, text, id}: PropsType) => {

	const [open, setOpen] = useState(2);

	return (
		<div onClick={() => setOpen(id)} className={id === open ? `${style.FAQItem} ${style.active}` : style.FAQItem}>
			<div className={style.FAQItem__icon}>
				<img className={style.FAQItem__icon_item} src={image} alt="icon"/>
			</div>
			<div className={style.FAQItem__info}>
				<div className={style.FAQItem__info_top}>
					<h3 className={`${style.FAQItem__title} subTitle`}>{title}</h3>
					<HandySvg className={style.FAQItem__arrow} src={arrow}/>
				</div>
				<p className={`${style.FAQItem__text} text`}>{text}</p>
			</div>
		</div>
	)
}