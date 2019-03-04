import styled from 'styled-components';

const TableInfoWrapper = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  margin-top: 35px;

  thead {
    display: table-row-group;
  }
  
  thead th {
    background-color: #f2f2f2;
    height: 70px;
    -webkit-print-color-adjust: exact;
  }

  th, td {
    padding: 5px;
    border: 1px solid #cdcdcd;
  }
`;

export default TableInfoWrapper;
