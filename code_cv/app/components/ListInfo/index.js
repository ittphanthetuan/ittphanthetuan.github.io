import PropTypes from 'prop-types';
import React from 'react';
import ListInfoWrapper from './ListInfoWrapper';
function ListInfo(props) {
  const { list } = props;
  return (
    <ListInfoWrapper>
      {list && list.map(item => (<li key={item}>{item}</li>))}
    </ListInfoWrapper>
  )
}

ListInfo.propTypes = {
  list: PropTypes.array,
};

export default ListInfo;
