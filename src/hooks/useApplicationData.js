import { useState } from "react";
import axios from "axios";


export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}, //selectors.test.js
    interviewers: {}
  });

  const setDay = day => setState(prev => ({ ...prev, day }));

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const url = (`/api/appointments/${id}`)
    return axios.put(url, { interview })
      .then(() => {
        const days = updateSpots(state, appointments);
        setState(prev => ({ ...prev, appointments, days }));
      });
  };


  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const url = (`/api/appointments/${id}`)
    return axios.delete(url)
      .then(() => {
        const days = updateSpots(state, appointments);
        setState(prev => ({ ...prev, appointments, days }));
      });
  };

  function updateSpots(state, appointments) {
    const daysObj = state.days.find(d => d.name === state.day);
    let spots = 0;

    for (const id of daysObj.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    };
    const day = { ...daysObj, spots };
    return state.days.map(d => d.name === state.day ? day : d);
  };

  return { state, setState, setDay, bookInterview, cancelInterview };
};


