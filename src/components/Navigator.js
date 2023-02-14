import styled from "styled-components";
import { ArrowUp, ArrowDown } from "../assets/Arrows";
const Arrow = styled.button`
  width: 40px;
  height: 36px;
  border: 1px #000 solid;
  background-color: rgb(233, 70, 146);
  cursor: pointer;
  &:hover {
    svg {
      fill: #d4d4d4;
    }
  }
`;
const ButtonsDisplace = styled.div`
  margin-top: 4vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
function Navigator() {
  return (
    <ButtonsDisplace>
      <Arrow>
        <ArrowUp />
      </Arrow>
      <Arrow>
        <ArrowDown />
      </Arrow>
    </ButtonsDisplace>
  );
}
export default Navigator;
