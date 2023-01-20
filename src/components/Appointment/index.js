import React from "react";
import "./styles.scss";

import Show from "./Show"
import Empty from "./Empty"
import Header from "./Header";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  function save(name, interviewer) {
    // starting to save transitioning state to saving
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };
    props
      .bookInterview(props.id, interview)
      .then((_) => transition(SHOW))
      .catch(
        (error) => {
          transition(ERROR_SAVE, true)
        }); // wait until server update => transition

  }

  function onEdit() {
    transition(EDIT)
  }

  function onConfirm() {
    transition(CONFIRM);
  }

  function deleteApp(id) {
    transition(DELETING);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((error) => transition(ERROR_DELETE, true))
  };

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment" data-testid="appointment">
      <Header
        time={props.time}
      />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={onConfirm}
          onEdit={onEdit}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />)}
      {(mode === SAVING || mode === DELETING) && (
        <Status
          status={mode} />
      )}
      {mode === CONFIRM && (
        <Confirm
          onCancel={back}
          onConfirm={deleteApp}
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not book appointment."
          onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error message="Could not cancel appointment."
        />
      )}

    </article>
  )
}
