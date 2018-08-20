import TimeInput from "material-ui-time-picker";

import React from "react";

const RenderTimePicker = ({ input: { value, onChange, ...rest } }) => {
  // console.log({...rest}); // you do not need ..rest
  console.log(value);
  return (
    <div>
      <TimeInput mode="24h" value={value} onChange={onChange} />
    </div>
  );
};

export default RenderTimePicker;
