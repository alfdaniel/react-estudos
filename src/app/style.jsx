import styled, { css } from 'styled-components';

const AddButton = styled.button`
    background-color: #ff0000;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;

    ${props => props.$btnprop && 
    css`
        background-color: #000; 
        color: #fff;
    `}
`;

export default AddButton;