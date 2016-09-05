import React, { Component, PropTypes } from 'react';

/*
 * 一个允许用户改变可见 todo 过滤器的组件
 */
export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a href="javascript:void(0);"
         onClick={e => {
          e.preventDefault();
          this.props.onFilterChange(filter);
         }}>
        {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
      </p>
    );
  }
};

Footer.PropTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};