import styled from "styled-components";

const SButton = styled.input`
  border: none;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 6px 0;
  font-weight: 500;
  width: 100%;
  border-radius: 3px;
`;

function Button(props) {
  return <SButton {...props} />;
}

export default Button;
