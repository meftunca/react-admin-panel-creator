import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Checkboxes({ onChange, ref, config, label,store }) {
  const [state, setState] = React.useState(true);

  const handleChange = event => {
    setState(event.target.checked);
    onChange(event.target.checked);
  };
    console.log("Checkboxes store", store);

  return (
    <FormGroup row>
          <FormControlLabel
              control={
                  <Checkbox onChange={handleChange} {...config} inputRef={ref} />
              }
              label={label}
          />
    </FormGroup>
  );
}

export default Checkboxes;
