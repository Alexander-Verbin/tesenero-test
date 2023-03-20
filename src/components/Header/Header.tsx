import React from "react";

import style from "./Header.module.scss"

import {HandySvg} from "handy-svg";

import logo from "../../assets/img/svg/logo.svg"
import {Navbar} from "../Navbar/Navbar";
import {Button} from "../Button/Button";

export const Header:React.FC = () => {
	return (
		<header className={style.header}>
			<div className={`${style.header__container} container`}>
				<div className={style.header__left}>
					<div className={style.header__logo}>
						<HandySvg src={logo} className={style.header__logo_icon}/>
					</div>
					<Navbar/>
				</div>
				<div className={style.header__right}>
					<Button text={"button"}/>
				</div>
			</div>
		</header>
	)
}