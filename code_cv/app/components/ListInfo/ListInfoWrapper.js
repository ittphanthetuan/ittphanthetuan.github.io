import styled from 'styled-components';

const ListInfoWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0 20px;

  li {
    padding-left: 25px;
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #000;
      -webkit-print-color-adjust: exact;
    }
  }
`;

export default ListInfoWrapper;
