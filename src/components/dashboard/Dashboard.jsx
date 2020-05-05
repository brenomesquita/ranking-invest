import React, { Component } from 'react';
import stocks from './data';
import StockTable from './StockTable';
import Trade from './Trade';
import SelectedStock from './SelectedStock';
import PortfolioTable from './PortfolioTable';
import { Redirect } from 'react-router';
import './dashboard.css';

const initialSelectedStock = {
  name: 'AES Tietê (O)',
  symbol: 'AESAY',
  price: '10',
};

const initialPortfolio = [
   {
    quantity: 100,
    code: 'AESAY',
    buyPrice: 8,
    name: 'AES Tietê (O)',
    price: 10,
  },
  {
    quantity: 300,
    code: 'BAK',
    buyPrice: 5,
    name: 'Braskem (P)',
    price: 10,
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: '',
      selectedStockSell: '',
      money: 10000,
      portfolio: initialPortfolio,
      redirect: false,
      name: this.props.match.params.FirstName
    };
    this.clickToBuy = this.clickToBuy.bind(this);
    this.clickToSell = this.clickToSell.bind(this);
    this.onSelectedToSell = this.onSelectedToSell.bind(this);
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  changeSelected = (stock) => {
    this.setState({ selectedStock: stock });
  };

  clickToBuy = (selectedStock, quantityBought) => {
    const { portfolio } = this.state;
    const quantity = {quantity: quantityBought}
    const obj = Object.assign(selectedStock, quantity)
    console.log(selectedStock)
    this.setState({ portfolio: [...portfolio, obj] })
  }

  clickToSell = (quantity) => {
    const arrSelectedToSell = this.state.portfolio.find((e) => e.code === this.state.selectedStockSell);
    const index = this.state.portfolio.findIndex((e) => e.code === this.state.selectedStockSell);
    console.log(index);
    if (quantity > arrSelectedToSell.quantity){
      alert('Você não pode vender isso tudo!');
    }
    else if (quantity < arrSelectedToSell.quantity) {
      this.setState((state) => { state.portfolio[index].quantity = state.portfolio[index].quantity - quantity })
      console.log()
      // this.state.portfolio[index] = arrSelectedToSell.quantity - quantity
    }

  }

  onSelectedToSell = (code) => {
    this.setState({ selectedStockSell: code })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    const { money, portfolio, selectedStock } = this.state;
    return (
      <div className="dashboard">
        <button className="btn-dashboard" onClick={this.handleOnClick}>log out</button>
        <div className="trader-info">
          <h1>{this.props.match.params.firstName} {this.props.match.params.lastName}</h1>
          <p>Capital: R${this.state.money}</p>
        </div>
        <div className="wrapper-dashboard">
          <div className="dashboard-wrapper">
            <StockTable
            stocks={stocks}
            select={this.changeSelected}
            />
            <PortfolioTable portfolio={initialPortfolio} />
          </div>
          <Trade selectedStock={selectedStock} onClickSell={this.clickToSell} onClickBuy={this.clickToBuy} />
          <SelectedStock selected={selectedStock} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
