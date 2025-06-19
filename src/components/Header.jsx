import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #A0522D;
    color: white;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const MenuIcon = styled.div`
    font-size: 2em;
    cursor: pointer;
    margin-right: 15px;
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 1.5em;
    flex-grow: 1;
    text-align: center;
`;

const Spacer = styled.div`
    width: 2em;
    margin-left: 15px;
`;

function Header({ onMenuToggle }) {
    return (
        <StyledHeader>
            <MenuIcon onClick={onMenuToggle}>☰</MenuIcon>
            <Title>BH BISCOITOS</Title>
            <Spacer />
        </StyledHeader>
    );
}

export default Header;