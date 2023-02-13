import styled from "styled-components";

const TitleStyled = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: white;
  width: 100%;
  padding: 20px;
  background-color: black;
`;

function Title({ title }) {
  return <TitleStyled>{title}</TitleStyled>;
}
export default Title;
