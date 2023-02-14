import styled from "styled-components";
import { ArrowUp, ArrowDown } from "../assets/Arrows";

const NavigateArrows = styled.div`
  display: flex;
`;
const Arrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;
function Navigator() {
  return (
    <NavigateArrows>
      <Arrow>
        <ArrowUp />
      </Arrow>
      <Arrow>
        <ArrowDown />
      </Arrow>
    </NavigateArrows>
  );
}
export default Navigator;
