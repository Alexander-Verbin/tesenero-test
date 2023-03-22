import React from 'react';
import {Routes,Route} from "react-router-dom"
import {Page} from "./components/Page/Page";
import {Header} from "./components/Header/Header";

export const App:React.FC = () => {
	return (
		<>
			<Header/>
			<Routes>
				<Route path={"/page1"} element={<Page/>}/>
				<Route path={"/page2"} element={<Page/>}/>
				<Route path={"/"} element={<Page/>}/>
			</Routes>
		</>
	);
}
