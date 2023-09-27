import React, { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import { ThemeProvider } from "styled-components";

function App() {
	const [theme, setTheme] = useState(true);

	const toggleTheme = () => {
		setTheme((theme) => !theme);
	};

	return (
		<ThemeProvider theme={theme ? temaOscuro : temaClaro}>
			<GlobalStyle />
			<BtnTema onClick={toggleTheme}>
				<ThemeSwitcher theme={theme} />
			</BtnTema>
			<Header />
			<Container />
		</ThemeProvider>
	);
}

export default App;
