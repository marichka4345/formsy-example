import {EditorState, ContentState} from 'draft-js';
import {addValidationRule} from 'formsy-react';

import * as FIELDS from '../../../constants/form-fields';
import {OPTIONS} from '../../../constants/options';
import {text} from '../../../constants/validation-regexps';
import * as CONTROL_TYPE from '../../../constants/control-types'
import {AUTOCOMPLETE_TYPE} from '../../../constants/autocomplete-types';

export const FORM_SCHEMA = {
    [FIELDS.TEXT1]: {
        type: CONTROL_TYPE.TEXT
    },
    [FIELDS.TEXT2]: {
        type: CONTROL_TYPE.TEXT
    },
    [FIELDS.DROPDOWN1]: {
        type: CONTROL_TYPE.DROPDOWN
    },
    [FIELDS.DROPDOWN2]: {
        type: CONTROL_TYPE.DROPDOWN
    },
    [FIELDS.AUTOCOMPLETE1]: {
        type: CONTROL_TYPE.AUTOCOMPLETE,
        autocompleteType: AUTOCOMPLETE_TYPE.SINGLE
    },
    [FIELDS.AUTOCOMPLETE2]: {
        type: CONTROL_TYPE.AUTOCOMPLETE,
        autocompleteType: AUTOCOMPLETE_TYPE.MULTI
    },
    [FIELDS.SWITCH]: {
        type: CONTROL_TYPE.SWITCH
    },
    [FIELDS.DRAFTJS]: {
        type: CONTROL_TYPE.DRAFTJS
    },
    [FIELDS.RADIOGROUP1]: {
        type: CONTROL_TYPE.RADIOGROUP,
        groupName: 'radioGroup1'
    }
};

addValidationRule('minDraft', function (values, value, number) {
    const text = value.getCurrentContent().getPlainText('');
    return text.length > number;
});

addValidationRule('maxDraft', function (values, value, number) {
    const text = value.getCurrentContent().getPlainText('');
    return text.length < number;
});

export const VALIDATION = {
    [FIELDS.TEXT1]: {
        validations: {
            minLength: 2,
            maxLength: 100,
            matchRegexp: text
        },
        validationErrors: {
            minLength: 'Text1 should have minimum 2 symbols',
            maxLength: 'Text1 should have maximum 100 symbols',
            matchRegexp: 'Text1 should not have special symbols at start/end'
        },
        required: true,
        value: '',
        validationError: 'Text1 is required'
    },
    [FIELDS.TEXT2]: {
        validations: {
            equalsField: FIELDS.TEXT1
        },
        validationErrors: {
            equalsField: 'Text2 should match text1'
        },
        value: '',
        required: true,
        validationError: 'Text2 is required'
    },
    [FIELDS.DROPDOWN1]: {
        value: '',
        required: true,
        validationError: 'Dropdown1 is required'
    },
    [FIELDS.DROPDOWN2]: {
        value: OPTIONS[0].id
    },
    [FIELDS.AUTOCOMPLETE1]: {
        value: '',
        required: true,
        validationError: 'Autocomplete1 is required'
    },
    [FIELDS.AUTOCOMPLETE2]: {
        validations: {
            minLength: 2,
            maxLength: 5
        },
        validationErrors: {
            minLength: 'You should choose at least 2 values',
            maxLength: 'You should choose maximum 5 values'
        },
        value: []
    },
    [FIELDS.SWITCH]: {
        value: false
    },
    [FIELDS.DRAFTJS]: {
        validations: {
            minDraft: 4,
            maxDraft: 100
        },
        validationErrors: {
            minDraft: 'You should enter minimum 5 symbols',
            maxDraft: 'You should enter less than 100 symbols'
        },
        value: EditorState.createWithContent(ContentState.createFromText(''))
    },
    [FIELDS.RADIOGROUP1]: {
        value: '',
        required: true,
        validationError: 'You should choose one option'
    }
};
