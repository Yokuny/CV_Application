import styled from "styled-components";
const Input = styled.input`
  padding: 12px;
  margin: 4px;
  font-size: 20px;
`;
const TitleStyle = styled.h2`
  width: 60%;
  text-align: center;
  font-size: 4rem;
  color: white;
  width: 100%;
  padding: 20px;
  background-color: black;
`;
function Title({ title }) {
  return <TitleStyle>{title}</TitleStyle>;
}
const GeneralInformation = () => {
  return (
    <>
      <Title title={"Informações basicas"} />
      <Input type="text" minLength="6" placeholder="Your full name" />
      <Input type="email" minLength="8" placeholder="Your email" />
      <Input type="number" min="11" max="14" placeholder="Your phone number" />
    </>
  );
};
export default GeneralInformation;
