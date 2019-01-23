import React from 'react';
import * as CONFIG from '../constants/form-config';
import Dropdown from '../components/dropdown/dropdown';
import TextInput from '../components/text-input/text-input';
import Autocomplete from '../components/autocomplete/autocomplete';
import Switch from '../components/switch/switch';
import RadioGroup from '../components/radio-group/radio-group';
import DraftJs from '../components/draft-js/draft-js';
import * as CONTROL_TYPE from '../../../constants/control-types';
import {OPTIONS} from '../../../constants/options';

export const renderControls = (errorClass) => {
    return Object.entries(CONFIG.FORM_SCHEMA).map(([name, controlData]) => {

        const {
            type,
            autocompleteType,
            groupName
        } = controlData;

        const validations = CONFIG.VALIDATION[name];

        const commonProps = {
            name,
            renderError(error) {
                return (
                  error &&
                  <div className={errorClass}>{error}</div>
                );
            },
            ...validations
        };

        switch(type) {
            case CONTROL_TYPE.DROPDOWN:
                return <Dropdown
                  {...commonProps}
                  options={OPTIONS}
                />;

            case CONTROL_TYPE.AUTOCOMPLETE:
                return <Autocomplete
                  {...commonProps}
                  autocompleteType={autocompleteType}
                />;
            case CONTROL_TYPE.SWITCH:
                return <Switch
                  {...commonProps}
                />;
            case CONTROL_TYPE.RADIOGROUP:
                return <RadioGroup
                  {...commonProps}
                  groupName={groupName}
                  options={OPTIONS}
                />;
            case CONTROL_TYPE.DRAFTJS:
                return <DraftJs
                  {...commonProps}
                />;
            case CONTROL_TYPE.TEXT:
            default:
                return <TextInput
                  {...commonProps}
                />;
        }
    });
};
