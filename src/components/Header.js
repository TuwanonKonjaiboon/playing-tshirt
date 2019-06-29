import React from 'react';

import styled from 'styled-components';

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

	span {
		font-size: 1.2em;
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<header>
				<h1>
					Stupid <span>T-Shirt</span> Changing Color.
				</h1>
			</header>
		</HeaderContainer>
	);
};

export default Header;
