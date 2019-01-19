import React from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";
function Checkboxes({ onChange, ref, config, label, store }) {
  const [state, setState] = React.useState(true);

  const handleChange = event => {
    setState(event.target.checked);
    onChange(event.target.checked);
  };
  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox onChange={handleChange} {...config} inputRef={ref} />} label={label} />
    </FormGroup>
  );
}

export default Checkboxes;
