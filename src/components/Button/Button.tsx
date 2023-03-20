import React, {useState} from "react";

import style from "./Button.module.scss"

type PropsType = {
	text: string
}
export const Button = ({text}: PropsType) => {
	const [active,setActive] = useState(true)
	return(
		<>
			<button type={'button'}
							className={active ? `${style.button} ${style.active}` : style.button}
							onClick={()=>setActive(!active)}>
				{text}
			</button>
		</>
	)
}