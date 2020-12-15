import React from 'react';

class Card extends React.Component {
    render() {
      return <div id='work-content-children'>
          <img
            src="/images/enchantment-table.png"
            alt={this.props.name}
            width="100px"
            height="100px" />
          <h1>{this.props.name}</h1>
          <p>{this.props.shorttext}</p>
          <p><a id="card-url" href={this.props.url} target="_blank" rel="noreferrer">Click here to read more!</a></p>
      </div>;
    }
}

export default Card;