import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class FooBar extends Component {
  static propTypes = {
  }
  static defaultProps = {
  };
  shouldComponentUpdate(nextProps) {
    return true;
  }
  render() {
    return (
      <div>Scaffold For Verve UI Component</div>
    );
  }
}