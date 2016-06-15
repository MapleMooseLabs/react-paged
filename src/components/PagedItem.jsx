import React, {PropTypes} from 'react';

export default class PagedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children;
  }
}

PagedItem.propTypes = {
};
