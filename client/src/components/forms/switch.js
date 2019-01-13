import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
function Switches({ onChange, ref, config, label }) {
  const [state, setState] = React.useState();

  const handleChange = event => {
    setState(event.target.checked);
      onChange(event.target.checked)
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch onChange={handleChange} {...config} inputRef={ref} />}
        label={label}
      />
    </FormGroup>
  );
}

export default Switches;
