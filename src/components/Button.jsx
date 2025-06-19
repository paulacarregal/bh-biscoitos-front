import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #A0522D;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #7A4222;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

function Button({ children, onClick, type = 'button', disabled, ...props }) {
    return (
        <StyledButton type={type} onClick={onClick} disabled={disabled} {...props}>
            {children}
        </StyledButton>
    );
}

export default Button;