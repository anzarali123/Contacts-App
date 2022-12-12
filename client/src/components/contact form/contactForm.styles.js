import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 10px;
`;

export const Input = styled.input`
  transition: 0.1s ease;
  padding: 10px 0;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export const Label = styled.label`
  font-size: 20px;
`;
