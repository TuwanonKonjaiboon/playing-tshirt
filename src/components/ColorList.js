import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

import ItemTypes from './ItemTypes';

const colors = [
	{ id: 1, value: 'pink' },
	{ id: 2, value: 'coral' },
	{ id: 3, value: 'orange' },
	{ id: 4, value: 'palevioletred' },
	{ id: 5, value: 'red' }
];

const ColorListContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;

	flex-grow: 1;

	border: none;
	border-radius: 5rem 5rem 0 0;

	background-image: linear-gradient(to right bottom, #f4f4f4, #fefefe);

	padding: 1rem;
`;

const Circle = ({ className, color }) => {
	const [{ opacity }, drag] = useDrag({
		item: { color, type: ItemTypes.COLOR },
		collect: monitor => {
			return {
				opacity: monitor.isDragging() ? 0.4 : 1
			};
		}
	});

	return (
		<React.Fragment>
			<div ref={drag} className={className} style={{ opacity }} />
		</React.Fragment>
	);
};

const StyledCircle = styled(Circle)`
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
	margin: 0.5rem;

	background-color: ${props => (props.color ? props.color : '#333')};

	transition: all 0.2s;

	&:hover {
		transform: translateY(-5px);
	}

	&:active {
		transform: translateY(-px) scale(0.96);
	}
`;

const ColorList = () => {
	return (
		<ColorListContainer>
			{colors.map(color => (
				<StyledCircle key={color.id} color={color.value} />
			))}
		</ColorListContainer>
	);
};

export default ColorList;
