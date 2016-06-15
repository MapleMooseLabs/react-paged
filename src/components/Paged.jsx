import React, { PropTypes } from 'react';
import PagedContent from './PagedContent';
import PagedControls from '../components/PagedControls';

export default class Paged extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: props.itemsPerPage,
      itemRange: {
        min: 0,
        max: props.itemsPerPage - 1
      }
    }
  }

  gotoPage(page) {
    const { currentPage, itemsPerPage, itemRange } = this.state;
    const totalPages = this.getTotalPages();

    if (!page || page < 1 || page > totalPages) {
      return;
    }

    this.setState({
      currentPage: page,
      itemRange: {
        min: (page * itemsPerPage) - itemsPerPage,
        max: (page * itemsPerPage) - 1
      }
    });
  }

  getTotalPages() {
    const children = this.props.children;
    let items = [];
    for (let child of children) {
      if (child.type.name === 'PagedContent') {
        items = child.props.children;
        break;
      }
    }
    return Math.ceil(items.length / this.state.itemsPerPage);
  }

  render() {
    const { children } = this.props;
    const { currentPage, itemsPerPage, itemRange } = this.state;
    return (
      <div ref="container" className="paged">
        {
          React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
              currentPage: currentPage,
              itemRange: itemRange,
              itemsPerPage: itemsPerPage,
              gotoPage: this.gotoPage.bind(this),
              totalPages: this.getTotalPages(),
            })
          )
        }
      </div>
    );
  }
}

Paged.propTypes = {
  itemsPerPage: PropTypes.number
};

Paged.defaultProps = {
  itemsPerPage: 10
};
