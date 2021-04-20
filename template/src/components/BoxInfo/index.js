/**
 *
 * BoxInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import dataCV from '../../mockup/dataCV'
// import styled from 'styled-components';
import CategoryTitle from '../CategoryTitle'

/* eslint-disable react/prefer-stateless-function */
import BoxInfoWrapper from './BoxInfoWrapper';
class BoxInfo extends React.PureComponent {
  render() {
    const { info } = dataCV;
    const { listInfo } = info;
    return (
      <BoxInfoWrapper className="box-info">
          {/* {name && <h2 className="name-info">{name}</h2>} */}
        <CategoryTitle>Details</CategoryTitle>
        <ul className="list-info">
          {listInfo &&
            listInfo.map((item, index) => (
              <li key={item + index.toString()}>
                <strong>{item.label}:</strong>
                <span> {item.text}</span>
              </li>
            ))}
        </ul>
      </BoxInfoWrapper>
    );
  }
}

BoxInfo.propTypes = {
  titleHeader: PropTypes.string,
  info: PropTypes.object,
};

export default BoxInfo;
