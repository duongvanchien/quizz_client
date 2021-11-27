import {Button, FormControlLabel, Grid, Switch, Tooltip} from "@mui/material";
import {Choose} from "./components/Choose";
import "./styles.scss";
import ReactCountdownClock from "react-countdown-clock";
import CupIcon from "../../assets/trophy.png";
import SettingIcon from "../../assets/gear.png";
import {FCCustomDialog} from "../../components/FCCustomDialog";
import {useState} from "react";

export const Game = () => {
  const [openSetting, setOpenSetting] = useState(false);

  const handleNextQuestion = () => {
    // alert("OK");
  };

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
        backgroundImage:
          'url("https://hinhanhdep.vn/wp-content/uploads/2019/05/hinh-nen-may-tinh-dep-nhat-13-min.jpg")',
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
      <div className='question'>Ronaldo sinh năm bao nhiêu?</div>
      <div className='chooses'>
        <Grid container spacing={2}>
          <Grid item lg sm={6} xs={12}>
            <Choose content='1986' />
          </Grid>

          <Grid item lg sm={6} xs={12}>
            <Choose content='1985' />
          </Grid>

          <Grid item lg sm={6} xs={12}>
            <Choose content='1987' />
          </Grid>

          <Grid item lg sm={6} xs={12}>
            <Choose content='1989' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
