import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import TableInfoWrapper from './TableInfoWrapper';
function TableInfo(props) {
  const { data } = props;
  const { header, body } = data;
  return (
    <TableInfoWrapper>
      <thead>
        <tr>
          {header && header.map(item => <th key={item} style={{ width: item.width }}>{item.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {body && body.map((item, idx) => (
          <tr key={idx.toString()}>
            {item.cells && item.cells.map((cell, index) => <td style={{ textAlign: header[index].textAlign }}>{renderHTML(cell)}</td>) }
          </tr>
        ))}
      </tbody>
      
    </TableInfoWrapper>
  )
}

TableInfo.propTypes = {
  data: PropTypes.object,
};

export default TableInfo;