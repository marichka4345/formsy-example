import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchElement from '@material-ui/core/Switch';
import {withFormsy, propTypes} from 'formsy-react';

const Switch = ({name, getValue, setValue}) => {
    return (
      <FormControlLabel
        control={
            <SwitchElement
              onChange={e => setValue(e.target.checked)}
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
    ...propTypes,
    name: PropTypes.string.isRequired
};

export default withFormsy(Switch);
