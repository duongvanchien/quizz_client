import {useEffect, useReducer} from "react";
import {questionApi} from "../../api/api/questionApi";
import {Question} from "./components/Question";
import {gameReducer, initState, loadQuestions} from "./logic";
import "./styles.scss";

export const Game = () => {
  const [uiState, uiLogic] = useReducer(gameReducer, initState);

  useEffect(() => {
    getListQuestion();
  }, []);

  const getListQuestion = async () => {
    try {
      const res = await questionApi.getListQuestion();
      uiLogic(loadQuestions(res.data.questions));
    } catch (err) {
      console.log(err);
    }
  };

  return <>{uiState.questions.length && uiState.questions.map((value, key) => <Question question={value} />)}</>;
};
