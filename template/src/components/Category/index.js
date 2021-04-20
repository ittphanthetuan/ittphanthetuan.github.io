import React from 'react';
import CategoryTitle from '../CategoryTitle';
import Content from '../Content';

function Category({ data }) {
  return (
    <div className="box-category">
      {data.title && <CategoryTitle>{data.title}</CategoryTitle>}
      {data.items && data.items.map((item, index) => (
        <div className='category-item'>
          {item.title && <div className={`title-item ${item.subtitle ? 'has-sub-title' : ''}`}>
            <span className='main-title'>{item.title}</span>
            {item.subTitle && <span className='sub-title'>{item.subTitle}</span>}
          </div>}
          {item.year && <div className='year-item'>{item.year}</div>}
          <Content content={item.content} />
        </div>
      ))}
    </div>
  )
}

export default Category;
