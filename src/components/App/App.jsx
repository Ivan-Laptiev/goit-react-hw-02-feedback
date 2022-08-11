import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistic/Statistic";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";
import { Component } from "react";
import {Container} from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  changeFeedback = (buttonName) => this.setState(prevState => ({ [buttonName]: prevState[buttonName] + 1 }))
  
  countTotalFeedback = () => {
    return  Object.values(this.state).reduce((total, value) => total + value, 0)
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  } 

  render() {
    const { good, neutral, bad } = this.state;
    
    return (
    <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.changeFeedback} />
        </Section>  
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> :<Notification message="There is no feedback" />}
        
        </Section>
    </Container>
    );
  }
};