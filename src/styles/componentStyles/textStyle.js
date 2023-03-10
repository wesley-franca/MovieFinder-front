import styled from "styled-components";

export const Text = styled.h2`
font-size: ${props => props.fontSize === "small" ? "14px" : "20px"};
font-family: 'Roboto', sans-serif;
`;