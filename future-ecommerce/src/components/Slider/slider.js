import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';
import 'typeface-roboto';
import { getThemeProps } from '@material-ui/styles';
/* import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
 */

const useStyles = makeStyles({
    root: {
        width: 160,
    }
  });
  
  function valuetext(value) {
    return `${value}`;
  }
  
  export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 1000]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      {props.importaValores(value[0],value[1])}
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