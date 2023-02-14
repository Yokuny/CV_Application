import styled from "styled-components";
const Form = styled.form`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* width: min(600px, 100%); */
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;

  font-size: 16px;
  color: rgb(236, 98, 162);
  font-weight: 600;
  letter-spacing: 0.5px;

  outline: 0px;
  border: 4px transparent;
  border-bottom: 2px solid rgb(236, 98, 162);

  background-color: transparent;
  &:focus {
    /* Lidar com isso >> arranjar um jeito de o componente não movimentar quando eu coloco-o em focus */
    border: 4px transparent;
    border-bottom: 4px solid rgb(236, 98, 162);
  }
`;
const Button = styled.button`
  margin-top: 2vh;
  padding: 16px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: 1px #000 solid;
  background-color: rgb(233, 70, 146);
  cursor: pointer;
  &:hover {
    color: #d4d4d4;
  }
`;
function FormDisplace({ content }) {
  return (
    <Form>
      {content.map((input) => (
        <Input type={input} placeholder={input} />
      ))}
      <Button>Submit</Button>
    </Form>
  );
}
export default FormDisplace;
