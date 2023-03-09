import React, { useState } from "react";
import { TimePicker } from "react-ios-time-picker";

const TimerPicker = (props) => {
  const [value, setValue] = useState("10:00 AM");

  const onChange = (timeValue) => {
    setValue(timeValue);
    props.onData(timeValue);
  };
  return (
    <div className="mb-3">
      <TimePicker onChange={onChange} value={value} use12Hours />
    </div>
  );
};

export default TimerPicker;
