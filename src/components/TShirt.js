import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDrop } from 'react-dnd';

import ItemTypes from './ItemTypes';

import logo from '../img/tshirt-solid.svg';

// Container
const TShirtContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	flex-basis: 60%;
`;

// Actual Component
const Shirt = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 30rem;
	height: 30rem;
	transition: all 0.2s;
	background-color: ${({ isActive, previewColor, color }) => (isActive && previewColor) || color || '#f3f3f3'};

	mask: url(${props => props.logo}) 50% 50% / 100% 100% no-repeat;

	h1 {
		display: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	&:hover > h1 {
		display: ${props => (props.color ? 'block' : 'none')};
	}

	&:active {
		transform: scale(0.95);
	}
`;

// Function Component
const TShirt = () => {
	const [lastestDropColor, setLastestDropColor] = React.useState(null);
	const [previewColor, setPreviewColor] = React.useState(null);

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: ItemTypes.COLOR,
		drop: item => {
			setLastestDropColor(item.color);
		},
		hover: item => {
			setPreviewColor(item.color);
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	const isActive = canDrop && isOver;
	return (
		<TShirtContainer>
			<Shirt
				onClick={() => setLastestDropColor(null)}
				logo={logo}
				ref={drop}
				previewColor={previewColor}
				color={lastestDropColor}
				isActive={isActive}>
				{lastestDropColor === null && (
					<h1 style={{ display: 'block' }}>
						Drop
						<br />
						Color
						<br />
						Here!
					</h1>
				)}
				<h1>Reset</h1>
			</Shirt>
		</TShirtContainer>
	);
};

export default TShirt;
