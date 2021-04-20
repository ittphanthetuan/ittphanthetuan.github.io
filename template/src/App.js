import React from 'react';
import BoxInfo from './components/BoxInfo'
import WrapperApp from './WrapperApp';
import Category from './components/Category';
import CategoryTitle from './components/CategoryTitle';
import Content from './components/Content'
import GlobalStyles from './global-styles';
import Header from './components/Header'
import dataCV from './mockup/dataCV';
import BoxSkills from './components/BoxSkills'


function App() {
  const { categories, categoriesLeft } = dataCV;

  return (
    <WrapperApp className="App">
      <GlobalStyles />
      <Header />
      <div style={{ display: 'flex', width: '100%', flex: 1 }}>
        <div className='left-template'>
        {categories &&
            categories.map((cat, index) => (
              <Category data={cat} key={index.toString()} />
            ))}
        </div>
        <div className='right-template'>
        {categoriesLeft &&
          categoriesLeft.map((cat, index) => (
              <Category data={cat} key={index.toString()} />
            ))}
          {/* <BoxInfo />
          <BoxSkills /> */}
        </div>
      </div>
    </WrapperApp>
  );
}

export default App;
