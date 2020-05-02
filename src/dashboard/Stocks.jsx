import React from 'react';

class Stocks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ganho: 0,
    }
    this.handleEachGain = this.handleEachGain.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleEachGain = (gain) => {
    const { ganho } = this.state
    this.setState((prevState) => ({
      ...prevState.ganho,
      ganho: ganho + gain,
    }))
  }

  // handleChange(event) {
  //   this.setState({ ganho: event.target.value })
  // }
  
  render() {
    const { stockBought } = this.props;
    return (
      <tbody>
        {stockBought.map((e) => {
          const ganhoStock = (((12 - e.precoCompra) / e.precoCompra) * 100);
          this.handleEachGain(ganhoStock)
          return (
            <tr key={e.nome}>
              <td>{e.nome}</td>
              <td>{e.codigo}</td>
              <td>{`${e.quantidade} %`}</td>
              <td>{`R$${e.precoCompra}`}</td>
              <td>12</td>
              <td name="ganhoStock" value={this.state.ganho}>{`${ganhoStock} %`}</td>
            </tr>
          )}
        )}
      </tbody>
    )
  }
}

export default Stocks;
