import {useEffect, useReducer, useState} from "react";
import {questionApi} from "../../api/api/questionApi";
import {Question} from "./components/Question";
import {gameReducer, initState, loadQuestions, setTime} from "./logic";
import "./styles.scss";

export const Game = () => {
  const [uiState, uiLogic] = useReducer(gameReducer, initState);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getListQuestion();
  }, []);

  const nextQuestion = () => {
    uiLogic(setTime(15));
    setIndex(index + 1);
  };

  const getListQuestion = async () => {
    try {
      const res = await questionApi.getListQuestion({limit: 10});
      uiLogic(loadQuestions(res.data.questions));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {uiState.questions && uiState.questions.length > index ? (
        <Question question={uiState.questions[index]} nextQuestion={nextQuestion} time={uiState.time} />
      ) : (
        <div>OK day</div>
      )}
    </>
  );
};
