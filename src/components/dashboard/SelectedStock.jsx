import React, { Component } from 'react';
import Wallet from './Wallet'

class SelectedStock extends Component {
  render() {
    const { name, code, buyPrice } = this.props.selected;
    return (
      <div className="display-left">
        <div className="acaorelative">
          <h3>Ação selecionada</h3>
            <h5>{name}</h5>
            <p>Código: {code}</p>
            <p>Preço: R${buyPrice}</p>
        </div>
        <div>
         <Wallet className="relativeImg" />
        </div>
      </div>
    );
  }
}

export default SelectedStock;
