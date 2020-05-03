import React, { Component } from 'react';
import stocks from '../data';
import StockTable from './StockTable';
import Trade from './Trade';
import SelectedStock from './SelectedStock';
import TraderInfo from './TraderInfo';
import PortfolioTable from './PortfolioTable';

const initialSelectedStock = {
  name: 'AES Tietê (O)',
  symbol: 'AESAY',
  price: '10',
};

const initialPortfolio = {
  AESAY: {
    quantity: 100,
    buyPrice: 8,
    name: 'AES Tietê (O)',
    price: 10,
  },
  BAK: {
    quantity: 300,
    buyPrice: 5,
    name: 'Braskem (P)',
    price: 10,
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: initialSelectedStock,
      money: 10000,
      portfolio: initialPortfolio,
    };
  }

  changeSelected = (stock) => {
    this.setState({ selectedStock: stock });
  };

  render() {
    return (
      <div className="dashboard">
        <TraderInfo money={this.state.money} />
        <div className="dash-main">
          <PortfolioTable portfolio={initialPortfolio} />
          <SelectedStock selected={this.state.selectedStock} />
          <Trade />
          <StockTable stocks={stocks} select={this.changeSelected} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
