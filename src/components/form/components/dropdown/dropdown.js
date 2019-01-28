import React from 'react';
import PropTypes from 'prop-types';
import {withFormsy, propTypes} from 'formsy-react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const Dropdown = ({name, options, renderError, ...controlProps}) => {
    const {
        getValue, setValue,
        validationError, getErrorMessage,
        isValid, isPristine
    } = controlProps;

    const shouldDisplayError = !isValid() && !isPristine();
    const error = getErrorMessage() || validationError;

    return (
      <FormControl error={shouldDisplayError} margin="dense">
          <InputLabel>{name}</InputLabel>

          <Select value={getValue()} onChange={e => setValue(e.target.value)}>
              {
                  options.map(({id, value}) => (
                    <MenuItem key={id} value={id}>{value}</MenuItem>
                  ))
              }
          </Select>

          {shouldDisplayError && renderError(error)}
      </FormControl>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    renderError: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    ...propTypes
};

export default withFormsy(Dropdown);

