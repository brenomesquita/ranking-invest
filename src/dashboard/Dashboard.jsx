import React from 'react';
import StockSelector from './StockSelector'
import MyStocks from './MyStocks'
import './Dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantGastar: 100,
      ganhoAcumulado: '',
      ganhoCart: '',
      stockBought: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    const { stockBought, quantGastar } = this.state;
    if( quantGastar - obj.quantidade >= 0) {
      this.setState({
        stockBought: [...stockBought, obj],
        quantGastar: quantGastar - obj.quantidade,
      });
    } else {
      alert('Você não pode gastar mais do que 100%');
    }
  }

  render() {
    const { stocks } = this.props;
    const { quantGastar, ganhoAcumulado, stockBought } = this.state;
    console.log(this.state.stockBought);
    return(
      <div>
        <div>{`Carteira: ${quantGastar} %`}</div>
        <div>{`Ganho Acumulado: ${ganhoAcumulado} %`}</div>
        <div className="dashboardContainer">
          <StockSelector click={this.handleClick} stocks={stocks} />
          <MyStocks stockBought={stockBought} />
        </div>
      </div>

    )
  }
}

export default Dashboard;
