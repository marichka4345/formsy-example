import React from 'react';
import PropTypes from 'prop-types';
import {withFormsy, propTypes} from 'formsy-react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const Dropdown = ({name, isValid, getValue, setValue, getErrorMessage, options, renderError}) => {
    const changeValue = e => {
        setValue(e.target.value);
    };

    return (
      <FormControl error={!isValid()}>
          <InputLabel>{name}</InputLabel>

          <Select value={getValue()} onChange={changeValue}>
              {
                  options.map(({id, value}) => (
                    <MenuItem key={id} value={id}>{value}</MenuItem>
                  ))
              }
          </Select>

          {renderError(getErrorMessage())}
      </FormControl>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    renderError: PropTypes.func.isRequired,
    ...propTypes
};

export default withFormsy(Dropdown);

