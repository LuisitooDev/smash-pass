import { useState, useEffect } from "react";
import Axios from "axios";
import "bootswatch/dist/darkly/bootstrap.min.css";

import "./App.css";

function App() {
  const [personaje, setPersonaje] = useState("");

  useEffect(() => {
    getPersonajes();
    setTimeout(1000);
  }, []);

  const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

  const getPersonajes = () => {
    const randomPage = getRandomNumber(6832); // Establece el rango máximo de páginas
    const randomIndex = getRandomNumber(25); // Establece el rango máximo de índices por página

    Axios.get(`https://api.jikan.moe/v4/characters?page=${randomPage}`)
      .then((response) => {
        const personajesData = response.data.data;

        if (personajesData.length > 0) {
          const randomCharacter = personajesData[randomIndex - 1]; // Ajusta el índice para que sea válido (entre 1 y 25)

          // Aquí puedes manejar los datos del personaje aleatorio según tus necesidades
          setPersonaje(randomCharacter);
          console.log(randomCharacter.name);
        } else {
          console.log("No se encontraron personajes en la página aleatoria.");
        }
      })
      .catch((error) => {
        console.log("Error: No se pueden obtener los personajes", error);
      });
  };

  return (
    <>
      <center>
        {personaje && personaje.images && personaje.images.webp ? (
          <div
            className="card text-white bg-primary mb-3 custom-card"
            style={{ maxWidth: "30rem" }}
          >
            <div className="card-header">Smash or Pass</div>
            <div className="card-body">
              <img
                src={personaje.images.webp.image_url}
                alt={`Imagen de ${personaje.name}`}
                className="card-img-top custom-card-image"
              />
              <h4 className="card-title">{personaje.name}</h4>
              <center>
                <button
                  className="btn btn-success"
                  onClick={getPersonajes}
                  style={{ marginRight: "200px" }}
                >
                  Pass
                </button>
                <button className="btn btn-danger" onClick={getPersonajes}>
                  Smash
                </button>
              </center>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </center>
    </>
  );
}

export default App;
