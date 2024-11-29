import React from 'react';

// Définition de l'interface des props
interface GreetingProps {
  name: string; // Le prop 'name' est une chaîne de caractères
}

// Définition du composant fonctionnel typé
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Exportation du composant
export default Greeting;
