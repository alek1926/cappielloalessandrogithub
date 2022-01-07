import * as React from "react";
import TextField from '@mui/material/TextField';

export const Form = (props) => {
    const handleChange = (e) => {

        props.newKeywords(e.target.value);

    };
  return (
<div className="Form">
  <TextField id="outlined-basic" label="Cerca" variant="outlined" defaultValue={props.keywords} onChange={handleChange} />
</div>
  );
};