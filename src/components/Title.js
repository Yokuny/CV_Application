import styled from "styled-components";
const TitleDisplace = styled.div`
  display: flex;
  align-items: center;
  /* width: min(500px, 90%); */
`;
const Indice = styled.p`
  color: rgb(233, 70, 146);
  font-size: 20px;
  font-weight: 700;
  &::after {
    content: "→  ";
    white-space: pre;
  }
`;
const H4 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: white;
  @media (max-width: 350px) {
    font-size: 20px;
  }
`;
export default function Title({ indice, title }) {
  return (
    <TitleDisplace>
      <Indice>{indice} </Indice>
      <H4>{title}</H4>
    </TitleDisplace>
  );
}
