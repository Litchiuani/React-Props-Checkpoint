import { Card } from "react-bootstrap";

// Style en ligne appliqué à chaque carte joueur
const cardStyle = {
  width: "18rem",
  margin: "1rem",
  border: "1px solid #dee2e6",
  borderRadius: "10px",
  overflow: "hidden",
};

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card style={cardStyle}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text as="div">
          <div>Équipe : {team}</div>
          <div>Nationalité : {nationality}</div>
          <div>Numéro de maillot : {jerseyNumber}</div>
          <div>Âge : {age} ans</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Props par défaut si un attribut n'est pas fourni
Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe non renseignée",
  nationality: "Nationalité non renseignée",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/280x220?text=Photo+indisponible",
};

export default Player;
