const ActionTypes = {
  LOAD_QUESTIONS: "LOAD_QUESTIONS",
  SET_TIME: "SET_TIME",
};

export const initState = {
  questions: [],
  time: 15,
};

export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_QUESTIONS:
      state.questions = action.questions;
      return {...state};
    case ActionTypes.SET_TIME:
      state.time = action.time;
      return {...state};
    default:
      return {...state};
  }
};

export const loadQuestions = (questions) => {
  return {
    type: ActionTypes.LOAD_QUESTIONS,
    questions,
  };
};

export const setTime = (time) => {
  console.log(time, "asdnbabfddabfnsdbfsdhvfsdbfgsdf")
  return {
    type: ActionTypes.SET_TIME,
    time,
  };
};
