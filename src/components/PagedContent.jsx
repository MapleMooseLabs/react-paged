import React, {PropTypes} from 'react';

export default class PagedContent extends React.Component {
  render() {
    return (
      <div className="paged__content">
        { this.props.children.filter(x => x.key >= this.props.itemRange.min && x.key <= this.props.itemRange.max) }
      </div>
    );
  }
}

PagedContent.defaultProps = {
  itemsPerPage: 10
};
