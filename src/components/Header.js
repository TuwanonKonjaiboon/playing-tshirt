import React from 'react';
import { useDrop } from 'react-dnd';

import styled from 'styled-components';
import ItemTypes from './ItemTypes';

const HeaderContainer = styled.div`
	width: 100wv;
	flex-basis: 10%;
	display: flex;
	justify-content: center;
	align-items: center;

	align-self: stretch;
	background-color: #f4f4f4;
	margin-bottom: 1.5rem;
	padding: 1rem 0;

	${({ colors }) =>
		colors && colors.length >= 2
			? `
		background-color: #fff;
		background-image: linear-gradient(to right, ${colors.join(',')});
		color: #fff;
	`
			: `
		background-color: ${colors[0]};
	`}

	span {
		font-size: 1.2em;
	}

	h1 {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
`;

const Header = () => {
	const [colors, setColors] = React.useState([]);
	const [collector, drop] = useDrop({
		accept: ItemTypes.COLOR,
		drop: item => {
			setColors([...colors, item.color]);
		}
	});

	return (
		<HeaderContainer ref={drop} colors={colors} onClick={() => setColors([])}>
			{console.log(colors)}
			<header>
				<h1>
					Stupid <span>T-Shirt</span> Changing Color.
				</h1>
			</header>
		</HeaderContainer>
	);
};

export default Header;
