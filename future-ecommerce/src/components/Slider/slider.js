import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import 'typeface-roboto';
/* import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
 */
const useStyles = makeStyles({
    root: {
      width: 140,
    },
  });
  
  function valuetext(value) {
    return `${value}°C`;
  }
  
  export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 1000]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <Slider
          value={value}
          min={0}
          max={1000}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
    );
  }