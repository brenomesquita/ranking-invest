import React from 'react';
import Stocks from './Stocks';

class MyStocks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ganhoCarteira: '',
      ganhoAcumulado: '',
    }
  }
  render() {
    const { stockBought } = this.props
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <th>Ações</th>
              <th>Código</th>
              <th>Quant Carteira</th>
              <th>Comprado</th>
              <th>Venda</th>
              <th>Ganho</th>
            </tr>
          </tbody>
          <Stocks stockBought={stockBought}/>
        </table>
        <span>Ganho Carteira: {this.state.ganhoCarteira}</span>
      </div>
    )
  }
}

export default MyStocks;
