import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withFormsy, propTypes} from 'formsy-react';
import TextField from '@material-ui/core/TextField/TextField';

const TextInput = ({name, getValue, getErrorMessage, setValue, isValid, renderError}) => {
    const changeValue = e => {
        setValue(e.target.value);
    };

    return (
      <Fragment>
          <TextField
            error={!isValid()}
            label={name}
            value={getValue()}
            onChange={changeValue}
          />

          {renderError(getErrorMessage())}
      </Fragment>
    );
};

TextInput.propTypes = {
    ...propTypes,
    renderError: PropTypes.func.isRequired
};

export default withFormsy(TextInput);
