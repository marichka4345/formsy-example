import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {withFormsy, propTypes} from 'formsy-react';
import NoSsr from '@material-ui/core/NoSsr';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import {AUTOCOMPLETE_TYPE} from '../../../../constants/autocomplete-types';
import {OPTIONS} from '../../../../constants/options';

const options = OPTIONS.map(({id: value, value: label}) => ({value, label}));

function MultiValue(props) {
    return (
      <Chip
        tabIndex={-1}
        label={props.children}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    );
}

const components = {
    MultiValue
};

const getSelectErrorStyle = hasError => ({
    control: provided => ({
        ...provided,
        borderColor: hasError ? 'red' : '#ccc'
    })
});

class Autocomplete extends Component {
    state = {
        selectedOption: null
    };

    onChange = async (selectedOption) => {

        const {
            autocompleteType,
            setValue
        } = this.props;

        await this.setState({selectedOption});

        const value = autocompleteType === AUTOCOMPLETE_TYPE.SINGLE
          ? selectedOption.value
          : selectedOption.map(({value}) => value);

        setValue(value);
    };

    render() {
        const {
            autocompleteType,
            getErrorMessage, validationError,
            renderError,
            isValid, isPristine,
            name
        } = this.props;

        const shouldDisplayError = !isValid() && !isPristine();
        const error = getErrorMessage() || validationError;

        return (
          <FormControl
            fullWidth
            margin="dense"
            error={shouldDisplayError}
          >
              <FormLabel>{name}</FormLabel>
              <NoSsr>
                  <Select
                    styles={getSelectErrorStyle(shouldDisplayError)}
                    options={options}
                    placeholder="Search a value"
                    value={this.state.selectedOption}
                    onChange={this.onChange}
                    isMulti={autocompleteType === AUTOCOMPLETE_TYPE.MULTI}
                    components={components}
                  />
              </NoSsr>

              {shouldDisplayError && renderError(error)}
          </FormControl>
        );
    }
}

Autocomplete.propTypes = {
    ...propTypes,
    autocompleteType: PropTypes.string,
    renderError: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

Autocomplete.defaultProps = {
    autocompleteType: AUTOCOMPLETE_TYPE.SINGLE
};

export default withFormsy(Autocomplete);

