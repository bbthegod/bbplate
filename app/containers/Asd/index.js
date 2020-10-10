/**
 *
 * Asd
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAsd from './selectors';
import reducer from './reducer';
import saga from './saga';
import { get } from './actions';

export function Asd(props) {
  const { asd, onGet } = props;
  const [posts, setPosts] = useState([]);
  useInjectReducer({ key: 'asd', reducer });
  useInjectSaga({ key: 'asd', saga });

  useEffect(() => {
    onGet();
  }, []);

  useEffect(() => {
    if (asd) {
      setPosts(asd.data);
    }
  }, [asd]);

  return (
    <div>
      <ul>
        {posts ? posts.map(item => <li key={item.id}>{item.title}</li>) : null}
      </ul>
    </div>
  );
}

Asd.propTypes = {
  asd: PropTypes.object,
  onGet: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  asd: makeSelectAsd(),
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

export default compose(withConnect)(Asd);
