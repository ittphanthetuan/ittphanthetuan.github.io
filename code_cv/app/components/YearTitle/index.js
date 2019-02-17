import React from 'react';
import PropTypes from 'prop-types';
import YearTitleWrapper from './YearTitleWrapper';

function YearTitle(props) {
  const { title } = props;
  return (
    <YearTitleWrapper>{title}</YearTitleWrapper>
  )
}

YearTitle.propTypes = {
  title: PropTypes.string,
};

export default YearTitle;
