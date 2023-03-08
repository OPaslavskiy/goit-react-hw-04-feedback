// import { Component } from 'react';
import { Layout } from '../Layout';
import { GlobalStyle } from 'GlobalStyle';
import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';
import { Statistics } from './FeedbackStatistics/FeedbackStatistics';
import { String } from './App.styled';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '380px',
  position: 'left-top',
  distance: '10px',
  fontSize: '23px',
  timeout: 1500,
});

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTotal(good + bad + neutral);
    setPercentage(Math.round((good / total) * 100));
  }, [good, bad, neutral, total]);

  function addFeedBack(name) {
    switch (name) {
      case 'good':
        setGood(good + 1);
        Notiflix.Notify.success('You chose Good. Thanks!');
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        Notiflix.Notify.warning('You chose Neutral. We will be better ;)');
        break;
      case 'bad':
        setBad(bad + 1);
        Notiflix.Notify.failure('You chose Bad. Sorry, we are sad (((');
        break;
      default:
        return;
    }
  }

  return (
    <Layout>
      <GlobalStyle />
      <FeedbackBtn
        options={['good', 'neutral', 'bad']}
        addFeedBack={addFeedBack}
      />
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      ) : (
        <String>No feedback given</String>
      )}
    </Layout>
  );
};
