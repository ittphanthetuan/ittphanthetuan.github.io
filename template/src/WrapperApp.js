import styled from 'styled-components';
import constants from './constants'

const WrapperApp = styled.div`
  width: 210mm;
  min-height: 297mm;
  /* padding: 20mm; */
  margin: 0 auto;
  background: white;
  box-shadow: 0 0 3px black;
  display: flex;
  flex-direction: column;

  .left-template {
    width: 65%;
    float: left;
    padding: ${constants.paddingBox};
    border-right: 2px solid #E4E4E4;
  }

  .right-template {
    width: 35%;
    float: left;
    padding: ${constants.paddingBox};
  }

  .title-item {
    overflow: hidden;

    .main-title {
      font-weight: bold;
      width: 70%;
      float: left;
    }

    .sub-title {
      float: right;
      width: 30%;
      text-align: right;
      font-size: 12px;
      color: #7F8C8D;
    }
  }

  .year-item {
    font-size: 12px;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.7);
  }

  .category-item:not(last-child) {
    margin-top: 15px;
  }
`;

export default WrapperApp;
