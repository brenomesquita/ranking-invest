import React from 'react';
import "./consultorProfile.css"

class ProfileConsulter extends React.Component {
  
  render() {
    return (
      <div>
        <div className="card-container">
        <div class="image-container">
				<img src="https://ca.slack-edge.com/TMDDFEPFU-USVFNTCCA-d56f329846a9-512" width="60px" />
			</div>
        
          <div class="lower-container">
            <div>
              <p>Nome: {this.props.match.params.name}</p>
              <p>Porcentagem no mês: {this.props.match.params.porcentageMonth}</p>
              <p>Porcentagem na samana: {this.props.match.params.porcentageWeek}</p>
              <p>Porcentagem no dia: {this.props.match.params.porcentageday}</p>
              <p>Risco: {this.props.match.params.risk}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileConsulter;
