import React, { PropTypes } from 'react';
import PagedContent from './PagedContent';
import PagedControls from '../components/PagedControls';

export default class Paged extends React.Component {
  constructor(props) {
    super(props);
    const totalItems = (props.children ? props.children.length : 0);
    this.state = {
      currentPage: 1,
      itemsPerPage: props.itemsPerPage,
      itemRange: {
        min: 0,
        max: props.itemsPerPage - 1
      },
      totalItems: totalItems,
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
    return Math.ceil(this.state.totalItems / this.state.itemsPerPage);
  }

  renderChildren() {
    const { itemRange } = this.state;
    let children = this.props.children.filter(x => x.key >= itemRange.min && x.key <= itemRange.max);
    return children;
  }

  renderControls() {
    const { showControls, labels } = this.props;

    if (showControls) {
      return (
        <PagedControls
          currentPage={ this.state.currentPage }
          totalPages={ this.getTotalPages() }
          gotoPage={ this.gotoPage.bind(this) }
          labels={ labels } />
      );
    }

    return null;
  }

  render() {
    const { labels, children, showControls } = this.props;

    return (
      <div ref="container" className="paged">
        { (showControls !=='bottom' ? this.renderControls() : null) }
        { this.renderChildren() }
        { (showControls !=='top' ? this.renderControls() : null) }
      </div>
    );
  }
}

Paged.propTypes = {
  itemsPerPage: PropTypes.number,
  labels: PropTypes.object,
  data: PropTypes.oneOfType([
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
  },
  showControls: false
};
