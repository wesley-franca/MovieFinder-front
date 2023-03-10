import styled from "styled-components";

export const Button = styled.button`
  width:  180px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  color: #F90808;
  background-color: #F5A9C4;
  active{
    transform: ${props => props.isDisabled ? "" : "translateY(2px)"};
  }
`;
