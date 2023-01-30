import React from "react"
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';


export default function InterviewerList(props) {
  const listInterviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={() => {
          props.setInterviewer(interviewer.id);
        }}
      />
    );
  });

  return (
    <section>
      <h4 className="interviewers__header text--light" selected>

      </h4>
      <ul className="interviewers__list">
        {listInterviewers}
      </ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};
