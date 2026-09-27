import { Container } from "react-bootstrap";
import PlayersList from "./PlayersList";

function App() {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Liste des joueurs</h1>
      <PlayersList />
    </Container>
  );
}

export default App;
