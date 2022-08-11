import PropTypes from "prop-types";
import {StatisicList, StatisicItem} from "./Statistic.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisicList>
            <StatisicItem>Good: { good }</StatisicItem>
            <StatisicItem>Neutral: { neutral }</StatisicItem>
            <StatisicItem>Bad: {bad}</StatisicItem>
            <StatisicItem>Total: {total}</StatisicItem>
            <StatisicItem>Positive feedbacks: {positivePercentage}%</StatisicItem>
            
        </StatisicList>
    )
}

Statistics.propTypes = {
good: PropTypes.number,
neutral: PropTypes.number,
bad: PropTypes.number,
total: PropTypes.number,
positivePercentage: PropTypes.number,
}

export default Statistics; 