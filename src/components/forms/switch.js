import React from "react";
import { Switch, FormGroup, FormControlLabel } from "@material-ui/core";

function Switches({ onChange, ref, config, label }) {
   const [state, setState] = React.useState();

   const handleChange = event => {
      setState(event.target.checked);
      onChange(event.target.checked);
   };

   return (
      <FormGroup row>
         <FormControlLabel control={<Switch onChange={handleChange} {...config} inputRef={ref} />} label={label} />
      </FormGroup>
   );
}

export default Switches;
