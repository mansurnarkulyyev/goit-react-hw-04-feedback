import React from 'react';
import PropTypes from 'prop-types';

import st from './FeedbackOptions.module.css';

const FeedbackOptions = ({ vote }) => (
  // const FeedbackOptions = ({ options, onBtnClick }) => (
  <div>
    <button className={st.Button} onClick={e => {
      vote(e);
    }}
      name="good"
      type="button"
    > Good </button>
    <button className={st.Button} onClick={e => {
      vote(e);
    }}
      name="neutral"
      type="button"
    > Neutral </button>
    <button className={st.Button} onClick={e => {
      vote(e);
    }}
      name="bad"
      type="button"
    > Bad </button>
    {/* {options.map(option => (
      <button className={st.Button} type="button" key={option} onClick={() => onBtnClick(option)}>
        {option}
      </button>
    ))} */}
  </div>
);


FeedbackOptions.propTypes = {
  vote: PropTypes.func.isRequired,
};


export default FeedbackOptions;

