import React from 'react';
import styled from 'styled-components';

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
`;

const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid ${props => (props.hasError ? 'red' : '#ddd')};
    border-radius: 4px;
    font-size: 1em;
    width: 100%;

    &:focus {
        outline: none;
        border-color: #A0522D;
        box-shadow: 0 0 0 2px rgba(160, 82, 45, 0.2);
    }
`;

const ErrorMessage = styled.span`
    color: red;
    font-size: 0.8em;
    margin-top: 5px;
`;

function InputField({ label, type = 'text', value, onChange, placeholder, error, ...props }) {
    return (
        <InputGroup>
            {label && <Label>{label}</Label>}
            <StyledInput
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                hasError={!!error}
                {...props}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputGroup>
    );
}

export default InputField;