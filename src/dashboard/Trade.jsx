import React, { Component } from 'react';

class Trade extends Component {
  render() {
    const { quantity } = this.props;
    return (
      <div>
        <div>
          <h3>COMPRAR</h3>
          <label htmlFor="input">
            Quantidade
            <input type="text" value={quantity} />
            <button>Comprar</button>
          </label>
        </div>
        <div>
          <h3>VENDER</h3>
          <label htmlFor="input">
            Quantidade
            <input type="text" value={quantity} />
            <button>Vender</button>
          </label>
        </div>
      </div>
    );
  }
}

export default Trade;
