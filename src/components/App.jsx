import React, { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification.jsx";

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = state;
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed();
  };

  const vote = name => {
    setState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions vote={vote} options={Object.keys(state)} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) :
          (
            <Notification message="There is no feedback" />
          )
        }
      </Section>
    </div>
  );
}
