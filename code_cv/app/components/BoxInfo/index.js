/**
 *
 * BoxInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
import BoxInfoWrapper from './BoxInfoWrapper';
class BoxInfo extends React.PureComponent {
  render() {
    const { titleHeader, info } = this.props;
    const { name, position, listInfo } = info;
    return (
      <BoxInfoWrapper>
        {titleHeader && <h1 className="title-page">{titleHeader}</h1>}
        <div className="box-info">
          {name && <h2 className="name-info">{name}</h2>}
          {position && <div className="position-info">{position}</div>}
          <ul className="list-info">
            {listInfo &&
              listInfo.map(item => (
                <li>
                  <strong>{item.label} : </strong>
                  <span>{item.text}</span>
                </li>
              ))}
          </ul>
        </div>
      </BoxInfoWrapper>
    );
  }
}

BoxInfo.propTypes = {
  titleHeader: PropTypes.string,
  info: PropTypes.object,
};

export default BoxInfo;
