import React from 'react';

class ProfileConsulter extends React.Component {
  
  render() {
    return (
      <div>
        <p>{this.props.match.params.name}</p>
        <p>{this.props.match.params.porcentageMonth}</p>
        <p>{this.props.match.params.porcentageWeek}</p>
        <p>{this.props.match.params.porcentageday}</p>
        <p>{this.props.match.params.risk}</p>
        <img src={`https://avatars2.githubusercontent.com/u/${this.props.match.params.imagePath}`} />
      </div>
    );
  }
}

export default ProfileConsulter;
