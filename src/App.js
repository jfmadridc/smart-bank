import React from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";

function App() {
	return (
		<ThemeProvider theme={temaOscuro}>
			<GlobalStyle />
			<Header />
			<Container />
		</ThemeProvider>
	);
}

export default App;
