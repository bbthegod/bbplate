/**
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { get } from './actions';

export function HomePage(props) {
  const { homePage, onGet } = props;
  const [posts, setPosts] = useState([]);
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => {
    onGet();
  }, []);

  useEffect(() => {
    if (homePage) {
      setPosts(homePage.data);
    }
  }, [homePage]);

  return (
    <div>
      <ul>
        {posts ? posts.map(item => <li key={item.id}>{item.title}</li>) : null}
      </ul>
    </div>
  );
}

HomePage.propTypes = {
  homePage: PropTypes.object,
  onGet: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGet: () => dispatch(get()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
