import React from "react";
import {Header} from "../Header/Header";
import {MainBlock} from "../MainBlock/MainBlock";

export const Page:React.FC = () => {
  return(
		<>
			<Header/>
			<main className="main">
				<MainBlock/>
			</main>
		</>
	)
}