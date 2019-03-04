import styled from 'styled-components';

const TitleCategoryWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 15px 0 20px 0;
  border-bottom: 1px solid #000;
  // color: #fff;
  // background-color: #1867AA;
  padding: 5px 10px;
  -webkit-print-color-adjust: exact;

  span {
    display: inline-block;
    font-size: 18px;
    text-transform: uppercase ;
    padding-right: 15px;
    white-space: nowrap;
    font-weight: bold;
  }

`;

export default TitleCategoryWrapper;
