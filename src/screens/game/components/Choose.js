import {useState} from "react";

export const Choose = (props) => {
  const {answer, selectChoose} = props;
  const [myChoose, setMyChoose] = useState(false);
  return (
    <div
      className={myChoose ? "choose selected" : "choose"}
      onClick={() => {
        selectChoose(answer._id);
        setMyChoose(true);
      }}
    >
      <div className='content'>{answer?.text}</div>
    </div>
  );
};
