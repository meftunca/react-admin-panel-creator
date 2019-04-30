import React from "react";
import { Radio, FormGroup, FormControlLabel } from "@material-ui/core";

const RadioButtons = ({ config, onChange, label, name, defaultValue, ref }) => {
   const { value } = config;
   const [selectedValue, setSelectedValue] = React.useState(defaultValue || false);

   const handleChange = event => {
      setSelectedValue(event.target.value);
      onChange(event.target.value);
   };
   return (
      <FormGroup row>
         <FormControlLabel
            control={
               <Radio
                  inputRef={ref}
                  onChange={handleChange}
                  checked={selectedValue}
                  name={name + String(Date.now())}
                  aria-label={config["aria-label"]}
               />
            }
            label={label}
         />
      </FormGroup>
   );
};

export default RadioButtons;
