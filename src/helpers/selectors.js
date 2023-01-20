export const getAppointmentsForDay = function (state, day) {
  const filterAppointments = state.days.filter(appointment => appointment.name === day);
  let result = [];
  filterAppointments.forEach(day => {
    day.appointments.forEach(apmt => {
      result.push(state.appointments[apmt]);
    });
  });
  return result;
};

export const getInterview = function (state, interview) {
  if (!interview) {
    return null
  }
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };
};


export const getInterviewersForDay = function (state, day) {
  const foundDay = state.days.find(d => d.name === day);
  if (!foundDay) {
    return [];
  }
  return foundDay.interviewers.map(interviewerId =>
    state.interviewers[interviewerId])
};
