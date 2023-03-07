import { firstLetterUp } from 'tools/FirstLetterUp';
import { Titel, ButtonDiv, Button } from './FeedbackBtn.styled';
import PropTypes from 'prop-types';

export const FeedbackBtn = ({ state, addFeedBack }) => {
  const stateKeys = Object.keys(state);
  return (
    <>
      <Titel>Please leave feedback</Titel>
      <ButtonDiv>
        {stateKeys.map(key => (
          <Button key={key} onClick={() => addFeedBack(key)}>
            {firstLetterUp(key)}
          </Button>
        ))}
      </ButtonDiv>
    </>
  );
};

FeedbackBtn.propTypes = {
  state: PropTypes.object.isRequired,
  addFeedBack: PropTypes.func.isRequired,
};
