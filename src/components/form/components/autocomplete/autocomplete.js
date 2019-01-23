import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {withFormsy, propTypes} from 'formsy-react';
import NoSsr from '@material-ui/core/NoSsr';
import FormControl from '@material-ui/core/FormControl';
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
            getErrorMessage,
            renderError,
            isValid
        } = this.props;

        return (
          <FormControl
            fullWidth
            error={!isValid()}
          >
              <NoSsr>
                  <Select
                    options={options}
                    placeholder="Search a value"
                    value={this.state.selectedOption}
                    onChange={this.onChange}
                    isMulti={autocompleteType === AUTOCOMPLETE_TYPE.MULTI}
                    components={components}
                  />
              </NoSsr>

              {renderError(getErrorMessage())}
          </FormControl>
        );
    }
}

Autocomplete.propTypes = {
    ...propTypes,
    autocompleteType: PropTypes.string,
    renderError: PropTypes.func.isRequired
};

Autocomplete.defaultProps = {
    autocompleteType: AUTOCOMPLETE_TYPE.SINGLE
};

export default withFormsy(Autocomplete);

