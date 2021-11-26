import {Grid} from "@mui/material";
import {Choose} from "./components/Choose";
import "./styles.scss";
import LinearWithValueLabel from "./components/Progress";

export const Game = () => {
  return (
    <div
      className='background_screen'
      style={{backgroundImage: 'url("https://images2.alphacoders.com/100/1003880.png")'}}
    >
      <div className='question'>Ronaldo sinh năm bao nhiêu?</div>
      <div className='chooses'>
        <Grid container spacing={1}>
          <Grid item lg={3} sm={6} xs={12}>
            <Choose />
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Choose />
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Choose />
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Choose />
          </Grid>
        </Grid>
        <LinearWithValueLabel />
      </div>
    </div>
  );
};
