import Form from "./components/Form/Form";
import BoxAnimation from "./components/animation/BoxAnimation/BoxAnimation";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import "./App.css";

const App = () => {
  const name = "hover Me"
  const nameArr = name.split("")
  
  return (
      <Container>
      {/* <Button border={true} className={"bg-green-500"}/> */}
      <Button  className={""}>new</Button>
      <BoxAnimation/>
      <div className="alphabetContainer">
        {
          nameArr.map((letter, index) => {
            return <span key={index} className="alphabet" style={{transitionDelay: `${index * 50}ms`}}>{letter}</span>
          })
        }
      </div>
      <Form/>
      </Container>
  
  );
};

export default App;