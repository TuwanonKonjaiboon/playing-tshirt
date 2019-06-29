import React from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Header from './Header';
import TShirt from './TShirt';
import ColorList from './ColorList';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100vw;
	height: 100vh;
`;

const App = () => {
	return (
		<AppContainer>
			<DndProvider backend={HTML5Backend}>
				<Header />
				<TShirt />
				<ColorList />
			</DndProvider>
		</AppContainer>
	);
};

export default App;
