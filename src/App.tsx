import React from 'react';
import {Routes,Route} from "react-router-dom"
import {Page} from "./components/Page/Page";

export const App:React.FC = () => {
	return (
		<>
			<Routes>
				<Route path={"/"} element={<Page/>}/>
			</Routes>
		</>
	);
}
