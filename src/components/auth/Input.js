import styled from "styled-components";

const SInput = styled.input`
  width: 100%;
  padding: 7px;
  border-radius: 3px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

function Input(props) {
  return <SInput {...props} />;
}

export default Input;
