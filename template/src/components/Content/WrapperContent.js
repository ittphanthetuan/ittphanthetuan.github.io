import styled from 'styled-components';
import colors from '../../constants/colors'

const WrapperContent = styled.div`
  .text-content {
    color: ${colors.blackContent};

    b {
      color: black;
    }
  }

  .item-content:not(last-child) {
    margin-bottom: 5px;
  }

  .list-content {
    list-style: none;
    margin: 0;
    padding: 0 0 0 15px;
    li {
      padding: 0 0 0 15px;
      position: relative;
      
      &:not(:last-child) {
        margin-bottom: 5px;
      }

      &:before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${colors.blackContent};
        position: absolute;
        left: 0;
        top: 10px;
        margin-top: -2px;
      }
    }
  }
`;

export default WrapperContent;
