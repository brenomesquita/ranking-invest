import React, { Component } from 'react';

class StockTableLine extends Component {
  render() {
    const { name, code, buyPrice } = this.props.stock;
    const { select } = this.props
    return (
      <tr onClick={() => select(this.props.stock)}>
        <td>{name}</td>
        <td>{code}</td>
        <td>{buyPrice}</td>
      </tr>
    );
  }
}

export default StockTableLine;
