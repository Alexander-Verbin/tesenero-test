import React, {useState} from "react";

import style from "./FAQ.module.scss"

import faqObj from "../../assets/JSON/faq.json"
import {FAQItem} from "./FAQItem/FAQItem";

export const FAQ:React.FC = () => {
	const [open, setOpen] = useState(2);
  return(
		<div className={style.FAQ}>
			<div className={style.FAQ__head}>
				<h2 className={`${style.FAQ__title} title`}>Lorem ipsum, dolor sit <br className={'big'}/>adipisicing elit.</h2>
				<p className={`${style.FAQ__text} text`}>Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
			</div>
			<div className={style.FAQ__content}>
				{
					faqObj.map((obj) => (
						<FAQItem open={open} setOpen={setOpen} {...obj} key={obj.id}/>
					))
				}
			</div>
			
		</div>
	)
}