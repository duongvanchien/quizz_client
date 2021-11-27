import {Grid} from "@mui/material";
import {Choose} from "./components/Choose";
import "./styles.scss";
import ReactCountdownClock from "react-countdown-clock";

export const Game = () => {
  const handleNextQuestion = () => {
    alert("OK");
  };

  return (
    <div
      className='background_screen'
      style={{backgroundImage: 'url("https://hinhanhdep.vn/wp-content/uploads/2019/05/hinh-nen-may-tinh-dep-nhat-13-min.jpg")'}}
    >
      <div className='question'>Ronaldo sinh năm bao nhiêu?</div>
      <div className='time_clock'>
        <ReactCountdownClock
          seconds={15}
          alpha={0.9}
          color='#689f38'
          size={50}
          weight={10}
          showMilliseconds={false}
          onComplete={handleNextQuestion}
        />
      </div>
      <div className='chooses'>
        <Grid container spacing={2}>
          <Grid item lg sm={6} xs={12}>
            <Choose content="1986"/>
          </Grid>

          <Grid item lg sm={6} xs={12}>
            <Choose content="1985"/>
          </Grid>

          <Grid item lg sm={6} xs={12}>
            <Choose content="1987"/>
          </Grid>

          <Grid item lg sm={6} xs={12}>
            <Choose content="1989"/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
