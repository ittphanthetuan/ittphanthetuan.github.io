import styled from 'styled-components';

const TitleCategoryWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 15px 0 10px 0;
  color: #000;
  padding: 5px 0 5px 0;
  -webkit-print-color-adjust: exact;

  &:before {
    content: '';
    width: 40px;
    height: 2px;
    background-color: #000;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  span {
    display: inline-block;
    font-size: 18px;
    text-transform: capitalize;
    padding-right: 15px;
    white-space: nowrap;
  }

`;

export default TitleCategoryWrapper;
