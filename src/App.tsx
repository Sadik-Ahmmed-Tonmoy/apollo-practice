import Form from "./components/Form/Form";
import BoxAnimation from "./components/animation/BoxAnimation/BoxAnimation";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

const App = () => {
  return (
      <Container>
      {/* <Button border={true} className={"bg-green-500"}/> */}
      <Button variant={"primary"} className={"bg-blue-500"}>new</Button>
      {/* <BoxAnimation/> */}
      <Form/>
      </Container>
  
  );
};

export default App;