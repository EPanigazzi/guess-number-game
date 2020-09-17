import React from "react";
import styled from 'styled-components';

import "./Progress.css";

const Progress = ({ attempt, guessList, feedbackMessage, feedbackColor }) => {
    const Feedback = styled.p`
        text-align: center;
        background-color: ${feedbackColor};
    `  

    return (
        <div style={{ margin: "50px" }} className="progress-bar__current">
            <h2 style={{ marginBottom: 0 }}>Guess # {attempt}</h2>
            <ul style={{ marginTop: "10px" }} className="progress-bar__history">
                {guessList}
            </ul>
            <Feedback>{feedbackMessage}</Feedback>
        </div>
    );
};

export default Progress;
