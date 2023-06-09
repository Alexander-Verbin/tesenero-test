import React from "react";

import style from "./CommentLarge.module.scss"


type PropsType = {
	img: string
	text: string
	name: string
}
export const CommentLarge = ({img, text, name}: PropsType) => {
	return (
		<div className={style.CommentLarge}>
			<div className={style.CommentLarge__picture}>
				<img className={style.CommentLarge__image} src={img} alt="person"/>
			</div>
			<div className={style.CommentLarge__content}>
				<div className={style.CommentLarge__inner}>
					<svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M19.4804 16.5425C19.4804 21.7657 15.1319 26 9.76674 26C4.40157 26 0.507458 21.9116 0.0531052 16.7069C-0.640556 8.76502 5.55625 2.11552 13.0795 0C10.5151 1.50963 8.72625 4.13515 8.42795 7.18869C8.86708 7.12801 9.31144 7.08493 9.76674 7.08493C15.1319 7.08493 19.4804 11.3187 19.4804 16.5425Z"/>
						<path
							d="M40 16.5425C40 21.7657 35.6515 26 30.2859 26C24.9212 26 21.0266 21.9116 20.5718 16.7069C19.8781 8.76502 26.0749 2.11552 33.5986 0C31.0343 1.50963 29.2459 4.13515 28.9471 7.18869C29.3862 7.12801 29.8311 7.08493 30.2859 7.08493C35.6515 7.08493 40 11.3187 40 16.5425Z"/>
					</svg>
				</div>
				<div className={style.CommentLarge__info}>
					<p className={`${style.CommentLarge__text} text`}>{text}</p>
					<h3 className={`${style.CommentLarge__name} textSmall`}>{name}</h3>
				</div>
				<div className={style.CommentLarge__inner}>
					<svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M19.4804 16.5425C19.4804 21.7657 15.1319 26 9.76674 26C4.40157 26 0.507458 21.9116 0.0531052 16.7069C-0.640556 8.76502 5.55625 2.11552 13.0795 0C10.5151 1.50963 8.72625 4.13515 8.42795 7.18869C8.86708 7.12801 9.31144 7.08493 9.76674 7.08493C15.1319 7.08493 19.4804 11.3187 19.4804 16.5425Z"/>
						<path
							d="M40 16.5425C40 21.7657 35.6515 26 30.2859 26C24.9212 26 21.0266 21.9116 20.5718 16.7069C19.8781 8.76502 26.0749 2.11552 33.5986 0C31.0343 1.50963 29.2459 4.13515 28.9471 7.18869C29.3862 7.12801 29.8311 7.08493 30.2859 7.08493C35.6515 7.08493 40 11.3187 40 16.5425Z"/>
					</svg>
				</div>
			</div>
		</div>
	)
}