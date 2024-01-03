import React from 'react';
import DraggableCard from './DraggableCard';

const App = () => {
  const handleSwipe = (direction) => {
    // Aquí puedes ejecutar acciones específicas según la dirección del swipe
    console.log(`Swiped ${direction}`);
  };

  const sampleCharacter = {
    mal_id: 1,
    name: 'Spike Spiegel',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/characters/11/516853.jpg',
      },
    },
    about: 'Birthdate: June 26, 2044\nHeight: 185 cm (6\' 1")\nWeight: 70 kg (155 lbs)\nBlood type: O\nPlanet of Origin: Mars\n...',
  };

  return (
    <div>
      <DraggableCard character={sampleCharacter} onSwipe={handleSwipe} />
    </div>
  );
};

export default App;
