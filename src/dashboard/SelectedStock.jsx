import React, { Component } from 'react';

class SelectedStock extends Component {
  render() {
    const { name, symbol, price } = this.props.selected;
    return (
      <div>
        <h3>Ação selecionada</h3>
          <h5>{name}</h5>
          <p>Código: {symbol}</p>
          <p>Preço: R${price}</p>
      </div>
    );
  }
}

export default SelectedStock;
