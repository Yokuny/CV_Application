import styled from "styled-components";
const Button = styled.button`
  width: 40%;
`;
const SubmitButton = ({ buttonText }) => <Button>{buttonText}</Button>;
export default SubmitButton;
