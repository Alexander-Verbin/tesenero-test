import React from "react";

import style from "./MainBlockCard.module.scss"

type PropsType = {
	img: string
	text: string
}
export const MainBlockCard = ({img,text}:PropsType) => {
	return(
		<div className={style.MainBlockCard}>
			<img src={img} alt="icon"/>
			<p className={`${style.MainBlockCard__text} textSmall`}>{text}</p>
		</div>
	)
}