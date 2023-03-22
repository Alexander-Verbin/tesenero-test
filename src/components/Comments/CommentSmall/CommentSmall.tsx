import React from "react";

import style from "./CommentSmall.module.scss"

type PropsType = {
	img: string
	text: string
	name: string

	reverse: boolean
}
export const CommentSmall = ({img,text,name,reverse}:PropsType) => {
  return (
		<div className={ reverse ? `${style.CommentSmall} ${style.reverse}` : style.CommentSmall}>
			<div className={style.CommentSmall__picture}>
				<img className={style.CommentSmall__image} src={img} alt="person"/>
			</div>
			<div className={style.CommentSmall__content}>
				<p className={`${style.CommentSmall__text} textSmall`}>{text}</p>
				<h3 className={`${style.CommentSmall__name} textSmall`}>{name}</h3>
			</div>
		</div>
	)
}