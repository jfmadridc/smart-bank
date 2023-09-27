import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";

export default ({ theme }) => {
	const claro = <Icono src={themeOn} alt="buton cambio tema" />;
	const oscuro = <Icono src={themeOff} alt="buton cambio tema" />;

	return <>{theme ? oscuro : claro}</>;
};
