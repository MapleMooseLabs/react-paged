import React, {PropTypes} from 'react';

export default class Paged extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      itemsPerPage: props.itemsPerPage,
      totalItems: props.children ? props.children.length : 0,
    }
  }

  getTotalPages() {
    return this.state.totalItems / this.state.itemsPerPage;
  }

  getFirstItemIndex() {
    const { itemsPerPage, currentPage } = this.state;
    return itemsPerPage - (currentPage * itemsPerPage);
  }

  render() {
    const { labels, data } = this.props;

    return (
      <div ref="container">
        {

        }
      </div>
    );
  }
}

Paged.propTypes = {
  itemsPerPage: PropTypes.number,
  labels: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
  }),
  data: PropTypes.onOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

Paged.defaultProps = {
  itemsPerPage: 10,
  labels: {
    next: 'next',
    previous: 'previous',
    first: 'first',
    last: 'last'
  }
};
