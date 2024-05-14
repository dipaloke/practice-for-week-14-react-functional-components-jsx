import lugia from "./images/Lugia.webp";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Logia";
  const pokepokeCharacteristics = {
    type: "water",
    move: "dragon brath",
  };

  return (
    <div className="flex">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        src={lugia}
        alt="lugia"
        height={200}
        width={200}
        style={{ borderRadius: 100, margin: 20 }}
      />
      <h2>
        Logia's type is{" "}
        <span className="bgGreen">{pokepokeCharacteristics.type}</span> and one
        of their move is{" "}
        <span className="bgWhite">{pokepokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
