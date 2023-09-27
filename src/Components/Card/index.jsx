import React from "react";
import styled from "styled-components";

const Card = styled.div`
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	margin: 2px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	font-size: 12px;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.type {
		font-weight: bold;
	}
`;

export default ({ cargo }) => {
	const { type, value, from, date } = cargo;
	return (
		<Card>
			<Info>
				<span className="type">{type}</span>
				<span>{value}</span>
				<span>{from}</span>
			</Info>
			<span>{date}</span>
		</Card>
	);
};
