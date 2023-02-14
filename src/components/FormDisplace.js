import styled from "styled-components";
import Navigator from "./Navigator";
import SubmitButton from "./SubmitButton";
const Form = styled.form`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  font-size: 16px;
  color: rgb(236, 98, 162);
  font-weight: 600;
  letter-spacing: 0.5px;

  outline: 0px;
  border: 4px solid transparent;
  border-bottom: 2px solid rgb(236, 98, 162);

  background-color: transparent;
  &:focus {
    /* Lidar com isso >> arranjar um jeito de o componente não movimentar quando eu coloco-o em focus */
    border: 4px solid transparent;
    border-top: 4px solid transparent;
    border-bottom: 4px solid rgb(236, 98, 162);
  }
`;

const ButtonsDisplace = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
  button {
    padding: 16px;
    border: 1px #000 solid;

    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: rgb(233, 70, 146);
    cursor: pointer;
  }
  button:hover {
    color: #d4d4d4;
    svg {
      fill: #d4d4d4;
    }
  }
`;

function FormDisplace({ content }) {
  return (
    <Form>
      {content.map((input) => (
        <Input type={input} placeholder={input} />
      ))}
      <ButtonsDisplace>
        <SubmitButton buttonText={"Next"} />
        <Navigator />
      </ButtonsDisplace>
    </Form>
  );
}
export default FormDisplace;
