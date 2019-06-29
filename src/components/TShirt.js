import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

import ItemTypes from './ItemTypes';

const TShirtContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	flex-basis: 60%;
`;

const Shirt = styled.div`
	width: 20rem;
	height: 20rem;
	border: 1px dotted #000;
	transition: all 0.2s;
	background-color: ${({ isActive, previewColor, color }) => (isActive && previewColor) || color || '#fff'};
`;

const TShirt = () => {
	const [lastestDropColor, setLastestDropColor] = React.useState(null);
	const [previewColor, setPreviewColor] = React.useState(null);

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: ItemTypes.COLOR,
		drop: item => {
			setLastestDropColor(item.color);
		},
		hover: (item, monitor) => {
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
			<Shirt ref={drop} previewColor={previewColor} color={lastestDropColor} isActive={isActive} />
		</TShirtContainer>
	);
};

export default TShirt;
