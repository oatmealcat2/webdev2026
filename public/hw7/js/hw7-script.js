// HW7 – COSC 2328 – Professor McCurry
// Implemented by: Amelia Jaimes Alcauter

const roster = document.getElementById("roster");
const loading = document.getElementById("loadingMessage");

function PokemonCard(props) {
  return (
    <div className="pokemon-card">
      <img src={"https://placehold.co/150x150/4FC3F7/333333?text=" + props.name} alt={props.name}/>

      <h2>{props.name}</h2>
      <p className="letters">Letters: {props.name.length}</p>
    </div>
  );
}

function PokemonRoster(props) {
  return (
    <div className="pokemon-list">
      {props.pokemon.map(function (p) {
        return <PokemonCard key={p.name} name={p.name} />
      })};
    </div>
  );
}

function App(props) {
  return (
    <div>
      <h2 className="roster-heading">
        {`Showing ${props.roster.length} short-named Pokemon, shortest name first`}
      </h2>
      <PokemonRoster pokemon={props.roster} />
    </div>
  );
}

async function loadRoster() {
    loading.textContent = "Searching...";
    loading.className = "";

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

        if (!response.ok) {
            throw new Error("Request failed with status " + response.status);
        }

        const data = await response.json();
        roster(data);

        const filterPokemon = data.results.filter(function (pokemon) {
            return pokemon.name.length <= 6;
        });

        const sort = filterPokemon.sort(function (a, b) {
            return a.name.length - b.name.length
        });

        const root = ReactDOM.createRoot.document.querySelector("#root");
        root.render(<App roster={sort} />);

        

    } catch (error) {
        console.error(error);
        document.querySelector("#root").innerHTML =
      '<p class="error-message">Could not load Pokémon. Check your connection and try again.</p>';
    }

} 

