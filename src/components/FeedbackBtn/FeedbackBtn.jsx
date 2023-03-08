import { firstLetterUp } from 'tools/FirstLetterUp';
import { Titel, ButtonDiv, Button } from './FeedbackBtn.styled';

export const FeedbackBtn = ({ options, addFeedBack }) => {
  return (
    <>
      <Titel>Please leave feedback</Titel>
      <ButtonDiv>
        {options.map(option => (
          <Button key={option} onClick={() => addFeedBack(option)}>
            {firstLetterUp(option)}
          </Button>
        ))}
      </ButtonDiv>
    </>
  );
};
