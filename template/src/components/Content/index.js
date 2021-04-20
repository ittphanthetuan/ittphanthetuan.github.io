import React from 'react';
import renderHTML from 'react-render-html';
import WrapperContent from './WrapperContent';

function Content({ content }) {

  const renderContent = (item) => {
    const dataContent = [];
    if (item.title) {
      dataContent.push(
        <b>{item.title}</b>
      )
    }
    if (item.list) {
      dataContent.push(
        <ul className='list-content'>
          {item.list.map(itemList => <li className='text-content'>{renderHTML(itemList)}</li>)}
        </ul>
      )
    }

    if (item.text) {
      dataContent.push(<div className='text-content'>{renderHTML(item.text)}</div>)
    }

    return dataContent;
  }

  return (
    <WrapperContent>
      {content && content.map(item => <div className='item-content'>{renderContent(item)}</div>)}
    </WrapperContent>
  )
}

export default Content;
