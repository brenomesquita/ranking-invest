import React from 'react';
import './StockSelector.css'

const initialState = {
  nome: '',
  codigo: '',
  precoCompra: 0,
  quantidade: 0,
}

class StockSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    
    this.stockSelection = this.stockSelection.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  stockSelection(stock) {
    this.setState({
      nome: stock.empresa,
      codigo: stock.codigoADR,
      precoCompra: stock.preco,
    })
  }

  handleChange(event) {
    this.setState({ quantidade: event.target.value })
  }

  handleClick() {
    const { click } = this.props;
    click(this.state);
    // this.setState(initialState);
  }



  render() {
    const { stocks } = this.props;
    const { quantidade } = this.state;
    return(
      <div className="StockSelector-Container">
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Código</th>
              <th>Preço</th>
            </tr>
          </tbody>
          <tbody>
            {stocks.map((e) =>
              <tr onClick={() => this.stockSelection(e)} key={e.codigoADR}>
                <td>{e.empresa}</td>
                <td>{e.codigoADR}</td>
                <td>{e.preco}</td>
              </tr>
              )}
          </tbody>
        </table>
        <label className="btn-compra">
          <button type="button" onClick={this.handleClick}>Comprar</button>
        </label>
        <div>
          <label htmlFor="escolha%">
            Porcentagem
            <input type="text" id="escolha%" onChange={this.handleChange} name="quantidade" value={quantidade} />
          </label>
        </div>
      </div>
    )
  }
}

export default StockSelector;
