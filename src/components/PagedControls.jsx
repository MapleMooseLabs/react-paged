import React, {PropTypes} from 'react';
import classNames from 'classnames';

export default class PagedControls extends React.Component {
  constructor(props) {
    super(props);
  }

  renderControl(page, el, label) {
    const currentPage = this.props.currentPage;
    const ControlTag = `${ el }`;
    // console.log('%s : %d', label, page);
    const classes = classNames(
      'paged__control-link',
      {
        'paged__control-link--active': page === currentPage && page === label,
        'paged__control-link--disabled': (page === currentPage || page === currentPage) && page !== label,
      }
    );
    return (
      <li key={ label } className="paged__control-item">
        <ControlTag className={ classes } onClick={ this.props.gotoPage.bind(this, page) }>
          { label }
        </ControlTag>
      </li>
    );
  }

  renderControls() {
    const { currentPage, totalPages, gotoPage, labels } = this.props;
    let controls = [];

    controls.push(this.renderControl(1, 'a', labels.first));
    controls.push(this.renderControl((currentPage > 1 ? currentPage - 1 : 1), 'a', labels.previous));

    for (let i = 1; i <= totalPages; i++) {
      controls.push(this.renderControl(i, 'a', i));
    }

    controls.push(this.renderControl((currentPage < totalPages ? currentPage + 1 : totalPages), 'a', labels.next));
    controls.push(this.renderControl(totalPages, 'a', labels.last));

    return controls;
  }

  render() {
    return (
      <ul className="paged__controls">
        { this.renderControls() }
      </ul>
    );
  }
}

PagedControls.propTypes = {
  totalPages: PropTypes.number
};

PagedControls.defaultProps = {
  totalPages: 1,
  currentPage: 1,
  labels: {
    next: 'next',
    previous: 'previous',
    first: 'first',
    last: 'last'
  },
}
