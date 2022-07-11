import React, { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification.jsx";


// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

export function App() {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = state;


  // const onBtnClick = feedback => {
  //   this.setState(prevSate => ({
  //     [feedback]: prevSate[feedback] + 1,
  //   }));
  // };


  const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    // const total = this.countTotalFeedback();
    // return Math.round((good * 100) / total);

    return ((good / countTotalFeedback()) * 100).toFixed();
  };


  const vote = e => {
    const name = e.target.name;
    setState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };


  // render() {
  // const { good, neutral, bad } = this.state;
  // const total = countTotalFeedback()

  return (
    <div>
      <Section title="Please leave feedback">
        {/* <FeedbackOptions
          options={Object.keys(state)}
          onBtnClick={onBtnClick}
        /> */}
        <FeedbackOptions vote={vote} />
      </Section>
      <Section title="Statistics">

        {/* {total > 0 ? ( */}
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            // total={total}
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
  // }
}