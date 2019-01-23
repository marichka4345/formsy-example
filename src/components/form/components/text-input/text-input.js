import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withFormsy, propTypes} from 'formsy-react';
import TextField from '@material-ui/core/TextField/TextField';

const TextInput = ({name, renderError, ...controlProps}) => {
    const {
        getValue, setValue,
        validationError, getErrorMessage,
        isValid, isPristine
    } = controlProps;

    const shouldDisplayError = !isValid() && !isPristine();
    const error = getErrorMessage() || validationError;

    return (
      <Fragment>
          <TextField
            error={shouldDisplayError}
            label={name}
            value={getValue()}
            onChange={e => setValue(e.target.value)}
          />

          {shouldDisplayError && renderError(error)}
      </Fragment>
    );
};

TextInput.propTypes = {
    ...propTypes,
    renderError: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default withFormsy(TextInput);
