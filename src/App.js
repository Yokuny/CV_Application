import styled from "styled-components";
import Title from "./components/Title";
import FormDisplace from "./components/FormDisplace";
import Navigator from "./components/Navigator";
const AppBodyDisplace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

function App() {
  return (
    <AppBodyDisplace>
      <Title indice={1} title={"Qual seu nome:"} />
      <FormDisplace content={["text", "number", "email"]} />
      <Navigator />
    </AppBodyDisplace>
  );
}

export default App;
