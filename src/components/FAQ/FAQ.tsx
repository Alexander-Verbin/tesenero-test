import React from "react";

import style from "./FAQ.module.scss"

import faqObj from "../../assets/JSON/faq.json"
import {FAQItem} from "./FAQItem/FAQItem";

export const FAQ:React.FC = () => {
  return(
		<div className={style.FAQ}>
			<h2 className={`${style.FAQ__title} title`}>Lorem ipsum, dolor sit <br/>adipisicing elit.</h2>
			{
				faqObj.map((obj) => (
					<FAQItem {...obj} key={obj.id}/>
				))
			}
		</div>
	)
}