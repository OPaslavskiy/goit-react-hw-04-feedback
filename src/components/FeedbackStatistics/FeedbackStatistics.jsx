import { Titel, String } from './FeedbackStatistics.styled';
export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <Titel>Statistics</Titel>
      <>
        <String>Good: {good}</String>
        <String>Neutral: {neutral}</String>
        <String>Bad: {bad}</String>
        <String>Total: {total}</String>
        <String>Positive feedback: {percentage}%</String>
      </>
    </>
  );
};
