const ActionTypes = {
    LOAD_QUESTIONS: "LOAD_QUESTIONS",
  };
  
  export const initState = {
    questions: [],
  };
  
  export const gameReducer = (state = initState, action) => {
    switch (action.type) {
      case ActionTypes.LOAD_QUESTIONS:
        state.questions = action.questions;
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
  