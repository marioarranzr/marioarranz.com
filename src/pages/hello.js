import React from 'react';
import { graphql } from 'gatsby'

class Stuff extends React.Component {
  _renderStuff = () => {
    const stuff = this.props.data.allStuff.edges;
    return stuff.map(stuff => {
      return (
        <li key={stuff.node.id}>
          <p>{stuff.node.userId}</p>
          <p>{stuff.node.title}</p>
          <p>{stuff.node.completed}</p>
        </li>
      );
    });
  };

  render() {
    return <ul className="Stuff">{this._renderStuff()}</ul>;
  }
}

export const query = graphql`
  query StuffQuery {
    allStuff {
      edges {
        node {
          id
          userId
          title
          completed
        }
      }
    }
  }
`;

export default Stuff
