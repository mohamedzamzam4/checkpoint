import React, { Component } from 'react';

// interface pour l'état du composant
interface CounterState {
  count: number; // Le state est un objet avec une propriété 'count' qui est un nombre
}

//  composant de classe avec les types de props et de state
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0, // Initialisation de l'état
  };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
