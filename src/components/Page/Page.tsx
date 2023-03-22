import React from "react";
import {MainBlock} from "../MainBlock/MainBlock";
import { Info } from "../Info/Info";

export const Page:React.FC = () => {
  return(
		<>
			<main className="main">
				<MainBlock/>
				<Info/>
			</main>
		</>
	)
}