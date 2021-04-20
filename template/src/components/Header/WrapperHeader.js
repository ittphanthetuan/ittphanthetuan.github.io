import styled from 'styled-components';
import constants from '../../constants'

const WrapperHeader = styled.div`
  padding: ${constants.paddingBox};
  width: 100%;
  /* background-color: #6D6C6A;
  -webkit-print-color-adjust: exact; */
  border-bottom: 2px solid #E4E4E4;
  /* color: #fff; */
  display: flex;
  flex-direction: row;

  .my-name {
    font-size: 28px;
    font-weight: bold;
  }

  .my-position {
    font-size: 18px;
  }

  .avatar {
    margin-right: 10px;
    img {
      border-radius: 50%;
      width: 100px;
    }
  }
  
  .right-header, .left-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default WrapperHeader;
