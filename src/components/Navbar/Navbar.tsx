import React from "react";

import style from "./Navbar.module.scss"
import {Link} from "react-router-dom";

export const Navbar:React.FC = () => {
	return (
		<nav className={style.navbar}>
			{/*if more pages*/}
			{/*<NavLink className={navPage => navPage.isActive
				? `${style.navbar__link} ${style.active}`
				: style.navbar__link*/}
			<Link className={style.navbar__link} to={"#"}>NavItem1</Link>
			<Link className={style.navbar__link} to={"#"}>NavItem2</Link>
			<Link className={`${style.navbar__link} ${style.active}`} to={"/"}>NavItem3</Link>
		</nav>
	)
}