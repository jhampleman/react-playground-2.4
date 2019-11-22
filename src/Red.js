import React from 'react';

import { connect } from 'react-redux';

import { activateClick, closeClick } from './redux';

// App.js
export class Red extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.click.title || 'Not Clicked'}</h1>

        {this.props.click.title ? (
          <button onClick={this.props.closeClick}>Unclick Me</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateClick({ title: 'I am clicked!' })
            }
          >
            Click Me!
          </button>
        )}
        <p>&nbsp;</p>
      </>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  click: state.click,
});

const mapDispatchToProps = {
  activateClick,
  closeClick,
};

const RedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Red);

export default RedContainer;
