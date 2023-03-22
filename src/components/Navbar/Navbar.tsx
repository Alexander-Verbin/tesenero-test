import React from "react";

import style from "./Navbar.module.scss"

import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
	return (
		<nav className={style.navbar}>
			<NavLink className={navPage => navPage.isActive
				? `${style.navbar__link} ${style.active}`
				: style.navbar__link} to={"/page1"}>NavItem1</NavLink>
			<NavLink className={navPage => navPage.isActive
				? `${style.navbar__link} ${style.active}`
				: style.navbar__link} to={"/page2"}>NavItem2</NavLink>
			<NavLink className={navPage => navPage.isActive
				? `${style.navbar__link} ${style.active}`
				: style.navbar__link} to={"/"}>NavItem3</NavLink>
		</nav>
	)
}