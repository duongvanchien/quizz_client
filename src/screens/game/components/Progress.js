import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import * as React from "react";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{display: "flex", alignItems: "center"}}>
      <Box sx={{width: "100%"}}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      progress !== 100 && setProgress((prevProgress) => prevProgress + 10);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{width: "100%"}}>
      <LinearProgressWithLabel value={progress} color='success' style={{height: "0.3rem"}} />
    </Box>
  );
}
