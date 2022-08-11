import PropTypes from "prop-types";
import {Title} from "./Section.styled";

const Section = ({ title, children }) => (
    <div>
        <Title> {title}</Title>
        {children}
    </div>
    )

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}
export default Section;