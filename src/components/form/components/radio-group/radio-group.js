import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Radio from '@material-ui/core/Radio/Radio';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl/FormControl';
import {withFormsy, propTypes} from 'formsy-react';

const RadioGroup = ({name, groupName, options, getValue, renderError, getErrorMessage, setValue}) => {
    return (
      <FormControl>
          <FormLabel>{groupName}</FormLabel>
          <MuiRadioGroup name={name} value={getValue()} onChange={e => setValue(e.target.value)}>
              {
                  options.map(({id, value: label}) => (
                    <FormControlLabel
                      key={id}
                      control={<Radio color="primary" />}
                      label={label}
                      value={String(id)}
                    />
                  ))
              }
          </MuiRadioGroup>

          {renderError(getErrorMessage())}
      </FormControl>
    );
};

RadioGroup.propTypes = {
    ...propTypes,
    groupName: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    renderError: PropTypes.func.isRequired
};

export default withFormsy(RadioGroup);
