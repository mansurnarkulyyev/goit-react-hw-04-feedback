import React from 'react';
import PropTypes from 'prop-types';
import st from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, vote }) => (
  <div>
    {options.map(option => (
      <button className={st.Button} type="button" key={options} onClick={() => vote(option)}>
        {option}
      </button>
    ))}
  </div>
);


FeedbackOptions.propTypes = {
  vote: PropTypes.func.isRequired,
};


export default FeedbackOptions;

