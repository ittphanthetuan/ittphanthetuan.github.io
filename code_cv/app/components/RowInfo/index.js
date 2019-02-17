import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import RowInfoWrapper from './RowInfoWrapper';
function RowInfo(props) {
  const { data } = props;
  return (
    <RowInfoWrapper>
      {data && data.map(item => <div className="item-row">{renderHTML(item)}</div>)}
    </RowInfoWrapper>
  )
}

RowInfo.propTypes = {
  data: PropTypes.array,
};

export default RowInfo;
