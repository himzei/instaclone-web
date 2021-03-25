import styled from "styled-components";

const SSeparator = styled.div`
  margin: 20px 0 20px 0;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 10px;
    color: #8e8e8e;
  }
`;

function Separator() {
  return (
    <SSeparator>
      <div></div>
      <span> Or </span>
      <div></div>
    </SSeparator>
  );
}

export default Separator;
