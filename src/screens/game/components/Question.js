import {Button, FormControlLabel, Grid, Switch, Tooltip} from "@mui/material";
import {useCallback, useState} from "react";
import CupIcon from "../../../assets/trophy.png";
import SettingIcon from "../../../assets/gear.png";
import {FCCustomDialog} from "../../../components/FCCustomDialog";
import {Choose} from "./Choose";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {answerApi} from "../../../api/api/answerApi";
import _ from "lodash";
import {ANSWER_STATUS} from "../../../contants";

export const Question = (props) => {
  const {question, nextQuestion, time} = props;
  const [openSetting, setOpenSetting] = useState(false);
  const [statusAnswer, setStatusAnswer] = useState(ANSWER_STATUS.nomal);

  const handleNextQuestion = () => {
    nextQuestion();
  };

  const selectChoose = useCallback(async (choose) => {
    const answerIds = question.answers?.map((value) => value._id);
    try {
      const answers = await answerApi.getAnswers({answers: answerIds});
      const yourChoose = _.find(answers.data.listAnswer, (value) => (value._id === choose));
      if (yourChoose.is_correct === ANSWER_STATUS.correct) {
        alert("Dung roi!");
      } else {
        alert("Sai");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleFullScreen = () => {
    const el = document.documentElement;
    el.requestFullscreen();
  };

  const renderContentSetting = () => {
    return (
      <div style={{color: "#fff", display: "flex", justifyContent: "center"}}>
        <div className='fullscreen_btn'>
          <Button onClick={handleFullScreen}>
            <Tooltip title='Fullscreen'>
              <i className='fas fa-expand' style={{color: "#fff"}}></i>
            </Tooltip>
          </Button>
        </div>
        <div style={{width: "30%"}}>
          <div className='box_setting'>
            <Button variant='contained' color='primary' className='save_btn' onClick={() => setOpenSetting(false)}>
              Tiếp tục
            </Button>
            <Button variant='contained' color='primary' className='exit_btn'>
              Thoát
            </Button>
          </div>

          <div style={{marginTop: "1rem"}}>
            <div style={{marginBottom: "0.5rem"}}>Settings</div>
            <div className='box_setting sound_settings'>
              <FormControlLabel control={<Switch defaultChecked />} label='Âm thanh' />
              <FormControlLabel control={<Switch defaultChecked />} label='Hiệu ứng' />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className='background_screen'
      style={{
        backgroundImage: `url("${question?.url}")`,
      }}
    >
      <div className='game_icons'>
        <div className='game_icon setting_icon'>
          <Tooltip title='Cài đặt'>
            <img src={SettingIcon} onClick={() => setOpenSetting(true)} />
          </Tooltip>
        </div>
        <div className='game_icon setting_icon'>
          <Tooltip title='Bảng xếp hạng'>
            <img src={CupIcon} />
          </Tooltip>
        </div>
      </div>
      <FCCustomDialog
        open={openSetting}
        handleClose={() => setOpenSetting(false)}
        renderContent={renderContentSetting}
        fullScreen={true}
      />
      <div className='time_clock'>
        <CountdownCircleTimer
          isPlaying
          duration={time}
          colors={[
            ["#64dd17", 0.33],
            ["#ffd600", 0.33],
            ["#dd2c00", 0.33],
          ]}
          size={60}
          strokeWidth={10}
          onComplete={() => {
            handleNextQuestion();
            return [true, 100];
          }}
        >
          {({remainingTime}) => <div style={{fontWeight: 700}}>{remainingTime}</div>}
        </CountdownCircleTimer>
      </div>

      <>
        <div className='question'>{question?.text}</div>
        <div className='chooses'>
          <Grid container spacing={2}>
            {question?.answers.length &&
              question?.answers.map((item, index) => (
                <Grid item lg sm={6} xs={12} key={index}>
                  <Choose answer={item} selectChoose={(choose) => selectChoose(choose)} statusAnswer={statusAnswer} />
                </Grid>
              ))}
          </Grid>
        </div>
      </>
    </div>
  );
};
