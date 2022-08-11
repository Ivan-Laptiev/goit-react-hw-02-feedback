import PropTypes from "prop-types";
import {BtnFeedBack} from "./FeedBackOptions.styled"

const FeedbackOptions = ({options, onLeaveFeedback }) => (
    <div>
        {options.map(option => (
            <BtnFeedBack type="button" onClick={() => onLeaveFeedback(option)} key={option}> {option} </BtnFeedBack>
        ))}
        
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;