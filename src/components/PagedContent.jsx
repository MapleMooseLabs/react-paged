import React, {PropTypes} from 'react';

export default class PagedContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children;
  }
}

PagedContent.propTypes = {
};
