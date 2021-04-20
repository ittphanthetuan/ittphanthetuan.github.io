/**
 *
 * TitleCategory
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CategoryTitleWrapper from './CategoryTitleWrapper';

class CategoryTitle extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <CategoryTitleWrapper>
        <span>{children}</span>
      </CategoryTitleWrapper>
    );
  }
}

CategoryTitle.propTypes = {
  children: PropTypes.any,
};

export default CategoryTitle;
