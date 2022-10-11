import { Container } from '../src/components/container/container'
const style = {
  width: "360px",
  height: "800px",
  backgroundColor: "#F2D9F2"
  }
function App() {
  return (
    <div style={style} className="App">
      <Container></Container>
    </div>
  );
}

export default App;
