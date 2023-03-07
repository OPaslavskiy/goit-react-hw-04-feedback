import { Component } from 'react';
import { Layout } from '../Layout';
import { GlobalStyle } from 'GlobalStyle';
import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';
import { Statistics } from './FeedbackStatistics/FeedbackStatistics';
import { String } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedBack = key =>
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });

  countTotalFeedback = () => {
    let total = 0;
    for (let key in this.state) {
      total += this.state[key];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    } else return 0;
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <FeedbackBtn state={this.state} addFeedBack={this.addFeedBack} />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            state={this.state}
            total={this.countTotalFeedback}
            percentagePositive={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <String>No feedback given</String>
        )}
      </Layout>
    );
  }
}
