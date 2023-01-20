import { useState } from "react"


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([]);

  function transition(to_mode, replace = false) {
    setMode(to_mode); //library
    if (!replace) {
      setHistory(prev => ([...prev, mode]))
    };
  }

  function back() {
    const prev = history.pop(); // can have multiple history in array [hompage, library, game]
    //history = [] => null value
    setMode(prev ? prev : initial);
    setHistory(history);
  }

  return { mode, transition, back };
};
