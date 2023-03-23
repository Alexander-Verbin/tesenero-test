import React from "react";
import style from "./Info.module.scss"
import {Comments} from "../Comments/Comments";
import {FAQ} from "../FAQ/FAQ";

export const Info: React.FC = () => {
	return (
		<section className={style.Info}>
			<div className={style.Info__inner}>
				<div className={`${style.Info__container} container`}>
					<div className={style.Info__block}>
						<Comments/>
					</div>
					<div className={style.Info__block}>
						<FAQ/>
					</div>
				</div>
			</div>
		</section>
	)
}
