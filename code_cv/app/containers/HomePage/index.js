/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import BoxInfo from 'components/BoxInfo';
import CategoryTitle from 'components/CategoryTitle';
import YearTitle from 'components/YearTitle';
import ListInfo from 'components/ListInfo';
import TableInfo from 'components/TableInfo';
import RowInfo from 'components/RowInfo';
import { romanize } from 'utils/helpers';
import { callDataCV } from './actions';
import { makeSelectDataCV } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePageWrapper from './HomePageWrapper';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    const { handleCallDataCV } = this.props;
    handleCallDataCV();
  }

  render() {
    const { dataCV } = this.props;
    const { categories } = dataCV;
    return (
      <HomePageWrapper>
        <BoxInfo {...dataCV} />
        {categories &&
          categories.map((item, index) => {
            return (
              <div className="box-category">
                <CategoryTitle>{romanize(index + 1)}. {item.title}</CategoryTitle>
                {item.listInfo && item.listInfo.map(itemInfo => (
                  <>
                    {itemInfo.title && <YearTitle title={itemInfo.title}></YearTitle>}
                    <ListInfo list={itemInfo.list}></ListInfo>
                  </>
                ))}

                {item.rowInfo ? <RowInfo data={item.rowInfo} /> : null}
                {item.tableInfo ? <TableInfo data={item.tableInfo} /> : null}
              </div>
            );
          })}
      </HomePageWrapper>
    );
  }
}

HomePage.propTypes = {
  handleCallDataCV: PropTypes.func,
  dataCV: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleCallDataCV: () => dispatch(callDataCV()),
  };
}

const mapStateToProps = createStructuredSelector({
  dataCV: makeSelectDataCV(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
