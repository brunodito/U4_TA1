import React from 'react';
import Card from './Card';

const App = () => {
  const cardsData = [
    {
      title: 'Persona 1',
      description: 'Jugador de futbol',
      assignedTo: 'Marco Reus',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    },
    {
      title: 'Persona 2',
      description: 'Piloto F1',
      assignedTo: 'Carlos Sainz',
      startDate: '2000-01-01',
      endDate: '2024-10-09',
    },
    {
      title: 'Persona 3',
      description: 'Jugador de futbol',
      assignedTo: 'Leonardo Fernandez',
      startDate: '2022-03-11',
      endDate: '2024-09-18',
    },
  ];

  return (
    <div className="app">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default App;

