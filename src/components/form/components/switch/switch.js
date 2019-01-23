import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchElement from '@material-ui/core/Switch';
import {withFormsy, propTypes} from 'formsy-react';

const Switch = ({name, getValue, setValue}) => {
    return (
      <FormControlLabel
        control={
            <SwitchElement
              onChange={e => setValue(e.target.value)}
              checked={getValue()}
              value={name}
              color="primary"
            />
        }
        label="Switch"
      />
    );
};

Switch.propTypes = {
    ...propTypes
};

export default withFormsy(Switch);
